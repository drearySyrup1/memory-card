import React, { useEffect } from "react";
import Icon from "@mdi/react";
import { mdiMoonWaxingCrescent, mdiWeatherSunny } from "@mdi/js";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const WIDTH = "50px";

function ChangeThemeButton() {
  const themeToggle = useThemeUpdate();
  const darkTheme = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = darkTheme
      ? "#1f1d19"
      : "white";
  }, [darkTheme]);

  return (
    <button
      className="change-theme-button"
      style={{
        padding: "1rem",
        backgroundColor: "white",
        width: WIDTH,
        height: WIDTH,
        borderRadius: "100px",
        display: "grid",
        placeContent: "center",
        justifySelf: "end",
        border: 0,
        cursor: "pointer",
        transition: "background-color 200ms",
      }}
      onClick={themeToggle}
    >
      <Icon
        path={darkTheme ? mdiWeatherSunny : mdiMoonWaxingCrescent}
        size={1.3}
        rotate={45}
      />
    </button>
  );
}

export default ChangeThemeButton;
