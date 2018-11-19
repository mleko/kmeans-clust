import { Point } from "../point";   
import { DistanceFunction, InitFunction } from "./../types";
import { weightedPick } from "./weightedPick";

export const kmeansPlusPlusInit: InitFunction = (points: Point[], cnt: number, distanceFn: DistanceFunction): Point[] => {
    const picks = [points[Math.floor(Math.random() * points.length)]];

    for(let i = 1; i < cnt; i++) {
        const weights = points.map((p) => {
            return picks.reduce((carry, centroid) => {
                return Math.min(carry, distanceFn(p, centroid));
            }, Infinity);
        });
        const idx = weightedPick(weights, Math.random());
        picks.push(points[idx]);
    }

    return picks;
};
