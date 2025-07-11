// vite.config.js
import { resolve } from "node:path";

export default {
  base: "/team-project/", // Use your repo name here
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        recipe1: resolve(__dirname, "recipes/recipe1.html"),
        recipe2: resolve(__dirname, "recipes/recipe2.html"),
        recipe3: resolve(__dirname, "recipes/recipe3.html"),
        recipe4: resolve(__dirname, "recipes/recipe4.html"),
        recipe5: resolve(__dirname, "recipes/recipe5.html"),
        recipe5: resolve(__dirname, "recipes/recipe6.html"),
        // Add more entries as needed
      },
    },
  },
};
