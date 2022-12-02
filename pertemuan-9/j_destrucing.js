/* Membuat object literal */
const user = {
  name: "Fauzan Abdillah",
  age: 19,
  major : "Informatics Engineering",
  address: "Bekasi",
  isMarried: false,
};
/* Mengakses property object.
 * Mengakses property menggunakan dot atau bracket
 */
// console.log(user.name);
// console.log(user.age);
// console.log(user.address);

// melakukan destrucing
const {name, age, major} = user;
console.log(name, age, major);