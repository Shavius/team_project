import division from "../modules/division";

describe("division", () => {
	it("should return correct answer for 2 and 1", () => {
		expect(division(2, 1)).toBe("answer 2");
	});

	it('should return "answer 0" for undefined arguments', () => {
		expect(division()).toBe("answer 0");
	});
});
