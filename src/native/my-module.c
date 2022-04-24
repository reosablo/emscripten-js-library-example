#include <stdio.h>
#include <emscripten/emscripten.h>

#ifdef __cplusplus
extern "C" {
#endif

void EMSCRIPTEN_KEEPALIVE greet() {
  printf("This is module.c output!\n");
}

#ifdef __cplusplus
}
#endif