import { createForecast } from "./createForecast";

export function createBottomScreen(data) {
  const { daily, tempSymbol } = data;

  if (daily && daily.length) {
    return daily
      .slice(1, 6)
      .map(({ description, icon, temp_max, temp_min, time }, index) =>
        createForecast({
          description,
          icon,
          temp_max,
          temp_min,
          time,
          key: time + index,
          tempSymbol,
        })
      );
  }
}
