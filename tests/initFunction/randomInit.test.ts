import * as assert from "assert";

import {randomInit} from "../../src/initFunction/randomInit";

describe("kmeans.initFunction.randomInit", () => {
    it("should properly pick nodes", () => {
        const picks = randomInit([[1], [1], [1], [1]], 1, undefined);
        assert.equal(1, picks.length);
        assert.equal(1, picks[0][0]);
    });

    it("should properly pick nodes", () => {
        const picks = randomInit([[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]], 1, undefined);
        assert.equal(1, picks.length);
        assert.equal(1, picks[0][0]);
        assert.equal(1, picks[0][1]);
        assert.equal(1, picks[0][2]);
    });
});