import "../index.html";
import "../scss/style.scss";
import createHTMLElementText from "./modules/createHTMLElementText";
import DynamicElement from "./modules/DynamicElement";

console.log("Hello World");

document.querySelector("body")?.prepend(createHTMLElementText("Hello World from functions"));

const elementButton: HTMLElement | null = document.querySelector(".element__item-button");
const elementContent: HTMLElement | null = document.querySelector(".element__content");
const elementContentTagName: string = "element__content-item";
let elementContentNumber: number = 0;

if (elementButton != null && elementContent != null) {
	elementButton.onclick = function () {
		elementContentNumber += 1;
		const elem = new DynamicElement(elementContentTagName);
		elem.addElementContent(`Контент ${elementContentNumber}`);
		elementContent.append(elem.getElement());
	};
}
