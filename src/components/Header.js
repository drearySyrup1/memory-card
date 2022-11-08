import React from "react";
import Logo from "./Logo";
import ChangeThemeButton from "./ChangeThemeButton";
import { useTheme } from "./ThemeContext";
import Scores from "./Scores";

function Header(props) {
  const darkTheme = useTheme();

  return (
    <div
      className="header"
      style={{
        backgroundColor: darkTheme ? "#171613" : "#b7a73e",
        padding: "4rem",
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        columnGap: "20px",
        alignItems: "center",
      }}
    >
      <Logo />
      <Scores level={props.level} scores={props.scores} />
      <ChangeThemeButton />
    </div>
  );
}

export default Header;
