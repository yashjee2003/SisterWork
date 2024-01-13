var Yes_Que2 = document.getElementById("Yes-Que2");
var No_Que2 = document.getElementById("No-Que2");

Yes_Que2.onclick = function () {
  fetch(`http://159.89.40.19:3000/que_1/Que_2_Yes`);
  window.location.href = "que_3.html";
};

No_Que2.onclick = function () {
  fetch(`http://159.89.40.19:3000/que_1/Que_2_No`);
  window.location.href = "que_3.html";
};
