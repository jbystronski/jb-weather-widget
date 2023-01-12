export function createElement({ tag, classNames, style, innerText, id }) {
  const element = document.createElement(tag);

  if (classNames) {
    typeof classNames === "string"
      ? element.classList.add(classNames)
      : element.classList.add(...classNames);
  }

  if (style) {
    element.setAttribute("style", style);
  }

  if (id) {
    element.setAttribute("id", id);
  }

  if (innerText) {
    element.innerText = innerText;
  }

  return element;
}
