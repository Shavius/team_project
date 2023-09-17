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

		btnMock.click();

		expect(displayMock.childElementCount).toBe(1);
		expect(displayMock.firstChild!.textContent).toBe("Character 1");
	});

	it("should display multiple characters sequentially on button clicks", () => {
		characterDisplay.showCharacterFromList();

		btnMock.click();
		btnMock.click();

		expect(displayMock.childElementCount).toBe(2);
		expect(displayMock.firstChild!.textContent!).toBe("Character 1");
		expect(displayMock.lastChild!.textContent!).toBe("Character 2");
	});

	it("should not display characters if display or button is null", () => {
		characterDisplay.display = null;
		characterDisplay.btn = null;

		characterDisplay.showCharacterFromList();

		btnMock.click();

		expect(displayMock.childElementCount).toBe(0);
	});

	it("Проверяем что есть все элементы", () => {
		const characterPersonList = ["Person 1", "Person 2"];
		const personDisply = document.createElement("div");
		const personBtn = document.createElement("div");
		const personNumber = document.createElement("div");

		const character = new CharacterDisplay(characterPersonList, personDisply, personBtn, personNumber);

		character.showCharacterFromList();

		expect(character.allItemsElement?.outerHTML).toBe("<div>2</div>");
	});
});
