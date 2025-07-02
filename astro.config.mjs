// @ts-check
import { defineConfig } from "astro/config";
// Import Tailwind CSS
import tailwindcss from "@tailwindcss/vite";
// Import MDX support
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [mdx(), react()],
    legacy: {
        collections: true
    }
});