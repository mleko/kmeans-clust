import * as assert from "assert";

import {kmeans} from "../";

describe("kMeans", () => {
    it("should properly clusterize 1D", () => {
        const points = [[0], [1], [9], [10]];
        const clusters = kmeans(points, 2, {
            initFunction: (a, b) => {
                return [[0], [9]];
            }
        });
        assert.equal(clusters.length, 2);
        clusters.sort((a, b) => {
            return a.centroid[0] - b.centroid[0];
        });
    });

    it("should properly clusterize 3D", () => {
        const points = [[0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255], [0, 102, 255]];
        const clusters = kmeans(points, 1);
        assert.equal(clusters.length, 1);
        clusters.sort((a, b) => {
            return a.centroid[0] - b.centroid[0];
        });
    });

    it("should call iteration listener", () => {
        const points = [[0], [1], [9], [10]];
        let iterations = 0;
        const clusters = kmeans(points, 2, {
            onIteration: () => {
                iterations++;
            }
        });
        assert.strictEqual(iterations > 0, true);
    });
});
