import TabsControl from "../modules/TabsControl";

describe("TabsControl", () => {
	const hTabs = document.createElement("div");
	hTabs.classList.add("tabs");

	const hTabsButton = document.createElement("div");
	hTabsButton.classList.add("tabs__button");

	const hTabsButtonItem1 = document.createElement("div");
	const hTabsButtonItem2 = document.createElement("div");
	hTabsButtonItem1.classList.add("tabs__button-item");
	hTabsButtonItem2.classList.add("tabs__button-item");
	hTabsButtonItem1.innerHTML = "Кнопка 1";
	hTabsButtonItem2.innerHTML = "Кнопка 2";

	const hTabsContent = document.createElement("div");
	hTabsContent.classList.add("tabs__content");

	const hTabsContentItem1 = document.createElement("div");
	const hTabsContentItem2 = document.createElement("div");
	hTabsContentItem1.classList.add("tabs__content-item");
	hTabsContentItem2.classList.add("tabs__content-item");
	hTabsContentItem1.innerHTML = "Описание по кнопке 1";
	hTabsContentItem2.innerHTML = "Описание по кнопке 2";

	hTabsButton.append(hTabsButtonItem1);
	hTabsButton.append(hTabsButtonItem2);

	hTabsContent.append(hTabsContentItem1);
	hTabsContent.append(hTabsContentItem2);

	hTabs.append(hTabsButton);
	hTabs.append(hTabsContent);

	const body = document.querySelector("body");
	body?.append(hTabs);

	const tabsButton = document.querySelector(".tabs__button");
	const tabsContent = document.querySelector(".tabs__content");
	const tabsButtonsList = document.querySelectorAll(".tabs__button .tabs__button-item");
	const tabsContentsList = document.querySelectorAll(".tabs__content .tabs__content-item");
	const tabButtonName = "tabs__button-item";
	const tabContentName = "tabs__content-item";

	const tabs = new TabsControl(
		tabsButton,
		tabsContent,
		tabsButtonsList,
		tabsContentsList,
		tabButtonName,
		tabContentName,
	);

	tabs.addEventClickButton();

	it("addEventClickButton", () => {
		expect(tabsButtonsList[0].id).toBe("tabsButtonItem1");
		expect(tabsButtonsList[0].getAttribute("data-number")).toBe("0");
	});

	it("click", () => {
		const button = tabsButtonsList[0] as HTMLElement;
		button.click();

		expect(button.className).toBe("tabs__button-item tabs__button-item--active");
		expect(window.location.hash).toBe("#tabsButtonItem1");
	});

	it("uploadTabs", () => {
		tabs.uploadTabs();

		const button = tabsButtonsList[0] as HTMLElement;

		expect(button.className).toBe("tabs__button-item tabs__button-item--active");
		expect(window.location.hash).toBe("#tabsButtonItem1");
	});
});
