// type definitions for Emscripten output with EXPORT_ES6=1

export interface MyModule extends EmscriptenModule {
  // add EXPORTED_RUNTIME_METHODS here
  ccall: typeof ccall;
}

declare const myModuleFactory: EmscriptenModuleFactory<MyModule>;

export default myModuleFactory;
