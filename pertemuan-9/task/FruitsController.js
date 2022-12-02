/*
 * 3. Meng-impor fruits dari fruits.js
 * ~ refactor variabel ke E56 variable
 */
const fruits = require("./fruits.js");

// 4. Membuat method index
function index() {
  for (const fruit of fruits) {
    console.log(fruit);
  }
}
// 5. Membuat method store
function store(name) {
  fruits.push(name);
  index();
}

// 6. Membuat method update
function update(position, name) {
  fruits.splice([position], 1, name);
  index();
}
// T000 7: Buat method destroy
function destroy(position) {
  fruits.splice([position], 1);
  index();
}

/*
 * 8. meng-export semua method
 */

module.exports = { index, store, update, destroy };
