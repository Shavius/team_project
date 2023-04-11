/**
 * Класс для создания и настройки динамических HTML-элементов.
 */
export default class DynamicElement {
	/**
	 * HTML-элемент, созданный экземпляром класса.
	 */
	htmlElement: HTMLElement;

	/**
	 * Имя тега HTML-элемента.
	 */
	htmlElementTagName: string;

	/**
	 * Создает экземпляр класса DynamicElement.
	 * @param htmlElementTagName Имя тега HTML-элемента. По умолчанию "no-name".
	 */
	constructor(htmlElementTagName: string = "no-name") {
		this.htmlElementTagName = htmlElementTagName;
		this.htmlElement = document.createElement("div");
		this.htmlElement.classList.add(this.htmlElementTagName);
	}

	/**
	 * Создает новый HTML
	 */
	createElement(): void {
		this.htmlElement = document.createElement("div");
		this.htmlElement.classList.add(this.htmlElementTagName);
	}

	/**
	 * Возвращает HTML-элемент, созданный экземпляром класса.
	 * @returns HTML-элемент.
	 */
	getElement(): HTMLElement {
		return this.htmlElement;
	}

	/**
	 * Добавляет содержимое в HTML-элемент.
	 * @param content Содержимое HTML-элемента. По умолчанию "No Content".
	 */
	addElementContent(content: any = "No Content"): void {
		this.htmlElement.innerHTML = content;
	}
}
