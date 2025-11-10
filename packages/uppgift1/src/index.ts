import { createApp } from "vue";
import { ValidationPlugin } from "@fkui/vue";
import expUppgift from "./exp-uppgift.vue";

export function init(selector: string): void {
    document
        .querySelector(selector)!
        .addEventListener("component-validity", (event) => {
            console.log("app stoppar");
            event.stopPropagation();
        });
    document
        .querySelector(selector)!
        .addEventListener("component-unmount", (event) => {
            console.log("app stoppar");
            event.stopPropagation();
        });
    const app = createApp(expUppgift);
    app.use(ValidationPlugin);
    app.mount(selector);
}
