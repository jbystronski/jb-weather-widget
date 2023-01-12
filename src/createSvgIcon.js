import { icons } from "./icons";

export function createSvgIcon({ path, color, size, clickHandler }) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const svgPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  svg.setAttribute("fill", `${color}`);
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("version", "1.1");

  svg.setAttribute("style", `width: ${size}; height: ${size};`);
  svgPath.setAttribute("d", `${icons[path]}`);

  svg.appendChild(svgPath);

  if (clickHandler) {
    svg.addEventListener("click", clickHandler);
  }

  return svg;
}
