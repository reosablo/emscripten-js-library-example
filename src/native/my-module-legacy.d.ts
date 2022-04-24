// type definitions for Emscripten output with EXPORT_ES6=0
// `my-module-legacy--post.js` is required

import type { MyModule } from "./my-module";

/**
 * @deprecated
 * `my-module-legacy.js` requires `--post-js` option to generate.
 * This could be a hacky way.
 */
declare var myModule: MyModule;

export default myModule;
