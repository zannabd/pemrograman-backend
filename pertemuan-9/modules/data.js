//
// /*
// * Membuat array fruits.
// * Array ini berisi data-data buah
// */

// const fruits = ["Banana", "Mango", "Durian"];

// /*
// * Membuat Controller (Fruit Controller)
// * Terdapat action index untuk menampilkan buah
// * Terdapat action store untuk menambah buah
// */

// const index = () => {
// for (const fruit of fruits) {
// console. log( fruit);
// }
// };

// const store = (name) => {
// fruits.push(name);
// index();
// };

// /*
// * Membuat fungsi utana: main
// * Fungsi ini yang diakses pertana kali
// */

// const main = () => {
// index();
// store("Apple");
// };

// main();
/*===============================================*/
// membuat array yang berisi data buah
const fruits = ["Banana", "Mango", "Durian"];

// export fruits ke object module. exports
module.exports = fruits;
