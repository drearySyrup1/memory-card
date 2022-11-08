import React, { useState, useEffect, useMemo, useRef } from "react";
import Tile from "./Tile";
import characterData from "../characterData";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTileAmount(level) {
  if (level === 1) return 4;
  return 2 + getTileAmount(level - 1);
}

// let remainingTiles = [...characterData];

const getLevelTiles = (tileAmount, remainingTiles) => {
  if (remainingTiles.length === 0) return null;
  // Getting how many tiles needed for current level

  const tilesForLevel = [];

  for (let i = 0; i < tileAmount; i++) {
    const index = getRandomInt(0, remainingTiles.length - 1);
    const tile = remainingTiles[index];
    tilesForLevel.push(tile);
    remainingTiles.splice(index, 1);
  }
  console.log(remainingTiles);
  console.log({ tilesForLevel });

  return tilesForLevel;
};

function Tiles(props) {
  const remainingTiles = useMemo(
    () => [...characterData],
    [props.reset]
  );

  const clickedTiles = useMemo(
    () => [],
    [props.level, props.reset]
  );

  const tileAmount = useMemo(
    () => getTileAmount(props.level),
    [props.level]
  );

  const handleTileOnClick = (id) => {
    if (!clickedTiles.includes(id)) {
      clickedTiles.push(id);
      props.incrementScore();
    } else {
      props.toggleModal("YOU LOST");
    }

    if (props.level === 5 && clickedTiles.length === tileAmount) {
      props.toggleModal("YOU WIN");
      return;
    }
    if (clickedTiles.length === tileAmount) {
      props.incrementLevel();
      return;
    }
  };

  let tiles = useMemo(
    () => getLevelTiles(tileAmount, remainingTiles),
    [props.level, props.reset]
  );

  if (tiles !== null) {
    tiles = tiles.map((character) => {
      console.log(tileAmount);
      return (
        <Tile
          maxOrder={tileAmount}
          key={character.id}
          id={character.id}
          src={character.src}
          name={character.name}
          handleTileOnClick={handleTileOnClick}
        />
      );
    });
  }
  return (
    <div
      className="tile-grid"
      style={{
        padding: "2rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "2rem",
        placeItems: "center",
      }}
    >
      {tiles}
    </div>
  );
}

export default Tiles;
