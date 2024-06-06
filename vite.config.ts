import { defineConfig } from "vite";
import { resolve } from "path";
import { globSync } from "glob";

// Where to look for netlify sideload entry points. Glob is relative to project root.
const entryGlob = "src/functions/*.ts"

const getEntry = () => {
  const files = globSync(entryGlob).map((f) => resolve(f));
  return files;
};

export default defineConfig({
  publicDir: false,
  build: {
    emptyOutDir:true,
    target: "es2022",
    outDir: "./netlify/functions",
    lib: {
      formats: ["es"],
      entry: getEntry(),
    },
  },
});
