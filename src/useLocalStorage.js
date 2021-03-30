import { useState, useEffect } from "react";

function UseLocalStorage(storageKey, defaultValue) {
  //return value previously stored.if no value stored, we set the default value
  const getStoredValue = () => {
    let storedValue = window.localStorage.getItem(storageKey);
    if (storedValue == undefined) {
      return defaultValue;
      return JSON.parse(storedValue);
    }
  };
  const [localValue, setLocalValue] = useState(getStoredValue);
  useEffect(() => {
    if (!window.localStorage) {
      alert("sorry local storage not found!");
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem(storageKey, localValue);
  }, [localValue]);

  return [localValue, setLocalValue];
}
export default UseLocalStorage;
