import "./css/app.css";
import { globals } from "./utils/globals";
import { createSvgIcon } from "./createSvgIcon";
import { createElement } from "./utils/createElement";
import { createDropdownList } from "./createDropdownList";
import { classNames } from "./constants/classNames";

export function createGeolocation(data) {
  const { gpsData } = data;

  function onSearch(v) {
    if (v !== "") {
      globals.handleSearch(
        v.trim().charAt(0).toUpperCase() + v.trim().slice(1)
      );
    }
  }

  const container = createElement({
    tag: "div",
    classNames: classNames["geoDropdownContainer"],
    id: "jb-weather-widget-dropdown-container",
  });

  const inputWrapper = createElement({
    tag: "div",
    classNames: classNames["geoDropdownInputWrapper"],
    style: `color: ${globals.theme.color.font.main}`,
  });

  const iconWrapper = createElement({
    tag: "div",
    classNames: classNames["geoDropdownIconsWrapper"],
  });

  const input = createElement({
    tag: "input",
    id: "jb-weather-widget-geo-dropdown-input",
    classNames: classNames["geoDropdownInput"],
    style: `color: ${globals.theme.color.font.main}`,
  });

  const arrowDownIcon = createSvgIcon({
    color: globals.theme.color.font.main,
    size: "0.5rem",
    path: "arrow_down",
    clickHandler: function () {
      const list = document.querySelector(
        ".jb-weather-widget-geo-dropdown-list"
      );

      list.classList.contains("hidden")
        ? list.classList.remove("hidden")
        : list.classList.add("hidden");
    },
  });
  const searchIcon = createSvgIcon({
    color: globals.theme.color.font.main,
    size: "1rem",
    path: "search",
    clickHandler: (e) => {
      onSearch(
        document.getElementById("jb-weather-widget-geo-dropdown-input").value
      );
    },
  });

  input.addEventListener("keydown", function (e) {
    if (e.key.toLowerCase() === "enter") {
      onSearch(e.target.value);
    }
  });

  inputWrapper.append(input);

  [arrowDownIcon, searchIcon].forEach((v) => iconWrapper.append(v));
  inputWrapper.append(iconWrapper);
  container.append(inputWrapper);

  container.append(createDropdownList(gpsData));
  return container;
}
