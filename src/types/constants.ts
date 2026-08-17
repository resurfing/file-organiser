export type FileCategory =
    | "Images"
    | "Documents"
    | "Spreadsheets"
    | "Presentations"
    | "Music"
    | "Videos"
    | "Archives"
    | "Applications"
    | "Code"
    | "Fonts"
    | "Disk Images"
    | "3D"
    | "Subtitles"
    | "E-books"
    | "Email"
    | "Databases"
    | "Backups"
    | "Logs";

export const FileCategories: Record<string, FileCategory> = {
    // Images
    ".jpg": "Images",
    ".jpeg": "Images",
    ".png": "Images",
    ".gif": "Images",
    ".webp": "Images",
    ".bmp": "Images",
    ".svg": "Images",
    ".ico": "Images",
    ".tiff": "Images",
    ".tif": "Images",
    ".heic": "Images",
    ".heif": "Images",
    ".avif": "Images",

    // Documents
    ".pdf": "Documents",
    ".doc": "Documents",
    ".docx": "Documents",
    ".odt": "Documents",
    ".rtf": "Documents",
    ".txt": "Documents",
    ".md": "Documents",
    ".tex": "Documents",

    // Spreadsheets
    ".xls": "Spreadsheets",
    ".xlsx": "Spreadsheets",
    ".ods": "Spreadsheets",
    ".csv": "Spreadsheets",
    ".tsv": "Spreadsheets",

    // Presentations
    ".ppt": "Presentations",
    ".pptx": "Presentations",
    ".odp": "Presentations",
    ".key": "Presentations",

    // Music
    ".mp3": "Music",
    ".wav": "Music",
    ".flac": "Music",
    ".aac": "Music",
    ".m4a": "Music",
    ".ogg": "Music",
    ".opus": "Music",
    ".wma": "Music",

    // Videos
    ".mp4": "Videos",
    ".mkv": "Videos",
    ".avi": "Videos",
    ".mov": "Videos",
    ".wmv": "Videos",
    ".webm": "Videos",
    ".m4v": "Videos",
    ".flv": "Videos",
    ".mpeg": "Videos",
    ".mpg": "Videos",
    ".3gp": "Videos",

    // Archives
    ".zip": "Archives",
    ".7z": "Archives",
    ".rar": "Archives",
    ".tar": "Archives",
    ".gz": "Archives",
    ".bz2": "Archives",
    ".xz": "Archives",
    ".tgz": "Archives",

    // Executables / Applications
    ".exe": "Applications",
    ".msi": "Applications",
    ".app": "Applications",
    ".dmg": "Applications",
    ".deb": "Applications",
    ".rpm": "Applications",
    ".apk": "Applications",

    // Code
    ".js": "Code",
    ".jsx": "Code",
    ".ts": "Code",
    ".tsx": "Code",
    ".mjs": "Code",
    ".cjs": "Code",
    ".html": "Code",
    ".htm": "Code",
    ".css": "Code",
    ".scss": "Code",
    ".sass": "Code",
    ".less": "Code",
    ".json": "Code",
    ".xml": "Code",
    ".yaml": "Code",
    ".yml": "Code",
    ".toml": "Code",
    ".py": "Code",
    ".java": "Code",
    ".c": "Code",
    ".h": "Code",
    ".cpp": "Code",
    ".hpp": "Code",
    ".cs": "Code",
    ".go": "Code",
    ".rs": "Code",
    ".php": "Code",
    ".rb": "Code",
    ".swift": "Code",
    ".kt": "Code",
    ".kts": "Code",
    ".dart": "Code",
    ".lua": "Code",
    ".sh": "Code",
    ".bash": "Code",
    ".zsh": "Code",
    ".fish": "Code",
    ".sql": "Code",

    // Fonts
    ".ttf": "Fonts",
    ".otf": "Fonts",
    ".woff": "Fonts",
    ".woff2": "Fonts",
    ".eot": "Fonts",

    // Disk images
    ".iso": "Disk Images",
    ".img": "Disk Images",

    // 3D / CAD
    ".obj": "3D",
    ".fbx": "3D",
    ".gltf": "3D",
    ".glb": "3D",
    ".stl": "3D",
    ".dae": "3D",
    ".blend": "3D",
    ".3ds": "3D",

    // Subtitles
    ".srt": "Subtitles",
    ".vtt": "Subtitles",
    ".ass": "Subtitles",
    ".ssa": "Subtitles",

    // E-books
    ".epub": "E-books",
    ".mobi": "E-books",
    ".azw": "E-books",
    ".azw3": "E-books",

    // Email
    ".eml": "Email",
    ".msg": "Email",

    // Databases
    ".db": "Databases",
    ".sqlite": "Databases",
    ".sqlite3": "Databases",
    ".mdb": "Databases",
    ".accdb": "Databases",

    // Backups
    ".bak": "Backups",
    ".backup": "Backups",

    // Logs
    ".log": "Logs",
};
