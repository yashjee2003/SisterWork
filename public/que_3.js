var Yes_Que3 = document.getElementById("Yes-Que3");
var No_Que3 = document.getElementById("No-Que3");

Yes_Que3.onclick = function () {
  fetch(`http://159.89.40.19:3000/que_1/Que_3_Yes`);
  window.location.href = "que_4.html";
};

No_Que3.onclick = function () {
  fetch(`http://159.89.40.19:3000/que_1/Que_3_No`);
  window.location.href = "que_4.html";
};
