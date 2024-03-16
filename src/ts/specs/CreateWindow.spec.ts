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

	it("No Window", () => {
		const nullWindow = null;
		const newWindow = new CreateWindow(nullWindow);

		newWindow.create();
		newWindow.addWindow();

		const div = document.querySelector(".window");

		expect(div).toBe(null);

		newWindow.removeWindow();

		expect(div).toBe(null);
	});
});
