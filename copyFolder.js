import { cpSync } from "node:fs";

cpSync('src/main/views', 'dist/js/views', { recursive: true });
