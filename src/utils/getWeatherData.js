import { apiProviders } from "./apiProviders";

export async function getWeatherData(input) {
  if (!input) return;

  const { timezone, longitude, latitude, temperature_unit, windspeed_unit } =
    input;

  let { url, responseParser, requestParams } = apiProviders["openMeteo"];

  const weatherApiInput = {
    ...requestParams,
    longitude,
    latitude,
    timezone,
    temperature_unit,
    windspeed_unit,
  };

  return await fetch(
    url +
      Object.keys(weatherApiInput)
        .map((key) => `${key}=${weatherApiInput[key]}`)
        .join("&")
  )
    .then((result) => result.json())
    .then((result) => {
      return responseParser(result);
    })
    .catch(console.error);
}
