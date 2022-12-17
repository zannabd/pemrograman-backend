// import data student
const student = require("../data/student");
// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // Menampilkan Semua data student
    const data = {
      message: "Menampilkan Semua Data Student",
      data: [student],
    };
    res.json(data);
  }
  store(req, res) {
    // Menambahkan Data student
    const { nama } = req.body;
    student.push(nama);
    const data = {
      message: `Menambahkan data student: ${nama}`,
      data: [student],
    };
    res.json(data);
  }
  update(req, res) {
    // Mengedit data  student
    const { id } = req.params;
    const { nama } = req.body;
    student.splice(id, 1, nama);
    const data = {
      message: `Mengedit Data Student ${id}, nama ${nama}`,
      data: [student],
    };
    res.json(data);
  }
  destroy(req, res) {
    // Menghapus data student
    const { id } = req.params;
    student.splice(id, 1);
    const data = {
      message: `Menghapus Data Student ${id}`,
      data: [student],
    };
    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
