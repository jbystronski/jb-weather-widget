export class Storage {
  static storageKey = "";

  static setKey(key) {
    Storage.storageKey = key;
  }

  static get(key = Storage.storageKey) {
    return JSON.parse(localStorage.getItem(key));
  }

  static set(value, key = Storage.storageKey) {
    if (localStorage) localStorage.setItem(key, JSON.stringify(value));
  }

  static has(key = Storage.storageKey) {
    if (localStorage) return !!localStorage.getItem(key);
  }
}
