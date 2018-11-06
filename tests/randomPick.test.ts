import * as assert from "assert";

import {randomPick} from "../src/randomPick";

describe("kmeans.randomPick", () => {
    it("should properly pick nodes", () => {
        const picks = randomPick([[1], [1], [1], [1]], 1);
        assert.equal(1, picks.length);
        assert.equal(1, picks[0][0]);
    });

    it("should properly pick nodes", () => {
        const picks = randomPick([[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]], 1);
        assert.equal(1, picks.length);
        assert.equal(1, picks[0][0]);
        assert.equal(1, picks[0][1]);
        assert.equal(1, picks[0][2]);
    });
});