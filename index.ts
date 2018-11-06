import { merge } from "typescript-object-utils";
import { Cluster, optimizeCentroids } from "./src/kmeans";
import { Point } from "./src/point";
import { randomPick } from "./src/randomPick";

export { Cluster };

export function kmeans(points: Point[], k: number, options?: Partial<KMeansOptions>): Cluster[] {
    options = merge(defaults, options);
    const centroids = options.initFunction(points, k);
    return optimizeCentroids(centroids, points);
}

export interface KMeansOptions {
    initFunction: (points: Point[], k: number) => Point[];
}

const defaults: KMeansOptions = {
    initFunction: randomPick
};