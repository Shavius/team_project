import DynamicElement from "../modules/DynamicElement";

describe("DynamicElement", () => {
	let dynamicElement: DynamicElement;

	beforeEach(() => {
		dynamicElement = new DynamicElement("test-div");
	});

	it("should create an HTML element with the specified tag name", () => {
		expect(dynamicElement.htmlElement.tagName).toBe("DIV");
		expect(dynamicElement.htmlElement.classList).toContain("test-div");
	});

	it("should add content to the HTML element", () => {
		dynamicElement.addElementContent("Hello, world!");
		expect(dynamicElement.htmlElement.innerHTML).toBe("Hello, world!");
	});

	it("should create an HTML element with the default tag name when no parameter is provided", () => {
		const defaultDynamicElement = new DynamicElement();
		expect(defaultDynamicElement.htmlElement.tagName).toBe("DIV");
		expect(defaultDynamicElement.htmlElement.classList).toContain("no-name");
	});

	it("should add default content to the HTML element when no parameter is provided", () => {
		const defaultDynamicElement = new DynamicElement();
		defaultDynamicElement.addElementContent();
		expect(defaultDynamicElement.htmlElement.innerHTML).toBe("No Content");
	});

	it("should return the HTML element when the getElement method is called", () => {
		expect(dynamicElement.getElement()).toBe(dynamicElement.htmlElement);
	});
});
