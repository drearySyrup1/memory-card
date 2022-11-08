import characterData from "../characterData";

export function generateNewCharacterSet() {
  return [...characterData];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTileAmount(level) {
  if (level === 1) return 4;
  return 2 + getTileAmount(level - 1);
}

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
