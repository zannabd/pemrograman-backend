// Import Model Student
const Student = require("../models/Student");

// Membuat class StudentController
class StudentController {
  //   index(req, res) {
  //     // Memanggil method statis all
  //     Student.all(function (students) {
  //       const data = {
  //         message: "Menampilkan Semua Student",
  //         data: students,
  //       };
  //       res.json(data);
  //     });
  //   }

  // Menambahkan keyword async utk memberitahu proses asyncronus
  async index(req, res) {
    // memanggil method static all dengan async await
    const students = await Student.all();

    const data = {
      message: "Menampilkan Semua Student",
      data: students,
    };
    res.json(data);
  }

  async store(req, res) {
    const { nama, nim, email, jurusan } = req.body;
    await Student.create(nama, nim, email, jurusan);
    const newStudent = { nama, nim, email, jurusan };
    const data = {
      message: `Menambahkan Data Student: ${nama}`,
      data: newStudent,
    };
    res.json(data);
  }
}

// Menbuat object StudentControtter
const object = new StudentController();

// Export object StudentController
module.exports = object;
