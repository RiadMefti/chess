import React from "react";
import { Board } from "../../classes/chessBoard";
import Tile from "../tile/Tile";
import "./ChessBoard.css";

const ChessBoard = () => {
  const board = new Board();
  console.log()
  return (
    <table className="chess-board">
      {board.board.map((row, i) => (
        <tr key={i}>
          {row.map((square, j) => (
            <Tile key={j} color={square.color} x={square._x} y={square._y} />
          ))}
        </tr>
      ))}
    </table>
  );
};

export default ChessBoard;
