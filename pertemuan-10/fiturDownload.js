/*
 * Fungsi download
 */
function download() {
  return new Promise((resolve) => {
    const result = "windows-10.exe";
    setTimeout(function () {
      resolve("Download selesai..." + "\n" + "Hasil Download: "+ result);
    }, 3000);
  });
}

const main = async() => {
    console.log(await download());
}

main();