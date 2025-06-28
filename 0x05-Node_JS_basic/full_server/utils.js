import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');
    const studentLines = lines.slice(1).filter((line) => line.trim() !== '');

    const fields = {};
    for (const line of studentLines) {
      const student = line.split(',');
      const field = student[3];
      const firstName = student[0];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }
    resolve(fields);
  });
});

export default readDatabase;
