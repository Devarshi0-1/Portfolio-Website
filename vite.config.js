import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [react(), svgr()],
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    server: {
        open: true,
    },
});

process.env.BROWSER = "firefox";
