import { program } from "commander";
import { Glob } from "bun";
import { statSync } from "node:fs";

import { registerScanCommand } from "~/commands/scanner";

program
    .name("organiser")
    .description(
        "Sort through your downloads, documents, etc with an easy-to-use CLI tool.",
    )
    .version("0.1.0");

registerScanCommand(program);

program.parse();