import { createLocation } from "./createLocation";
import { createToday } from "./createToday";
import { createGeolocation } from "./createGeolocation";
import { createTimer } from "./createTimer";
import { createElement } from "./utils/createElement";
import { classNames } from "./constants/classNames";

import "./css/app.css";

export function createMainScreen(data) {
  const container = createElement({
    tag: "div",
    classNames: classNames["mainScreenContainer"],
    id: "jb-weather-widget-main-screen",
  });

  [createLocation, createTimer, createToday, createGeolocation].forEach((fn) =>
    container.append(fn(data))
  );

  return container;
}
