import { globals } from "./utils/globals";
import { createMainScreen } from "./createMainScreen";
import { createRightScreen } from "./createRigthScreen";
import { createBottomScreen } from "./createBottomScreen";
import { createElement } from "./utils/createElement";

export function createMain(data) {
  const wrapper = createElement({
    tag: "div",
    style: `display: grid; gap: ${globals.theme.spacing.inner}; padding: ${globals.theme.spacing.outer}; background-color: ${globals.theme.bg.main}; border-radius: ${globals.theme.borderRadius.container};`,
  });

  const mainScreen = createMainScreen(data);
  const rightScreen = createRightScreen(data);
  const forecastArray = createBottomScreen(data);

  wrapper.append(mainScreen);
  wrapper.append(rightScreen);
  forecastArray.forEach((fc) => {
    wrapper.append(fc);
  });

  return wrapper;
}
