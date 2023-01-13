import { globals } from "./utils/globals";
import { createTodayDetails } from "./createTodayDetails";
import "./css/app.css";
import { createElement } from "./utils/createElement";
import { classNames } from "./constants/classNames";

export function createRightScreen(data) {
  const container = createElement({
    tag: "div",
    classNames: classNames["rightScreenContainer"],
    style: `background-color: ${globals.theme.bg.right}; border-radius: ${globals.theme.borderRadius.element}`,
  });

  container.append(createTodayDetails(data));

  return container;
}
