const http = require('http');
const fs = require('fs');

const port = 1245;
const dbFile = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');
    const studentLines = lines.slice(1).filter((line) => line.trim() !== '');
    
    let responseText = `Number of students: ${studentLines.length}\n`;

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

    let fieldCount = 0;
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        fieldCount++;
        const list = fields[field];
        responseText += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
        if (fieldCount < Object.keys(fields).length) {
          responseText += '\n';
        }
      }
    }
    resolve(responseText);
  });
});

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(dbFile)
      .then((report) => {
        res.end(report);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.end();
  }
});

app.listen(port);
module.exports = app;
