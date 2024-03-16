export default class CreateWindow {
	window: HTMLElement | null;
	inDocument: HTMLElement | null;

	constructor(inDocument: HTMLElement | null) {
		this.inDocument = inDocument;
		this.window = null;
	}

	create(): void {
		const divElement = `
		<div class="window__title">Hello</div>
        `;

		const divGlobal = document.createElement("div");
		divGlobal.classList.add("window");

		divGlobal.innerHTML = divElement;

		this.window = divGlobal;
	}

	addWindow(): void {
		if (this.window !== null && this.inDocument !== null) {
			this.inDocument.append(this.window);
		}
	}

	removeWindow(): void {
		if (this.window !== null && this.inDocument !== null) {
			this.window.remove();
		}
	}
}
