import CharacterDisplay from "../modules/CharacterDisplay";

describe("CharacterDisplay class tests", () => {
	let characterDisplay: CharacterDisplay;
	let displayMock: HTMLElement;
	let btnMock: HTMLElement;

	beforeEach(() => {
		// Создаем моки для элементов DOM
		displayMock = document.createElement("div");
		btnMock = document.createElement("button");

		characterDisplay = new CharacterDisplay(["Character 1", "Character 2"], displayMock, btnMock);
	});

	it("should create a CharacterDisplay instance", () => {
		expect(characterDisplay).toBeInstanceOf(CharacterDisplay);
	});

	it("should have the correct properties", () => {
		expect(characterDisplay.characterArray).toEqual(["Character 1", "Character 2"]);
		expect(characterDisplay.display).toEqual(displayMock);
		expect(characterDisplay.btn).toEqual(btnMock);
	});

	it("should display characters on button click", () => {
		characterDisplay.showCharacterFromList();

		btnMock.click(); // Simulate a button click

		expect(displayMock.childElementCount).toBe(1); // Check if a character div is added to the display
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		expect(displayMock.firstChild!.textContent).toBe("Character 1"); // Check if the displayed text is correct
	});

	it("should display multiple characters sequentially on button clicks", () => {
		characterDisplay.showCharacterFromList();

		btnMock.click(); // First click
		btnMock.click(); // Second click

		expect(displayMock.childElementCount).toBe(2); // Check if two character divs are added to the display
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		expect(displayMock.firstChild!.textContent!).toBe("Character 1"); // Check if the displayed text from the first click is correct
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		expect(displayMock.lastChild!.textContent!).toBe("Character 2"); // Check if the displayed text from the second click is correct
	});

	it("should not display characters if display or button is null", () => {
		characterDisplay.display = null;
		characterDisplay.btn = null;

		characterDisplay.showCharacterFromList();

		btnMock.click();

		expect(displayMock.childElementCount).toBe(0); // Check that no character div is added to the display
	});
});
