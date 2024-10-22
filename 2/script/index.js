import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const readyPath = path.resolve(__dirname, "dir1", "dir2", "readme.txt");

try {
  const data = await fs.readFile(readyPath, "utf8");
  console.log(data);
} catch (error) {
  console.error("Error reading file:", error);
}
