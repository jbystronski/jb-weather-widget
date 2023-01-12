import {
  geocodingApiUrl as url,
  geocodingApiParams as defaultParams,
} from "../constants/geocodingApi";

export const getGpsData = async (paramsObject) =>
  await fetch(url + new URLSearchParams({ ...defaultParams, ...paramsObject }))
    .then((result) => result.json())
    .then((result) => {
      return result.results;
    })
    .catch(console.error);
