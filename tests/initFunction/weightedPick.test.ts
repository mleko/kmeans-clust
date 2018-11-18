import * as assert from "assert";

import {weightedPick} from "../../src/initFunction/weightedPick";

describe("kmeans.initFunction.kmeans++.weightedPick", () => {
    it("should properly pick value from single element array", () => {
        const pick = weightedPick([99], 0.4);
        assert.equal(0, pick);
    });

    it("should properly pick value from 2 element array", () => {
        const arr = [99, 1];
        assert.equal(0,  weightedPick(arr, 0.4));
        assert.equal(0,  weightedPick(arr, 0.9));
        assert.equal(1,  weightedPick(arr, 0.999));
        assert.equal(1,  weightedPick(arr, 0.99));
    });

    it("should properly pick value from multi element array", () => {
        const arr = [1, 2, 7];
        assert.equal(2,  weightedPick(arr, 0.4));
        assert.equal(2,  weightedPick(arr, 0.9));
        assert.equal(2,  weightedPick(arr, 0.999));
        assert.equal(2,  weightedPick(arr, 0.99));
        assert.equal(0,  weightedPick(arr, 0.09));
        assert.equal(0,  weightedPick(arr, 0.0));
        assert.equal(1,  weightedPick(arr, 0.1));
        assert.equal(1,  weightedPick(arr, 0.11));
        assert.equal(1,  weightedPick(arr, 0.29));
        assert.equal(2,  weightedPick(arr, 0.3));
        assert.equal(2,  weightedPick(arr, 1 - Number.EPSILON));
    });
});