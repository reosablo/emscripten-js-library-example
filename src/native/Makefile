CC = emcc
CFLAGS = -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"

all: my-module.js my-module-legacy.js

my-module.js: my-module.c
	$(CC) $(CFLAGS) -s EXPORT_ES6=1 -s WASM=1 -s SINGLE_FILE=1 $< -o $@

my-module-legacy.js: my-module.c my-module-legacy--post.js
	$(CC) $(CFLAGS) -s EXPORT_ES6=0 -s WASM=0 $< --post-js $(word 2,$^) -o $@
