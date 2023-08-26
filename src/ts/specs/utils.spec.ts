import { textAndAddition, textAndSubtraction } from "../modules/utils";

describe("textAndaddition", () => {
	it("Return string", () => {
		expect(textAndAddition("Ответ:", 100, 50)).toBe("Ответ: 150");
	});
});

describe("textAndSubtraction", () => {
	it("Return string", () => {
		expect(textAndSubtraction("Ответ:", 100, 50)).toBe("Ответ: 50");
	});
});
