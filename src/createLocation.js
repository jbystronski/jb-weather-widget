import { getFullLocation } from "./utils/getFullLocation";
import { globals } from "./utils/globals";
import { createElement } from "./utils/createElement";

export function createLocation(data) {
  const { daily, currentLocation } = data;

  const wrapper = document.createElement("div");

  const color = globals.theme.color.font.main;

  const locationText = createElement({
    tag: "p",
    classNames: "textPrimary",
    style: `color: ${color}`,
    innerText: currentLocation
      ? getFullLocation(currentLocation).split(", ").slice(0, 2).join(", ")
      : "",
  });

  const timeText = createElement({
    tag: "p",
    classNames: "textSecondary",
    style: `color: ${color}`,
    innerText: daily[0].time,
  });

  wrapper.append(locationText);
  wrapper.append(timeText);

  return wrapper;
}
