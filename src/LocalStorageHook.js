import { useState, useEffect } from "react";
import UseLocalStorage from "./useLocalStorage";
function LocalStorageHook() {
  const [localValue, setLocalValue] = UseLocalStorage(
    "hookLocalStorage",
    "hello"
  );
  const storeValue = (e) => {
    e.preventDefault();
    setLocalValue(e.target.valuetostore.value);
  };
  return (
    <div>
      Local Stored value={localValue}
      <br />
      <form onSubmit={storeValue}>
        <input
          type="text"
          placeholder="Enter value to store in localStorage"
          name="valuetostore"
        ></input>
        <br />
        <button>Store Value</button>
      </form>
    </div>
  );
}
export default LocalStorageHook;
