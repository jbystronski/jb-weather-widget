const keys = ["name", "country", "admin1", "admin2"];

export const getFullLocation = (locationDataObject) => {
  return Object.keys(locationDataObject)
    .map((key) => {
      if (keys.includes(key)) {
        return locationDataObject[key];
      }
    })
    .filter((el) => !!el)
    .join(", ");
};
