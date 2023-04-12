import CreateElementClick from "../modules/CreateElementClick";

describe("CreateElementClick", () => {
	let createElementClick: CreateElementClick;
	let elementButton: HTMLElement;
	let elementContent: HTMLElement;

	beforeEach(() => {
		elementButton = document.createElement("button");
		elementButton.classList.add("button");
		elementContent = document.createElement("div");
		elementContent.classList.add("div");
		const body = document.querySelector("body");

		body?.append(elementButton);
		body?.append(elementContent);

		createElementClick = new CreateElementClick("div", ".button", ".div", "Content");
	});

	it("initialClick adds click event listener to element button", () => {
		createElementClick.initialClick();
		elementButton.click();

		expect(createElementClick.elementContentNumber).toBe(1);
		expect(elementContent.innerHTML).toContain("Content 1");
	});

	it("initialClick does not add click event listener if element button is null", () => {
		createElementClick.elementButton = null;
		createElementClick.elementContent = null;

		createElementClick.initialClick();
		elementButton.click();

		expect(createElementClick.elementContentNumber).toBe(0);
		expect(elementContent.innerHTML).not.toContain("Content 1");
	});
});
