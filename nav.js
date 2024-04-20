const btnTarget = document.getElementById("navBtn");

btnTarget.addEventListener("click", () => {
  //   console.log(window.location.href);
  //   window.location.href = "./item.html";
  //   window.location.assign("./item.html");
  //   window.open("./item.html");
  //   window.location.replace("./item.html");
  window.location.href = `./item.html?id=${value}`;
});
