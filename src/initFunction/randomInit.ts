import { Point } from "../point";
import { InitFunction } from "../types";

export const randomInit: InitFunction = (arr: Point[], cnt: number): Point[] => {
    const copy = arr.concat();
    const picks = [];

    for(let i = 0; i < cnt; i++) {
        const idx = Math.floor(Math.random() * copy.length);
        picks.push(copy[idx]);
        copy.splice(idx, 1);
    }

    return picks;
};
