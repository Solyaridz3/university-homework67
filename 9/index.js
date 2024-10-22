import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "largeFile.txt");

const readableStream = fs.createReadStream(filePath);

readableStream.pipe(
  fs.createWriteStream(path.resolve(__dirname, "largefile_copy1.txt")),
);
readableStream.pipe(
  fs.createWriteStream(path.resolve(__dirname, "largefile_copy2.txt")),
);
readableStream.pipe(
  fs.createWriteStream(path.resolve(__dirname, "largefile_copy3.txt")),
);
