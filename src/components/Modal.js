import React from "react";
import { useTheme } from "./ThemeContext";

function Modal(props) {
  const darkTheme = useTheme();

  return (
    <div className="overlay">
      <div
        style={{
          "--bgc": darkTheme ? "#222" : "#fff",
          "--text-color": darkTheme ? "#fff" : "#000",
          "--hue": darkTheme ? "0" : "60",
        }}
        className="modal"
      >
        <p>{props.value}</p>
        <button onClick={props.resetGame}>Play again</button>
      </div>
    </div>
  );
}

export default Modal;
