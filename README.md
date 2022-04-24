JavaScript library example using Emscripten

**This repository uses TypeScript 4.7 Beta. Be careful to use in production.**

## Requirements

- POSIX shell
- GNU Make 4.2.1
- Emscripten 3.1.8

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
