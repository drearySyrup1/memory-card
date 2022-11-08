import React, { useState } from "react";

const commonFontStyles = {
  color: "white",
};

function Scores(props) {
  return (
    <div className="scores">
      <p
        style={{
          fontSize: "3rem",
          ...commonFontStyles,
        }}
      >
        SCORE: {props.scores.score}
      </p>
      <p
        style={{
          fontSize: "2rem",
          ...commonFontStyles,
        }}
      >
        BEST SCORE: {props.scores.bestScore}
      </p>
      <p
        style={{
          fontSize: "1.5rem",
          ...commonFontStyles,
        }}
      >
        LEVEL: {props.level}
      </p>
    </div>
  );
}

export default Scores;
