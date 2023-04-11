import DynamicElement from "./DynamicElement";

export default class CreateElementClick extends DynamicElement {
	elementButtonName: string | undefined;

	elementContentName: string | undefined;

	elementButton: HTMLElement | null;

	elementContent: HTMLElement | null;

	elementContentNumber: number = 0;

	constructor(htmlElementTagName: string, elementButtonName: string, elementContentName: string) {
		super(htmlElementTagName);
		this.elementButton = document.querySelector(elementButtonName);
		this.elementContent = document.querySelector(elementContentName);
	}

	initialClick(): void {
		if (this.elementButton != null && this.elementContent != null) {
			this.elementButton.onclick = () => {
				this.elementContentNumber += 1;
				this.createElement();
				this.addElementContent(`Привет ${this.elementContentNumber}`);
				const elem = this.getElement();
				this.elementContent?.append(elem);
			};
		}
	}
}
