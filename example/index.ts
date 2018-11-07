import * as d3 from "d3";
import {kmeans} from "../";

const colors = ["blue", "green", "yellow", "cyan", "magenta", "brown", "grey"];
let data: any = {};

window.onload = () => {
    document.getElementById("resetData").onclick = seed;
    document.getElementById("recluster").onclick = clusterize;
    
    document.getElementById("points").onchange = loadForm;
    document.getElementById("clusters").onchange = loadForm;

    loadForm();
};

const loadForm = () => {
    data.pointCount = parseInt(document.getElementById("points")["value"]);
    data.clusterCount = parseInt(document.getElementById("clusters")["value"]);
    seed();
};

const seed = () => {
    const width = window.innerWidth - 200;
    const height = window.innerHeight;

    const {pointCount, clusterCount} = data;
    const {points, seeds} = seedPoints(pointCount, clusterCount, width, height);

    data = Object.assign(data, {points, pointCount, clusterCount, width, height});
    clusterize();
};

const clusterize = () => {
    const {points, clusterCount, width, height} = data;

    const clusters = kmeans(points, clusterCount);

    document.getElementById("graph").innerHTML = null;
    const svg = d3.select("#graph").append("svg").attr("width", width).attr("height", height);

    clusters.map((c, idx) => {
        const color = colors[idx];
        c.points.map((p) => {
            svg.append("circle").attr("cx", p[0]).attr("cy", p[1]).attr("r", 3).attr("stroke", color).attr("fill", color);
        });
        svg.append("rect").attr("x", c.centroid[0]).attr("y", c.centroid[1]).attr("height", 10).attr("width", 10).attr("stroke", "black").attr("fill", color);
    });
};

const seedPoints = (pointCount, clusterCount, width, height) => {
    const clusterPrimers = Array.from({length: clusterCount}, () => {
        return [width / 8 + Math.random() * width * 0.75, height / 8 + Math.random() * height * 0.75];
    });
    const points: number[][] = Array.from({length: pointCount}, (z, i) => {
        return [
            normalRand(width / 20, clusterPrimers[i % clusterCount][0]), 
            normalRand(height / 20, clusterPrimers[i % clusterCount][1])
        ];
    });

    return {points, seeds: clusterPrimers};
 };

const normalRand = (std = 1, mean = 0) => {
    // https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
    let u = 0;
    let v = 0;
    while(u === 0) u = Math.random(); // Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return mean + std * (Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v));
};
