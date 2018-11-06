import { arePointsEqual, Point } from "./point";

export function randomPick(arr: Point[], cnt: number): Point[]{
    const copy = unique(arr);
    if(copy.length < cnt) {
        throw new Error("Not enough unique points");
    }
    const picks = [];

    for(let i = 0; i < cnt; i++) {
        const idx = Math.floor(Math.random() * copy.length);
        picks.push(copy[idx]);
        copy.splice(idx, 1);
    }

    return picks;
}

function unique(arr: Point[]): Point[] {
    return arr.reduce((prev: Point[], value: Point) => {
        if(-1 === prev.findIndex((p: Point) => {
            return arePointsEqual(p, value);
        })) {
            prev.push(value);
        }

        return prev;
    }, []);
}