import { program } from "commander";
import { Glob } from "bun";
import { statSync } from "node:fs";

program
    .name("organiser")
    .description(
        "Sort through your downloads, documents, etc with an easy-to-use CLI tool.",
    )
    .version("0.1.0");

program
    .command("scan")
    .argument("<path>", "Directory to scan")
    .option("-r, --recursive", "Scan subdirectories")
    .action((path, options) => {
        try {
            const stats = statSync(path);

            if (!stats.isDirectory()) {
                console.error(`The provided path is not a directory: ${path}`);
                process.exit(1);
            }
        } catch {
            console.error(`The provided path does not exist: ${path}`);
            process.exit(1);
        }

        const glob = new Glob(options.recursive ? "**/*" : "*");

        const files = Array.from(
            glob.scanSync({
                cwd: path,
                onlyFiles: true,
            }),
        );

        console.log(`\nScanning: ${path}\n`);
        console.log(`Found ${files.length} files:\n`);

        for (const file of files) {
            console.log(`- ${file.replace("\\", "/")}`);
        }
    });

program.parse();