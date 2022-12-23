import React from "react";
import "./Tile.css";
interface TileProps {
  color: string;
  x: number;
  y: number;
}
const numbers = [8, 7, 6, 5, 4, 3, 2, 1];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

const Tile = (props: TileProps) => {
  const font = props.color === "white" ? "black-font" : "white-font";
  let number = null;
  let letter = null;
  if (props.x === 0){
    number = numbers[props.y];

  }
  if (props.y === 7){
    letter = letters[props.x];
  }
  return (
    <div className={props.color + " tile"}>
      <span className={"number " + font}>{number}</span>
      <span className={"letter " + font}>{letter}</span>
    </div>
  );
};

export default Tile;
