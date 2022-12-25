// import database
const db = require("../config/database");

// Membuat class Model student
class Student {
  // solution with promise + async await
  static all() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students";
      /**
       * Melakukan query menggunakan method query
       * Menerima 2 params: query dan callback
       */
      db.query(query, (err, results) => {
        resolve(results);
      });
    });
  }

  static create(nama, nim, email, jurusan) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO students (nama, nim, email, jurusan, created_at) values ('${nama}', '${nim}', '${email}', '${jurusan}', now())`;
      db.query(query, (err, results) => {
        resolve(results);
      });
    });
  }
}

// export class student
module.exports = Student;
