import { globals } from "./utils/globals";
import { createSvgIcon } from "./createSvgIcon";
import "./css/app.css";
import { createElement } from "./utils/createElement";
import { classNames } from "./constants/classNames";

export function createToday(data) {
  const { daily, current_weather, tempSymbol } = data;

  const container = createElement({
    tag: "div",
    classNames: classNames["todayContainer"],
  });
  const inner = createElement({
    tag: "div",
    classNames: classNames["todayInner"],
  });
  const iconContainer = createElement({
    tag: "div",
    classNames: classNames["todayIconContainer"],
  });
  const temperatureAndDescriptionWrapper = createElement({ tag: "div" });

  const svg = createSvgIcon({
    size: "7.5rem",
    path: daily[0]["icon"],
    color: globals.theme.color.icon.main,
  });

  const temperatureWrapper = createElement({
    tag: "div",
    classNames: classNames["todayTemperatureWrapper"],
  });

  const temperature = createElement({
    classNames: classNames["todayTemperature"],
    tag: "h4",
    style: `text-align: center; color: ${globals.theme.color.font.main}`,
    innerText: `${current_weather.temperature}${tempSymbol}`,
  });

  const description = createElement({
    tag: "p",
    classNames: classNames["textPrimary"],
    style: `text-align: center; color: ${globals.theme.color.font.main}`,
    innerText: daily[0]["description"],
  });

  temperatureWrapper.append(temperature);

  iconContainer.append(svg);

  [temperatureWrapper, description].forEach((v) =>
    temperatureAndDescriptionWrapper.append(v)
  );

  inner.append(iconContainer);
  inner.append(temperatureAndDescriptionWrapper);
  container.append(inner);
  return container;
}
