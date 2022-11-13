export default function createHTMLElementText(text = "No Text"): HTMLElement {
	const div = document.createElement("DIV");
	div.innerHTML = text;
	div.className = "title";
	return div;
}
