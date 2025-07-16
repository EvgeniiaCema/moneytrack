import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ui": "/src/shared/ui/",
      "@styles": "/src/styles/",
      "@modules": "/src/modules/",
      "@constants": "/src/shared/constants",
      "@layout": "/src/layout/",
      "@pages": "/src/pages/",
      "@store": "/src/store/",
      "@config": "/src/shared/config/",
      "@interfaces": "/src/shared/interfaces/",
      "@hooks": "/src/shared/hooks/",
      "@context": "/src/shared/context",
      "@assets": "/src/shared/assets",
      "@utils": "/src/shared/utils",
    },
  },
});
