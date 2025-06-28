import readDatabase from '../utils';

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(DB_FILE)
      .then((studentsByField) => {
        let responseText = 'This is the list of our students\n';
        const sortedFields = Object.keys(studentsByField).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        sortedFields.forEach((field, index) => {
          const students = studentsByField[field];
          responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
          if (index < sortedFields.length - 1) {
            responseText += '\n';
          }
        });
        response.status(200).send(responseText);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(DB_FILE)
      .then((studentsByField) => {
        const studentsInMajor = studentsByField[major] || [];
        response.status(200).send(`List: ${studentsInMajor.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
