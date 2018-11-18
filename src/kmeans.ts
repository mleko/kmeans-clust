import {assembleClusters} from "./assembleClusters";
import { arePointsEqual, Point } from "./point";
import { Cluster } from "./types";

export function optimizeCentroids(centroids: Point[], points: Point[], onIteration?: (clusters: Cluster[]) => any): Cluster[] {
    let clusters = [];
    let anyCentroidChanged = false;

    do {
        clusters = assembleClusters(centroids, points);
        if(onIteration) {
            onIteration(clusters);
        }
        
        anyCentroidChanged = false;
        centroids = [];
        for(const cluster of clusters) {
            const centroid = clusterCentroid(cluster);
            centroids.push(centroid);
            if(!arePointsEqual(centroid, cluster.centroid)) {
                anyCentroidChanged = true;
            }
        }
    } while( anyCentroidChanged );
    return clusters;
}

function clusterCentroid(cluster: Cluster): Point {
    if(0 === cluster.points.length) {
        return cluster.centroid;
    }
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
