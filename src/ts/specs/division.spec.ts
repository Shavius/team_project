import division from "../modules/division";

describe("division", () => {
	test("should return correct answer for 2 and 1", () => {
		expect(division(2, 1)).toBe("answer 2");
	});

	test('should return "answer 0" for undefined arguments', () => {
		expect(division()).toBe("answer 0");
	});
});
