import { ChessTile } from "./chessTile";
export class Board {
  private _board: ChessTile[][] = [];
  constructor() {
    for (let i = 0; i < 8; i++) {
      this._board[i] = [];
      for (let j = 0; j < 8; j++) {
        this._board[i][j] = new ChessTile(i, j);
      }
    }
  }

  public get board(): ChessTile[][] {
    return this._board;
  }
}
