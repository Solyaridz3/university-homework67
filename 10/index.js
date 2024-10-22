import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const source = path.join(__dirname, "source.txt");
const destination = path.join(__dirname, "destination.txt");

const readableStream = fs.createReadStream(source);
const writeableStream = fs.createWriteStream(destination);

readableStream.pipe(writeableStream);
