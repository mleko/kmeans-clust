import { Point } from "./point";
import { Cluster, DistanceFunction } from "./types";

export function assembleClusters(centroids: Point[], points: Point[], distanceFunction: DistanceFunction): Cluster[] {
    const map = buildDistanceMap(centroids, points, distanceFunction);
    
    const clusters: Cluster[] = [];
    for(let c = 0; c < centroids.length; c++) {
        clusters[c] = {
            centroid: centroids[c],
            points: [],
            error: 0.0
        };
    }
    
    for(let p = 0; p < points.length; p++) {
        let idx = 0;
        let d = map[0][p];
        for(let c = 1; c < centroids.length; c++) {
            if(map[c][p] < d) {
                d = map[c][p];
                idx = c;
            }
        }
        clusters[idx].points.push(points[p]);
        clusters[idx].error += d;
    }
    return clusters;
}

function buildDistanceMap(centroids: Point[], points: Point[], distanceFunction: DistanceFunction): number[][] {
    const map = [];
    for(let c = 0; c < centroids.length; c++){
        map[c] = [];
        for(let p = 0; p < points.length; p++){
            map[c][p] = distanceFunction(centroids[c], points[p]);
        }
    }
    return map;
}