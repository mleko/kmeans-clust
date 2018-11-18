import * as assert from "assert";

import {euclideanDistance} from "../../src/euclideanDistance";
import {kmeansPlusPlusInit} from "../../src/initFunction/kmeansPlusPlusInit";

describe("kmeans.initFunction.kmeansPlusPlusInit", () => {
    it("should properly pick nodes", () => {
        const picks = kmeansPlusPlusInit([[1], [1], [1], [1]], 1, euclideanDistance);
        assert.equal(1, picks.length);
        assert.equal(1, picks[0][0]);
    });

    it("should properly pick nodes", () => {
        const picks = kmeansPlusPlusInit([[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]], 1, euclideanDistance);
        assert.equal(1, picks.length);
        assert.equal(1, picks[0][0]);
        assert.equal(1, picks[0][1]);
        assert.equal(1, picks[0][2]);
    });

    it("should properly pick nodes", () => {
        const picks = kmeansPlusPlusInit([[1], [2], [3], [4]], 3, euclideanDistance);
        assert.equal(3, picks.length);
    });
});