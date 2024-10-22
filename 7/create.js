import fs from "fs";
import path from "path";


import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'largeFile.txt');

// Створюємо великий файл, наприклад, повторюючи якийсь текст кілька разів.
const content = 'This is a sample text line.\n';
const fileSize = 100 * 1024 * 1024; // 100 MB файл

fs.writeFile(filePath, '', (err) => {
  if (err) throw err;

  for (let i = 0; i < fileSize / content.length; i++) {
    fs.appendFileSync(filePath, content);
  }

  console.log('Файл успішно створений!');
});
