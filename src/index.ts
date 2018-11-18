import { merge } from "typescript-object-utils";

import { unique } from "./array";
import { euclideanDistance } from "./euclideanDistance";
import { kmeansPlusPlusInit as defaultInitFunction } from "./initFunction";
import { optimizeCentroids } from "./kmeans";
import { arePointsEqual, Point } from "./point";
import { Cluster, KMeansOptions } from "./types";

export { Cluster, KMeansOptions };

export function kmeans(points: Point[], k: number, options?: Partial<KMeansOptions>): Cluster[] {
    const mergedOptions = merge(defaults, options);
    const centroids = initCentroids(points, k, mergedOptions);
    return optimizeCentroids(centroids, points, mergedOptions.onIteration);
}

function initCentroids(points: Point[], k: number, options: KMeansOptions): Point[] {
    const uniquePoints = unique(points, arePointsEqual);
    if(uniquePoints.length < k) {
        throw new Error("Not enough unique points");
    }

    return options.initFunction(uniquePoints, k, options.distanceFunction);
}

const defaults: KMeansOptions = {
    distanceFunction: euclideanDistance,
    initFunction: defaultInitFunction
};