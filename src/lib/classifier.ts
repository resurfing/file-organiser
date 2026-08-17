import type { FileEntry } from "~/types/entry";
import type { FileCategory } from "~/types/constants";

import { fileCategories } from "~/types/constants";

export type Classification = {
    file: FileEntry;
    category: FileCategory | "Uncategorized";
    destination: string;
};

export function classifyFile(file: FileEntry): Classification {
    const extension = file.extension.toLowerCase();
    const category = fileCategories[extension];

    return {
        file,
        category: category ?? "Uncategorized",
        destination: category ?? "Uncategorized",
    };
}
