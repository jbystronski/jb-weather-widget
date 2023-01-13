import "./css/app.css";
import { createSvgIcon } from "./createSvgIcon";
import { globals } from "./utils/globals";
import { createElement } from "./utils/createElement";
import { classNames } from "./constants/classNames";

export function createForecast({
  description,
  icon,
  temp_max,
  temp_min,
  time,
  tempSymbol,
}) {
  const container = createElement({
    tag: "div",
    classNames: classNames["forecastContainer"],
    style: `background-color: ${globals.theme.bg.bottom}; border-radius: ${globals.theme.borderRadius.element}`,
  });

  const timeWrapper = createElement({
    tag: "div",
    classNames: classNames["forecastTimeWrapper"],
  });

  const timeText = createElement({
    tag: "p",
    innerText: time,
    classNames: classNames["textSecondary"],
    style: `color: ${globals.theme.color.font.bottom}`,
  });

  const iconWrapper = createElement({
    tag: "div",
    classNames: classNames["forecastIconWrapper"],
  });

  const svg = createSvgIcon({
    path: icon,
    color: globals.theme.color.icon.bottom,
    size: "3.5rem",
  });

  const textWrapper = createElement({
    tag: "div",
    classNames: classNames["forecastTextWrapper"],
  });

  const temperatureText = createElement({
    tag: "p",
    innerText: `${Math.round(temp_max)}${tempSymbol}/${Math.round(
      temp_min
    )}${tempSymbol}`,
    classNames: classNames["textSecondary"],
    style: `color: ${globals.theme.color.font.bottom}`,
  });

  const descriptionText = createElement({
    tag: "p",
    innerText: description,
    classNames: classNames["textSecondary"],
    style: `color: ${globals.theme.color.font.bottom}`,
  });

  timeWrapper.append(timeText);

  iconWrapper.append(svg);
  [temperatureText, descriptionText].forEach((v) => textWrapper.append(v));

  [timeWrapper, iconWrapper, textWrapper].forEach((v) => container.append(v));

  return container;
}
