export type Point = number[];

export function arePointsEqual(a: Point, b: Point): boolean {
    if(a.length !== b.length) {
        return false;
    }
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]){
            return false;
        }
    }
    return true;
}