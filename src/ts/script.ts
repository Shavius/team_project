import "../index.html";
import "../scss/style.scss";
import DynamicElement from "./modules/DynamicElement";
import CreateElementClick from "./modules/CreateElementClick";

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
