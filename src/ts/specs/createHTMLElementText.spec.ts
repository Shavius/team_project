import createHTMLElementText from "../modules/createHTMLElementText";

it("expect null", function () {
	expect(document.querySelector(".title")).toBe(null);
});

it("expect not null", function () {
	document.querySelector("body")?.append(createHTMLElementText("Hello World"));

	const div = document.querySelector(".title");

	expect(div).not.toBe(null);
});

it("expect element add", function () {
	document.querySelector("body")?.append(createHTMLElementText("Hello World"));

	const div = document.querySelector(".title");

	expect(div).not.toBe(null);
	expect(div?.innerHTML).toBe("Hello World");
	expect(div?.className).toBe("title");
});

it("expect No Text", function () {
	const div2: any = createHTMLElementText();

	expect(div2?.innerHTML).toBe("No Text");
});
