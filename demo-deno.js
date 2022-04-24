#!/usr/bin/env -S deno run
import { Greeter } from "./dist/my-lib.js";

new Greeter().greet();
