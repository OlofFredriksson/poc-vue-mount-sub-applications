export function init(selector: string): void {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<div style="border:2px solid pink; padding:0.5rem">Uppgift 2, helt utan ramverk. Bär sin egna styling och logik</div>`;

    const targetElement = document.querySelector(selector);

    if (targetElement) {
        targetElement.appendChild(newDiv);
    } else {
        console.error(`Selector not found: ${selector}`);
    }
}
