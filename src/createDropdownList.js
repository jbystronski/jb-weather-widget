import { globals } from "./utils/globals";
import { createElement } from "./utils/createElement";
import { getFullLocation } from "./utils/getFullLocation";

export function createDropdownList(gpsData) {
  const list = createElement({
    tag: "ul",

    classNames: ["geoDropdownList"],
  });

  function handleListItemClick(index) {
    globals.handleChangeLocation(index);
  }

  if (gpsData && gpsData.length) {
    gpsData.forEach((location, index) => {
      const li = createElement({
        tag: "li",
        classNames: "geoDropdownListItem",
        style: `background-color: ${globals.theme.bg.list.main}; color: ${globals.theme.color.font.list.main}; border-color: ${globals.theme.bg.list.border};`,
        innerText: getFullLocation(location),
      });

      li.addEventListener("click", function () {
        handleListItemClick(index);
      });

      list.append(li);
    });
  }

  return list;
}
