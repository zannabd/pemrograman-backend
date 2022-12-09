const persiapan = () => {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve("Persiapan Bahan...");
      }, 3000);
    });
  };
  
  const rebusAir = () => {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve("Rebus Air...");
      }, 7000);
    });
  };
  
  const masak = () => {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve("Masak mi...");
      }, 5000);
    });
  };
  
  const main = async() => {
    console.log(await persiapan());
    console.log(await rebusAir());
    console.log(await masak());
  };
  
  main();
  