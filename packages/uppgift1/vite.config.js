import { resolve } from "node:path";
import { URL, fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    preview: {
        port: 8081,
    },
    define: { "process.env": '"production"' },
    build: {
        lib: {
            formats: ["es"],
            entry: resolve(__dirname, "src/index.ts"),
            name: "uppgift1",
        },
    },
});
