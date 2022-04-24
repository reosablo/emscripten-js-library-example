// If you use `tsconfig.json`, `./native/index.ts` will be used.
// If you use `tsconfig.legacy.json`, `./native/index.legacy.ts` will be used.
// see `tsconfig.legacy.json`
import myModule from "./native/index";

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
