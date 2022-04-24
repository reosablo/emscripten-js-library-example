// @ts-check
import ts from "rollup-plugin-ts";

/** @type {import("rollup").RollupOptions[]} */
const config = [
  {
    input: "src/my-lib.ts",
    output: [{ dir: "dist" }],
    plugins: [ts()],
  },
  {
    input: "src/legacy/my-lib.ts",
    output: [{
      dir: "dist/legacy",
      format: "iife",
      name: "MyLib",
      extend: true,
    }],
    plugins: [ts({ tsconfig: "./tsconfig.legacy.json" })],
  },
];

export default config;
