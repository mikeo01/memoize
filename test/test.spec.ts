import { describe } from "mocha";
import { expect } from "chai";

import { memoize } from "../src/main";

describe('Memoizing values', () => {
    it('should return the same value each time', () => {
        // A not random function
        const notSoRandom = memoize<void, Number>(() => Math.random());

        // Value
        const val = notSoRandom();
        
        expect(val).to.equal(
            notSoRandom()
        );
    });
});