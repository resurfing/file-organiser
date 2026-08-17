import { Glob } from "bun";
import { statSync } from "node:fs";
import { basename, extname, resolve } from "node:path";

import type { Command } from "commander";
import type { FileEntry } from "~/types/entry";

import { classifyFile } from "~/lib/classifier";

function scanDirectory(path: string, recursive: boolean = false): FileEntry[] {
    let stats;

    try {
        stats = statSync(path);
    } catch {
        throw new Error(`The provided path does not exist: ${path}`);
    }

    if (!stats.isDirectory()) {
        throw new Error(`The provided path is not a directory: ${path}`);
    }

    const glob = new Glob(recursive ? "**/*" : "*");

    const paths = Array.from(
        glob.scanSync({
            cwd: path,
            onlyFiles: true,
        }),
    );

    const files: FileEntry[] = paths.map((filePath) => {
        const fullPath = resolve(path, filePath);
        const stats = statSync(fullPath);

        return {
            path: fullPath,
            name: basename(filePath),
            extension: extname(filePath),
            size: stats.size,
            modifiedAt: stats.mtime,
        };
    });

    return files;
}

export function registerScanCommand(program: Command) {
    program
        .command("scan")
        .argument("<path>", "Directory to scan")
        .option("-r, --recursive", "Scan subdirectories")
        .action((path, options) => {
            try {
                const files = scanDirectory(path, options.recursive);

                console.log(`\nScanning: ${path}\n`);
                console.log(`Found ${files.length} files:\n`);

                for (const file of files) {
                    const classification = classifyFile(file);

                    console.log(
                        `- ${file.name} → ${classification.destination}`,
                    );
                }
            } catch (error) {
                console.error(
                    error instanceof Error
                        ? error.message
                        : "An unknown error occurred.",
                );

                process.exit(1);
            }
        });
}
