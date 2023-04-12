import DynamicElement from "./DynamicElement";

/**
 * Класс `CreateElementClick` представляет собой расширение класса `DynamicElement` и предоставляет
 * функциональность для создания и добавления динамических HTML-элементов при клике на кнопку.
 */
export default class CreateElementClick extends DynamicElement {
	/**
	 * Имя кнопки HTML-элемента, на которую будет добавлен обработчик клика.
	 */
	elementButtonName: string | undefined;

	/**
	 * Имя HTML-элемента, в который будут добавлены созданные элементы при клике на кнопку.
	 */
	elementContentName: string | undefined;

	/**
	 * Кнопка HTML-элемента, на которую будет добавлен обработчик клика.
	 */
	elementButton: HTMLElement | null;

	/**
	 * HTML-элемент, в который будут добавлены созданные элементы при клике на кнопку.
	 */
	elementContent: HTMLElement | null;

	/**
	 * Содержимое, которое будет добавлено в создаваемые HTML-элементы.
	 */
	content: string;

	/**
	 * Счетчик количества созданных элементов.
	 */
	elementContentNumber: number = 0;

	/**
	 * Создает экземпляр класса `CreateElementClick`.
	 * @param htmlElementTagName Имя тега HTML-элемента, который будет создан при вызове метода `createElement` унаследованного от класса `DynamicElement`.
	 * @param elementButtonName Имя кнопки HTML-элемента, на которую будет добавлен обработчик клика.
	 * @param elementContentName Имя HTML-элемента, в который будут добавлены созданные элементы при клике на кнопку.
	 * @param content Содержимое, которое будет добавлено в создаваемые HTML-элементы.
	 */
	constructor(htmlElementTagName: string, elementButtonName: string, elementContentName: string, content: string) {
		super(htmlElementTagName);
		this.elementButton = document.querySelector(elementButtonName);
		this.elementContent = document.querySelector(elementContentName);
		this.content = content;
	}

	/**
	 * Метод `initialClick` добавляет обработчик клика на кнопку HTML-элемента, который создает новый HTML-элемент с содержимым и добавляет его в указанный элемент при клике на кнопку.
	 */
	initialClick(): void {
		if (this.elementButton != null && this.elementContent != null) {
			this.elementButton.onclick = () => {
				this.elementContentNumber += 1;
				this.createElement();
				this.addElementContent(`${this.content} ${this.elementContentNumber}`);
				const elem = this.getElement();
				this.elementContent?.append(elem);
			};
		}
	}
}
