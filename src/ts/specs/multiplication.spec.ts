import multiplication from "../modules/multiplication";

describe("multiplication", () => {
	it("should return correct answer for 2 and 3", () => {
		expect(multiplication(2, 3)).toBe("answer 6");
	});

	it('should return "answer 0" for multiplication with zero', () => {
		expect(multiplication(1, 0)).toBe("answer 0");
		expect(multiplication(0, 5)).toBe("answer 0");
	});

	it('should return "answer 0" for undefined arguments', () => {
		expect(multiplication()).toBe("answer 0");
	});

	it("should return correct answer for negative numbers", () => {
		expect(multiplication(-2, 3)).toBe("answer -6");
		expect(multiplication(2, -3)).toBe("answer -6");
		expect(multiplication(-2, -3)).toBe("answer 6");
	});
});
