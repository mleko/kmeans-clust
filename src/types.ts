import { Point } from "./point";

export interface Cluster {
    centroid: Point;
    points: Point[];
    error: number;
}

export interface KMeansOptions {
    distanceFunction: DistanceFunction;
    initFunction: InitFunction;
    onIteration?: (clusters: Cluster[]) => any;
}

export type DistanceFunction = (a: Point, b: Point) => number;
export type InitFunction = (points: Point[], k: number, distanceFn: DistanceFunction) => Point[];