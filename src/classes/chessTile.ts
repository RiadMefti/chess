import { ChessPiece } from "./chessPiece";

export class ChessTile {
  public _x: number;
  public _y: number;
  public color = "";
  public _piece: ChessPiece | null;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
    this._piece = null;
    this.color = (this._x + this._y) % 2 === 0 ? "white" : "black";
  }
}
