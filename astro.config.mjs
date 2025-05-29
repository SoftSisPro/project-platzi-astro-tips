// @ts-check
import { defineConfig } from "astro/config";
// Import Tailwind CSS
import tailwindcss from "@tailwindcss/vite";
// Import MDX support
import mdx from "@astrojs/mdx";

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [mdx()],
});
