import { pad, getTimezoneCurrentTime } from "./utils/formatTime";
import { globals } from "./utils/globals";
import { createElement } from "./utils/createElement";

export function createTimer(data) {
  const timerText = createElement({
    tag: "p",
    classNames: "textSecondary",
    style: `color: ${globals.theme.color.font.timer}`,
  });

  function startTimer() {
    let timer;

    if (timer) {
      clearInterval(timer);
    }

    timerText.innerText = "00 : 00 : 00";
    timer = setInterval(() => {
      const time = getTimezoneCurrentTime(data.utc_offset_seconds);

      timerText.innerText = `${pad(time.getHours())} : ${pad(
        time.getMinutes()
      )} : ${pad(time.getSeconds() + 1)}`;
    }, 1000);
  }

  startTimer();

  return timerText;
}
