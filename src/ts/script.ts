import "../index.html";
import "../scss/style.scss";
import createHTMLElementText from "./modules/createHTMLElementText";

console.log("Hello World");

document.querySelector("body")?.prepend(createHTMLElementText("Hello World from functions"));
