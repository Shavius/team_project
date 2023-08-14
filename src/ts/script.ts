import "../index.html";
import "../scss/style.scss";
import DynamicElement from "./modules/DynamicElement";
import CreateElementClick from "./modules/CreateElementClick";
import Person from "./modules/Person";
import CharacterDisplay from "./modules/CharacterDisplay";

const elementButton: HTMLElement | null = document.querySelector("#element1button1");
const elementContent: HTMLElement | null = document.querySelector("#element1content1");
let elementNumber: number = 0;

if (elementButton != null && elementContent != null) {
	elementButton.onclick = function () {
		elementNumber += 1;
		const elem = new DynamicElement("element__content-item");
		elem.addElementContent(`Привет ${elementNumber}`);
		elementContent.append(elem.getElement());
	};
}

const elem = new CreateElementClick("element__content-item", "#element2button1", "#element2content1", "Привет");

elem.initialClick();

const characterPersonList: string[] = [
	new Person("Alan", 31, "Human").getInfoPerson(),
	new Person("Minara", 28, "Human").getInfoPerson(),
	new Person("Eyla", 120, "Elf").getInfoPerson(),
	new Person("Neyra", 130, "Elf").getInfoPerson(),
];

const personDisply: HTMLElement | null = document.querySelector(".person__element");
const personBtn: HTMLElement | null = document.querySelector(".person__btn");

new CharacterDisplay(characterPersonList, personDisply, personBtn).showCharacterFromList();
