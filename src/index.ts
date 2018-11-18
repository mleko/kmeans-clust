import { merge } from "typescript-object-utils";
import { Cluster, optimizeCentroids } from "./kmeans";
import { Point } from "./point";
import { randomPick } from "./randomPick";

export { Cluster };

export function kmeans(points: Point[], k: number, options?: Partial<KMeansOptions>): Cluster[] {
    options = merge(defaults, options);
    const centroids = options.initFunction(points, k);
    return optimizeCentroids(centroids, points, options.onIteration);
}

export interface KMeansOptions {
    initFunction: (points: Point[], k: number) => Point[];
    onIteration?: (clusters: Cluster[]) => any;
}

const defaults: KMeansOptions = {
    initFunction: randomPick
};