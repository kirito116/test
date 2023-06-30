window.onload = function () {
  var box = document.getElementsByClassName("gghh");
  var btn = document.getElementById("ht");
  for (let i = 15; i < box.length; i++) {
    box[i].style.display = "none";
  }

  var countD = 10;
  btn.addEventListener("click", function () {
    var box = document.getElementsByClassName("gghh");
    countD += 10;
    if (countD <= box.length) {
      for (let i = 0; i < countD; i++) {
        box[i].style.display = "block";
      }
    }
  });
};
