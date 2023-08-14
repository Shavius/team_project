import ICharacterDisplay from "../interfaces/ICharacterDisplay";

export default class CharacterDisplay implements ICharacterDisplay {
	characterArray: string[];

	display: HTMLElement | null;

	btn: HTMLElement | null;

	constructor(characterArray: string[], display: HTMLElement | null, btn: HTMLElement | null) {
		this.characterArray = characterArray;
		this.display = display;
		this.btn = btn;
	}

	showCharacterFromList(): void {
		const characterlistNumber: number = this.characterArray.length;
		let listNumber: number = -1;
		let defaultElement: boolean = true;

		if (this.btn != null && this.display != null) {
			this.btn.onclick = () => {
				if (defaultElement) {
					if (this.display != null) {
						this.display.innerHTML = "";
					}
					defaultElement = false;
				}
				listNumber += 1;
				if (listNumber < characterlistNumber) {
					const div = document.createElement("div");
					div.innerHTML = this.characterArray[listNumber];
					if (this.display != null) {
						this.display.append(div);
					}
				}
			};
		}
	}
}
