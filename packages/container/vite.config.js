import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { vitePlugin as apimockPlugin } from "@forsakringskassan/apimock-express";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
    plugins: [
        apimockPlugin([{ url: "/api", dir: "mock" }]),

        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
        port: 8080,
    },
});
