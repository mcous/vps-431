import { defineConfig } from "vite";
import GlobPlugin from "vite-plugin-glob";

export default defineConfig({
  plugins: [GlobPlugin()],
});
