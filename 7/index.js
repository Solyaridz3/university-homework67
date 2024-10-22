import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'largeFile.txt');

const readStream = fs.createReadStream(filePath, {
  encoding: 'utf8',
  highWaterMark: 1024 * 1024, // Читаємо файл шматками по 1 MB
});

readStream.on('data', (chunk) => {
  console.log('Новий шматок даних:');
});

readStream.on('end', () => {
  console.log('Читання файлу завершено.');
});

readStream.on('error', (err) => {
  console.error('Помилка читання файлу:', err);
});
