import React, { useState } from "react";
import DarkTheme from "./darkTheme";

function loadDarkMode() {
  if (typeof localStorage === "undefined") {
    return "Dark Theme";
  }
  const value = localStorage.getItem("Dark Theme");
  return value === null ? "Light Theme" : "Dark Theme";
}
export default function Mode() {
  const [modeState, setModeState] = useState(loadDarkMode);
  function handleClick() {
    localStorage.setItem("Dark Theme", modeState);
    modeState === "Dark Theme"
      ? setModeState("Light Theme")
      : setModeState("Dark Theme");
  }
  return (
    <>
      <button onClick={handleClick} suppressHydrationWarning>
        {modeState}
      </button>
      {modeState === "Light Theme" && <DarkTheme />}
      <style jsx>
        {`
          button {
            color: inherit;
            display: inline;
            border: none;
            background: none;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
