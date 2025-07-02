// @ts-check
import { defineConfig } from "astro/config";
// Import Tailwind CSS
import tailwindcss from "@tailwindcss/vite";
// Import MDX support
import mdx from "@astrojs/mdx";
// Import React support
import react from "@astrojs/react";
// Import Vue support
import vue from "@astrojs/vue";
// Import Svelte support
import svelte from "@astrojs/svelte";

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [mdx(), react(), vue(), svelte()],
    legacy: {
        collections: true
    }
});