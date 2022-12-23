
export class ChessPiece {
    public _x: number;
    public _y: number;
    public _color: string;
    public _type: string;
    public _hasMoved: boolean;

    constructor(x: number, y: number, color: string, type: string) {
        this._x = x;
        this._y = y;
        this._color = color;
        this._type = type;
        this._hasMoved = false;
    }
}