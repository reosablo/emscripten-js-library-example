import myModuleFactory from "./my-module";

// top-level await can be used in modern runtime environment
// (tsconfig) "module": "ES2022" and "target": "ES2022"
const myModule = await myModuleFactory();

export default myModule;
