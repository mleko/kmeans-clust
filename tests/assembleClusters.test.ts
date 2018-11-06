import * as assert from "assert";

import {assembleClusters} from "../src/assembleClusters";

describe("kmeans.assembleClusters", () => {
    it("should properly assemble clusters", () => {
        const clusters = assembleClusters([[3.33], [9]], [[0], [1], [9], [10]]);
        assert.equal(2, clusters.length);
        assert.equal(2, clusters[0].points.length);
        assert.equal(2, clusters[1].points.length);

        const contains = (f: number, haystack: number[][]) => {
            return -1 !== haystack.map((p) => p[0]).indexOf(f);
        };

        assert.equal(true, contains(0, clusters[0].points));
        assert.equal(true, contains(1, clusters[0].points));
        assert.equal(true, contains(9, clusters[1].points));
        assert.equal(true, contains(10, clusters[1].points));
    });

    it("should properly assemble clusters", () => {
        const clusters = assembleClusters([[3.33]], [[0], [1], [9], [10]]);
        assert.equal(1, clusters.length);
        assert.equal(4, clusters[0].points.length);

        const contains = (f: number, haystack: number[][]) => {
            return -1 !== haystack.map((p) => p[0]).indexOf(f);
        };

        assert.equal(true, contains(0, clusters[0].points));
        assert.equal(true, contains(1, clusters[0].points));
        assert.equal(true, contains(9, clusters[0].points));
        assert.equal(true, contains(10, clusters[0].points));
    });
});