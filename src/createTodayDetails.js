import { globals } from "./utils/globals";
import { createSvgIcon } from "./createSvgIcon";
import "./css/app.css";
import { createElement } from "./utils/createElement";

export function createTodayDetails(data) {
  const { daily, current_weather, tempSymbol, windspeed_unit } = data;

  const list = [
    {
      icon: "sunrise",
      val: `${daily[0]?.sunrise} (sunrise)`,
    },
    {
      icon: "sunset",
      val: `${daily[0].sunset} (sunset)`,
    },
    {
      icon: "temp_max",
      val: `max temperature ${daily[0].temp_max}${tempSymbol}`,
    },
    {
      icon: "temp_min",
      val: `min temperature ${daily[0].temp_min}${tempSymbol}`,
    },
    {
      icon: "wind",
      val: `wind speed ${current_weather.windspeed} ${windspeed_unit}`,
    },
  ];

  const container = createElement({ tag: "div" });

  list.forEach(({ icon, val }, index) => {
    const row = createElement({ tag: "div", classNames: "todayDetailsRow" });

    const svg = createSvgIcon({
      path: icon,
      size: "1.5rem",
      color: globals.theme.color.icon.right,
    });

    const text = createElement({
      tag: "p",
      classNames: ["textSecondary", "todayDetailsTextMargin"],
      style: `color: ${globals.theme.color.font.right}`,
      innerText: val,
    });

    row.append(svg);
    row.append(text);
    container.append(row);
  });

  return container;
}
