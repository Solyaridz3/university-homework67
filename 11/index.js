import fs from "fs";
import { createGzip } from "zlib";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const files = ["file1.txt", "file2.txt", "file3.txt" /* add other files */];

files.forEach((file) => {
  const inputPath = path.resolve(__dirname, file);
  const readableStream = fs.createReadStream(inputPath);
  const outputPath = path.resolve(__dirname, `${file}.gz`);
  const writeableStream = fs.createWriteStream(outputPath);
  readableStream.pipe(createGzip()).pipe(writeableStream);
});
