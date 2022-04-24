// If you use `tsconfig.json`, `my-module.ts` is used.
// If you use `tsconfig.legacy.json`, `my-module.legacy.ts` will be used.
// see `tsconfig.legacy.json`
import myModule from "./my-module";

/**
 * Greeter API
 * 
 * Emscripten module is used internally.
 */
class Greeter {
  greet() {
    myModule.ccall("greet", null, [], []);
  }
}

export { Greeter };
