import CreateWindow from "../modules/CreateWindow";

const body = document.querySelector("body");
const window = new CreateWindow(body);

describe("CreateWindow", () => {
	it("Add window in html element", () => {
		window.create();
		window.addWindow();

		const div = document.querySelector(".window");

		expect(div?.className).toBe("window");
	});

	it("Remove window in html element", () => {
		window.removeWindow();

		const div = document.querySelector(".window");

		expect(div).toBe(null);
	});
});
