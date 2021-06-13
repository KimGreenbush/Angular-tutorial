export class Point {
    // TS has access modifiers!
    // optional value (?) y: number | undefined
    constructor(private _x: number, private _y?: number) {}
    draw() {
        console.log("X: " + this._x  + ", Y: " + this._y)
    }
    // properties
    get x() { return this._x }
    set x(value) {
        if (value < 0) { // this set of curlies is opt??
            throw new Error("value cannot be less than 0.")
        }
        this.x = value
    }
}