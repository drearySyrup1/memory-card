import React from "react";
import DayLogo from "../imgs/daylogo.png";
import NightLogo from "../imgs/nightlogo.png";
import { useTheme } from "./ThemeContext";
function Logo() {
  const darkTheme = useTheme();

  return (
    <div className="logo">
      <img src={darkTheme ? NightLogo : DayLogo} alt="" />
    </div>
  );
}

export default Logo;
