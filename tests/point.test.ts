import * as assert from "assert";

import {arePointsEqual} from "../src/point";

describe("Point", () => {
    const data = [
        [[0], [1], false],
        [[0, 0], [0, 1], false],
        [[0, 0, 0], [0, 0, 1], false],
        [[0, 0], [0, 0], true],
        [[0, 0], [0, 0, 1], false],
    ];

    const testWithData = (a, b, expected) => {
        it("should properly compare", () => {
            assert.equal(arePointsEqual(a, b), expected);
        });
    };

    data.forEach((item) => {
        testWithData(item[0], item[1], item[2]);
    });
});