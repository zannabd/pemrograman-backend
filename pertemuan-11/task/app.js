// Import express
const express = require("express");

// Import ruter
const router = require("./routes/api");

// Membuat object express
const app = express();

// Menggunakan Middleware
app.use(express.json());
app.use(express.urlencoded());

// Menggunakan routing (router)
app.use(router);

// Mendefinisikan port
app.listen(5000);
