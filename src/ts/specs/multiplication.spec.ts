import multiplication from "../modules/multiplication";

it("expect answer 20", function () {
	const res = multiplication(10, 2);

	expect(res).toBe("answer 20");
});

it("expect answer 0", function () {
	const res = multiplication();

	expect(res).toBe("answer 0");
});
