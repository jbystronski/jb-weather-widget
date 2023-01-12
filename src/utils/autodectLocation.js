export function autodetectLocation() {
  return fetch("http://ip-api.com/json").then((result) =>
    result
      .json()
      .then((data) => console.log(data))
      .catch(console.error)
  );
}
