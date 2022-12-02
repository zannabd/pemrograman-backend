/*
 * 9. Meng-Impor semua method FruitController
 * = Refactor variable ke E56 Variable
 * Mengaplikasikan Destrucing object
 */
const { index, store, update, destroy } = require("./FruitsController.js");

const main = () => {
  // kode main
  index();
  console.log("--------------");
  store("Belimbing");
  console.log("--------------");
  update(3, "Melon");
  console.log("--------------");
  destroy(4);
};

main();
