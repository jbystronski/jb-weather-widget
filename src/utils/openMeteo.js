import { getWeekdayMonthYear, getHoursMinutes } from "./formatTime";

const weatherCodes = {
  0: ["Clear sky", "clear_d"],
  1: ["Mainly clear", "clear_d"],
  2: ["Partly cloud", "cloudy_d"],
  3: ["Overcast", "cloud"],
  45: ["Fog", "mist"],
  48: ["Depositing rime fog", "mist"],
  51: ["Light drizzle", "rain"],
  53: ["Moderate drizzle", "rain"],
  55: ["Dense drizzle", "rain"],
  56: ["Light freezing drizzle", "rain"],
  57: ["Dense freezing drizzle", "rain"],
  61: ["Slight rain", "rain"],
  63: ["Moderate rain", "rain"],
  65: ["Heavy rain", "showers"],
  66: ["Light freezing rain", "rain"],
  67: ["Heavy freezing rain", "showers"],
  71: ["Light snow", "snow"],
  73: ["Moderate snow", "snow"],
  75: ["Heavy snow", "snow"],
  77: ["Grainy snow", "snow"],
  80: ["Light rain showers", "showers"],
  81: ["Moderate rain showers", "showers"],
  82: ["Heavy rain showers", "showers"],
  85: ["Light snow showers", "snow"],
  86: ["Heavy snow showers", "snow"],
  95: ["Thunderstorm", "thunderstorm"],
  96: ["Thunderstorm with light hail", "thunderstorm"],
  99: ["Thunderstorm with heavy hail", "thunderstorm"],
};

export const openMeteo = {
  url: "https://api.open-meteo.com/v1/forecast?",
  requestParams: {
    latitude: "",
    longitude: "",
    current_weather: true,
    temperature_unit: "celsius",
    daily: "temperature_2m_max,temperature_2m_min,weathercode,sunrise,sunset",
    timezone: "",
    temperature_unit: "celsius",
    windspeed_unit: "kmh",
  },
  responseParser: (responseData) => {
    const $ = responseData;

    $.current_weather["description"] =
      weatherCodes[$?.current_weather?.weathercode][0];
    $.tempSymbol = $?.daily_units.temperature_2m_max;

    const currentTime = new Date($.current_weather.time);
    const isDay =
      currentTime > new Date($?.daily["sunrise"][0]) &&
      currentTime < new Date($?.daily["sunset"][0]);

    $.daily = $?.daily.time.map((el, index) => {
      return {
        description: weatherCodes[$?.daily.weathercode[index]][0],
        temp_max: $?.daily.temperature_2m_max[index],
        temp_min: $?.daily.temperature_2m_min[index],
        time: getWeekdayMonthYear(new Date($?.daily.time[index])),
        icon: weatherCodes[$?.daily.weathercode[index]][1],
        sunset: getHoursMinutes(new Date($?.daily.sunset[index])),
        sunrise: getHoursMinutes(new Date($?.daily.sunrise[index])),
      };
    });

    const mainIcon = $?.daily[0]["icon"];

    if (!isDay && mainIcon.endsWith("_d")) {
      $.daily[0]["icon"] = mainIcon.slice(0, -2) + "_n";
    }

    return $;
  },
};
