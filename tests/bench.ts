import { kmeans } from "../src";
import { kmeansPlusPlusInit, randomInit } from "../src/initFunction";
import { KMeansOptions } from "./../";

const seedPoints = (pointCount, clusterCount) => {
    const clusterPrimers = Array.from({length: clusterCount}, () => {
        return [10 + Math.random() * 80, 10 + Math.random() * 80];
    });
    const points: number[][] = Array.from({length: pointCount}, (z, i) => {
        return [
            normalRand(5, clusterPrimers[i % clusterCount][0]), 
            normalRand(5, clusterPrimers[i % clusterCount][1])
        ];
    });

    return points;
 };

const normalRand = (std = 1, mean = 0) => {
    // https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
    let u = 0;
    let v = 0;
    while(u === 0) u = Math.random(); // Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return mean + std * (Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v));
};

const configs: Array<{label: string, options: Partial<KMeansOptions>}> = [
    {label: "default", options: {}},
    {label: "randomInit", options: {initFunction: randomInit}},
    {label: "kmeansPlusPlusInit", options: {initFunction: kmeansPlusPlusInit}},
];
const iterationCount: number[] = [];
for(let i = 0; i < configs.length; i++) {
    iterationCount[i] = 0;
    configs[i].options.onIteration = () => { iterationCount[i]++; };
}

// cluster sizes
for(let k = 2; k < 7 ; k++) {
    // tslint:disable-next-line:no-console
    console.info("Run for cluster size: " + k);
    // point sets
    for(let i = 0; i < 100 ; i++) {
        const points = seedPoints(1000, k);
        for(const c of configs) {
            // retries
            for(let a = 0; a < 3 ; a++) {
                kmeans(points, k, c.options);
            }
        }
    }  
}

for(let i = 0; i < configs.length; i++) {
    // tslint:disable-next-line:no-console
    console.info(configs[i].label + " => " + iterationCount[i]);
}