export const getTempUnit = (unit) =>
  ["celsius", "fahrenheit"].includes(unit) ? unit : "celsius";

export const getSpeedUnit = (unit) =>
  ["kmh", "ms", "mph", "kn"].includes(unit) ? unit : "kmh";
