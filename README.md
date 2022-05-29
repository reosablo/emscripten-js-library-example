JavaScript library example using Emscripten

## `dist/my-lib.js` vs `dist/legacy/my-lib.js`

`dist/my-lib.js` is built for modern browsers and bundlers.

- APIs are exported as [JavaScript modules (ESM)][esm]
  - Library users use this with `import` syntax in JavaScript
- Uses WebAssembly for performance

`dist/legacy/my-lib.js` is build for compatibility.

- APIs are exported in global scope
  - Library users use this `<script>` tag before main programs
- Doesn't use WebAssembly

## Requirements

- POSIX shell
- GNU Make 4.2.1
- Emscripten 3.1.8
- Node.js 14.18.2
- npm 6.14.15

## Build

```sh
npm install
npm run prepare
npm run build
```

## Run Demo

### HTML

```sh
npx serve
```

Then open `demo.html` or `demo-legacy.html` in your browsers and check DevTool
console output.

### JavaScript (Deno)

```sh
deno run demo-deno.js
```

[esm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
