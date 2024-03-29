import "../index.html";
import "../scss/style.scss";
import DynamicElement from "./modules/DynamicElement";
import CreateElementClick from "./modules/CreateElementClick";
import Person from "./modules/Person";
import CharacterDisplay from "./modules/CharacterDisplay";
import PersonWarrior from "./modules/PersonWarrior";
import { textAndAddition, textAndSubtraction } from "./modules/utils";
import CreateWindow from "./modules/CreateWindow";
import TabsControl from "./modules/TabsControl";

const elementButton: HTMLElement | null = document.querySelector("#element1button1");
const elementContent: HTMLElement | null = document.querySelector("#element1content1");
let elementNumber: number = 0;

const main: HTMLElement | null = document.querySelector(".main");

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
const personNumber: HTMLElement | null = document.querySelector(".person__number");

new CharacterDisplay(characterPersonList, personDisply, personBtn, personNumber).showCharacterFromList();

const personWarrior1 = new PersonWarrior("Lenargo", 38, "Human", 100, 120);
const personWarrior2 = new PersonWarrior("Minara", 21, "Human", 100, 150);

console.log(personWarrior1.getInfo());
console.log(personWarrior2.getInfo());

console.log(textAndAddition("Ответ:", 100, 50));
console.log(textAndSubtraction("Ответ:", 100, 50));

const newDiv = new CreateWindow(main);

newDiv.create();
newDiv.addWindow();

const tabsButton = document.querySelector(".tabs__button");
const tabsContent = document.querySelector(".tabs__content");
const tabsButtonsList = document.querySelectorAll(".tabs__button .tabs__button-item");
const tabsContentsList = document.querySelectorAll(".tabs__content .tabs__content-item");
const tabButtonName = "tabs__button-item";
const tabContentName = "tabs__content-item";

const tabs = new TabsControl(tabsButton, tabsContent, tabsButtonsList, tabsContentsList, tabButtonName, tabContentName);

tabs.addEventClickButton();
