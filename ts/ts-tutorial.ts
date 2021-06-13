// declar var types
let a: number
let b: boolean
let c: string
let d: any
let e: number[] = [1,2,3]
let f: any[] = [1, true, "a", false] //avoid if possible bc it's an inconsistent grouping

// enum is a group of constants that are zero index valued
// values can be explicitly defined for clarity and consistency
// js doesn't have enums so it creates a dict with a double ref between variables and their values, e.g. Red: 0, "0": "Red"
enum Colors { Red =0, Green =1, Blue =2}
let bgcolor = Colors.Red
Colors.Green == 1 // true

// type assertions
let message
message = "abc"
let endsWithC = message.endsWith("c")
//let endsWithC = (message as string).endsWith("c") <= no longer necessary
// let endsWithC = (<string>message).endsWith("c") <= no longer necessary

// custom types, OOP
// interface for strict type referencing
interface IPoint {
    x: number,
    y: number,
}

let drawPoint = (point: IPoint) => {
    // ...
}

// inline annotation (verbose)
// let drawPoint = (point: {x: number, y: number}) => {
//      ...
// }

drawPoint({
    x: 1,
    y: 2
})

// Cohesion: grouping related vars and functions together in classes <== OOP!!
import {Point} from "./point" // imports are typically at the top

let point = new Point(1);
point.draw()
point.x = 10
console.log(point.x)