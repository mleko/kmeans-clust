import * as assert from "assert";

import {euclideanDistance} from "../src/euclideanDistance";

describe("euclideanDistance", () => {
    const data = [
        [[0], [1], 1],
        [[0, 0], [0, 1], 1],
        [[0, 0, 0], [0, 0, 1], 1],
        [[0, 0], [3, 4], 5],
    ];

    const testWithData = (a, b, expected) => {
        it("should properly calculate distance", () => {
            assert.equal(euclideanDistance(a, b), expected);
        });
    };

    data.forEach((item) => {
        testWithData(item[0], item[1], item[2]);
    });

    it("should fail for missmatched data", () => {
        assert.throws(() => {
            euclideanDistance([0], [0, 0]);
        });
    });
});
