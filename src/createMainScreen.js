import { createLocation } from "./createLocation";
import { createToday } from "./createToday";
import { createGeolocation } from "./createGeolocation";
import { createTimer } from "./createTimer";
import { createElement } from "./utils/createElement";

import "./css/app.css";

export function createMainScreen(data) {
  const container = createElement({
    tag: "div",
    classNames: "mainScreenContainer",
    id: "weatherWidgetMainScreen",
  });

  [createLocation, createTimer, createToday, createGeolocation].forEach((fn) =>
    container.append(fn(data))
  );

  return container;
}
