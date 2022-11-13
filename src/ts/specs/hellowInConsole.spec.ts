import { hellowInConsole, plus } from "../modules/hellowInConsole";

it("hellow in console text hellow", function () {
	const text = hellowInConsole("hellow");

	expect(text).toBe("hellow");
});

it("hellow in console text No text", function () {
	const text = hellowInConsole();

	expect(text).toBe("No text");
});

it("function plus 150", function () {
	const result = plus(100, 50);

	expect(result).toBe(150);
});

it("function plus 0", function () {
	const result = plus();

	expect(result).toBe(0);
});
