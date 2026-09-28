const { add } = require("../src/app");

describe("Task Manager Unit Tests", () => {

    test("2 + 3 should equal 5", () => {
        expect(add(2, 3)).toBe(5);
    });

    test("10 + 5 should equal 15", () => {
        expect(add(10, 5)).toBe(15);
    });

});