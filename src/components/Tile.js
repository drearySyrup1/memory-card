import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Tile(props) {
  const darkTheme = useTheme();
  const [order, setOrder] = useState("initial");

  useEffect(() => {
    setOrder(getRandomInt(1, props.maxOrder));
  });

  return (
    <div
      className="tile"
      onClick={() => props.handleTileOnClick(props.id)}
      style={{
        "--hover-color": darkTheme
          ? "#ff0000"
          : "hsl(52 80% 60% / 1)",
        color: darkTheme ? "white" : "black",
        backgroundColor: darkTheme ? "#3b3831" : "white",
        boxShadow: darkTheme
          ? "0 0 10px 0 hsl(0 0% 100% / .6)"
          : "0 0 10px 0 hsl(0 0% 0% / .25)",
        width: "200px",
        padding: "2.5rem",
        borderRadius: "10px",
        display: "grid",
        rowGap: "20px",
        fontSize: ".9rem",
        transition: "box-shadow 150ms",
        cursor: "pointer",
        order: order,
      }}
    >
      <div
        style={{
          borderRadius: "20px",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <img
          style={{
            width: "120px",
            height: "120px",
            objectFit: "cover",
          }}
          src={`../../characters/${props.src}`}
          alt=""
        />
      </div>
      <p
        style={{
          justifySelf: "center",
          textAlign: "center",
          height: "30px",
        }}
      >
        {props.name}
      </p>
    </div>
  );
}

export default Tile;
