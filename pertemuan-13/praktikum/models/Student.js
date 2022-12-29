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

  static async create(data) {
    // Melakukan insert data ke database
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    // Melakukan query berdasrkan id
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        // destructing array
        const [student] = results;
        resolve(student);
      });
    });
  }

  // Mengupdate data Student
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    // mencari data yang baru diupdate
    const student = await this.find(id);
    return student;
  }

  // Menghapus data dari database
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  // Mencari berdasarkan id
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        // destructin array
        const [student] = results;
        resolve(student);
      });
    });
  }
}

// export class student
module.exports = Student;
