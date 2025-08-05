import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/30-NomeProgetto-EpiBooks/",
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.js"],
  },
});
