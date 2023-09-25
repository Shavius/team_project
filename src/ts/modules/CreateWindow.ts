export default class CreateWindow {
	window: HTMLElement | null;
	inDomument: HTMLElement | null;

	constructor(inDomument: HTMLElement | null) {
		this.inDomument = inDomument;
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
		if (this.window !== null && this.inDomument !== null) {
			this.inDomument.append(this.window);
		}
	}

	removeWindow(): void {
		if (this.window !== null && this.inDomument !== null) {
			this.window.remove();
		}
	}
}
