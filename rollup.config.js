// @ts-check
import ts from "rollup-plugin-ts";

/** @type {import("rollup").RollupOptions[]} */
const config = [
  {
    input: "src/index.ts",
    output: [{ file: "dist/my-lib.js" }],
    plugins: [ts()],
  },
  {
    input: "src/legacy/index.ts",
    output: [{
      file: "dist/legacy/my-lib.js",
      format: "iife",
      name: "MyLib",
      extend: true,
    }],
    plugins: [ts({ tsconfig: "./tsconfig.legacy.json" })],
  },
];

export default config;
