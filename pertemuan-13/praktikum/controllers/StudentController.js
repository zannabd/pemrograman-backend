// Import Model Student
const Student = require("../models/Student");

// Membuat class StudentController
class StudentController {
  // Menambahkan keyword async utk memberitahu proses asyncronus
  //-----------------------------METHOD INDEX-----------------------------
  async index(req, res) {
    // memanggil method static all dengan async await
    const students = await Student.all();

    // data array lebih dari 0
    if (students.length > 0) {
      const data = {
        message: "Menampilkan Semua Student",
        data: students,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Students is empty",
      };

      res.status(200).json(data);
    }
  }

  //-----------------------METHOD STORE--------------------------------
  async store(req, res) {
    /**
     * Validasi sederhana
     * handle jika salah satu data tidak dikirim
     */

    // Destrucing object req.body
    const { nama, nim, email, jurusan } = req.body;

    // jika data undefined maka kirim response error
    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "Semua data harus dikirim dengan lengkap",
      };

      return res.status(422).json(data);
    } else {
      const student = await Student.create(req.body);
      const data = {
        message: `Menambahkan Data Student`,
        data: student,
      };
      return res.status(201).json(data);
    }
  }
  //----------------------------METHOD UPDATE------------------------------------
  async update(req, res) {
    const { id } = req.params;
    // cari id student yang ingin diupdate
    const student = await Student.find(id);

    if (student) {
      // melakukan update data
      const student = await Student.update(id, req.body);
      const data = {
        message: "Mengedit data students",
        data: student,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not found`,
      };

      res.status(404).json(data);
    }
  }
  //--------------------------METHODE DESTROY--------------------------------------
  async destroy(req, res) {
    // Mengecek ada tidaknya data
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: `Menghapus data students`,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not found`,
      };

      res.status(404).json(data);
    }
  }
  //---------------------------METHOD SHOW---------------------------------
  async show(req, res) {
    const { id } = req.params;
    // Cari student berdasarkan id
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: "Menampilkan detail students",
        data: student,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not found`,
      };

      res.status(404).json(data);
    }
  }
}

// Menbuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
