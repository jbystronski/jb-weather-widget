import { globals } from "./utils/globals";
import { getSpeedUnit, getTempUnit } from "./utils/getUnits";
import { getGpsData } from "./utils/getGpsData";
import { createMain } from "./createMain";
import { createDropdownList } from "./createDropdownList";
import { randomLocations } from "./constants/randomLocations";
import { getWeatherData } from "./utils/getWeatherData";
import { Storage } from "./utils/Storage";
import { localStorageKey } from "./constants/localStorageKey";

export class WeatherWidget {
  constructor({
    parentContainer,
    defaultLocation = randomLocations[
      Math.floor(Math.random() * randomLocations.length)
    ],
    theme,
    units,
    remember = false,
    refresh = 60,
  }) {
    this.defaultLocation = defaultLocation;
    this.parentContainer = document.getElementById(parentContainer);
    this.windspeed_unit = getSpeedUnit(units?.speed);
    this.temperature_unit = getTempUnit(units?.temperature);
    this.refresh = refresh;
    this.remember = remember;
    globals.theme = { ...globals.theme, ...theme };

    globals.handleChangeLocation = (index) => {
      if (!this.gpsData) return;

      this.renderWithRefresh(this.gpsData[index]);
    };

    globals.handleSearch = (v) => {
      getGpsData({ name: v }).then((data) => {
        this.gpsData = data;

        const container = document.getElementById(
          "jb-weather-widget-dropdown-container"
        );

        container.replaceChild(
          createDropdownList(this.gpsData),
          container.lastChild
        );
      });
    };

    this.getInitialLocation().then((data) => this.renderWithRefresh(data[0]));
  }

  getUnits() {
    return {
      windspeed_unit: this.windspeed_unit,
      temperature_unit: this.temperature_unit,
    };
  }

  async renderWithRefresh(location) {
    if (this.remember) Storage.set(location);

    if (this.timer) {
      clearInterval(this.timer);
    }

    const render = () =>
      getWeatherData({ ...location, ...this.getUnits() }).then((data) => {
        this.render({
          currentLocation: location,
          gpsData: this.gpsData || [],
          windspeed_unit: this.windspeed_unit,

          ...data,
        });
      });

    render();

    this.timer = setInterval(render, this.refresh * 100 * 1000);
  }

  async getInitialLocation() {
    return this.remember && Storage.has(localStorageKey)
      ? Storage.get(localStorageKey)
      : await getGpsData({
          count: 1,
          name: this.defaultLocation,
        });
  }

  render(data) {
    if (typeof this.parentContainer.replaceChildren === "function") {
      this.parentContainer.replaceChildren(createMain(data));
    } else {
      this.parentContainer.innerHTML = createMain(data);
    }
  }
}
