export default class TabsControl {
	tabsButton: Element | null;
	tabsContent: Element | null;
	tabsButtonItems: NodeListOf<Element> | null;
	tabsContentItems: NodeListOf<Element> | null;
	tabButtonName: string;
	tabContentName: string;

	constructor(
		tabsButton: Element | null,
		tabsContent: Element | null,
		tabsButtonItems: NodeListOf<Element> | null,
		tabsContentItems: NodeListOf<Element> | null,
		tabButtonName: string,
		tabContentName: string,
	) {
		this.tabsButton = tabsButton;
		this.tabsContent = tabsContent;
		this.tabsButtonItems = tabsButtonItems;
		this.tabsContentItems = tabsContentItems;
		this.tabButtonName = tabButtonName;
		this.tabContentName = tabContentName;
	}

	addEventClickButton(): void {
		this.addDataInButtons();
		this.addIdInButtons();
		this.uploadTabs();

		if (this.tabsButton !== null && this.tabsContent !== null) {
			this.tabsButton.addEventListener("click", (event) => {
				const button = event.target as Element;

				this.activeButton(button);
			});
		}
	}

	activeButton(elementButton: Element | null): void {
		if (elementButton !== null && elementButton.classList.contains(this.tabButtonName)) {
			if (this.tabsButtonItems !== null && this.tabsButtonItems.length > 0) {
				for (let i = 0; i < this.tabsButtonItems.length; i += 1) {
					this.tabsButtonItems[i].classList.remove(`${this.tabButtonName}--active`);
				}

				elementButton.classList.add(`${this.tabButtonName}--active`);

				const numberData = Number(elementButton.getAttribute("data-number"));
				const buttonId = elementButton.id;

				this.switchContentItem(numberData);

				// eslint-disable-next-line no-restricted-globals
				history.pushState(null, "", `#${buttonId}`);
			}
		}
	}

	addDataInButtons(): void {
		if (this.tabsButtonItems !== null && this.tabsButtonItems.length > 0) {
			for (let i = 0; i < this.tabsButtonItems.length; i += 1) {
				this.tabsButtonItems[i].setAttribute("data-number", `${i}`);
			}
		}
	}

	addIdInButtons(): void {
		let idNumber = 0;

		if (this.tabsButtonItems !== null && this.tabsButtonItems.length > 0) {
			for (let i = 0; i < this.tabsButtonItems.length; i += 1) {
				this.tabsButtonItems[i].id = `tabsButtonItem${(idNumber += 1)}`;
			}
		}
	}

	switchContentItem(numberData: number): void {
		if (this.tabsContentItems !== null && this.tabsContentItems.length > 0) {
			for (let i = 0; i < this.tabsContentItems.length; i += 1) {
				this.tabsContentItems[i].classList.remove(`${this.tabContentName}--active`);
			}

			this.tabsContentItems[numberData].classList.add(`${this.tabContentName}--active`);
		}
	}

	uploadTabs(): void {
		if (window.location.hash !== "") {
			const elementButton = document.querySelector(window.location.hash);

			if (elementButton !== null) {
				this.activeButton(elementButton);
			}
		}
	}
}
