// import database
const db = require("../config/database");

// Membuat class Model student
class Student {
  // solution with callback
  /**
   * Membuat method static all
   * Supaya ketika dipanggil dalam controllernya, kita tidak perlu membuat object
   */
  // static all(callback) {
  //   const query = "SELECT * FROM students";
  //   /**
  //    * Melakukan query menggunakan method query
  //    * Menerima 2 params: query dan callback
  //    */
  //   db.query(query, (err, results) => {
  //     callback(results);
  //   });
  // }

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
}

// export class student
module.exports = Student;
