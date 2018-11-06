import { Point } from "./point";

export function euclideanDistance(a: Point, b: Point): number {
    if(a.length !== b.length){
       throw new Error("The vectors must be of same length");
    }
    
    let sum = 0.0;
    for(let n = 0; n < a.length; n++){
        sum += Math.pow(a[n] - b[n], 2);
    }
    return Math.sqrt(sum);
}