import {assembleClusters} from "./assembleClusters";
import { arePointsEqual, Point } from "./point";

export function optimizeCentroids<L>(centroids: Point[], points: Point[]): Cluster[] {
    let clusters = assembleClusters(centroids, points);
    let run = true;
    while(run) {
        run = false;
        centroids = [];
        for(const cluster of clusters) {
            const centroid = clusterCentroid(cluster);
            centroids.push(centroid);
            if(!arePointsEqual(centroid, cluster.centroid)) {
                run = true;
            }
        }
        clusters = assembleClusters(centroids, points);
    }
    return clusters;
}

function clusterCentroid(cluster: Cluster): Point {
    const centroid = cluster.points[0].concat();
    
    for(let i = 1; i < cluster.points.length; i++) {
        for(let d = 0; d < centroid.length; d++) {
            centroid[d] += cluster.points[i][d];
        }
    }
    for(let d = 0; d < centroid.length; d++) {
        centroid[d] /= cluster.points.length;
    }
    return centroid;
}

export interface Cluster {
    centroid: Point;
    points: Point[];
    error: number;
}