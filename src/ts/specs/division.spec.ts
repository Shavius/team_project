import division from "../modules/division";

it("expect answer 50", function () {
	const res = division(100, 2);

	expect(res).toBe("answer 50");
});

it("expect answer 0", function () {
	const res = division();

	expect(res).toBe("answer 0");
});
