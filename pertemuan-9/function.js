t/*
* Membuat fungsi menghitung luas Lingkaran.
* Fungsi dibuat dengan gaya Function Declaration
* @param {number} radius (jari-jart)
* @returns {number} area (luas lingkaran)
*/
console.log("Dengan gaya Function Declaration");

function calcAreaOfCircle(radius) {
const PHI = 3.14;
const area = PHI * radius * radius;
return area;
}

// Memanggil fungsi dengan mengirimkan parameter
console.log(calcAreaOfCircle(5));
console.log(calcAreaOfCircle(6));
console.log("==========================");

/*
* Membuat fungsi menghitung vas lingkaran.
* Fungsi dibuat dengan gaya Function Expression

* @param {number} radius (jari-jari)
* @returns {number} area (vas Lingkaran)
*/
console.log("Dengan gaya Function Expression");

const calcAreaofCircle = function (radius) {
const PHI = 3.14;
const area = PHI * radius * radius;
return area;
};

// Memanggit fungsi dengan mengirimkan parameter
console. log(calcAreaOfCircle(5));
console. log(calcAreaOfCircle(6));
console.log("========================");

/*
* Membuat fungsi menghitung luas lingkaran.
* Fungsi dibuat dengan gaya Arrow Function
* @param {number} radius (jari-jari)

* @returns {number} area (luas Lingkaran)
*/
console.log("Dengan gaya Arrow Function");

const calcAreaOfCircle = (radius) => {
const PHI = 3.14;
const area = PHI * radius * radius;
return area;
};

// Memanggil fungsi dengan mengirimkan parameter
console.log(calcAreaOfCircle(5));
console.log(calcAreaOfCircle(6));


