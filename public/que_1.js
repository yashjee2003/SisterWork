var Yes_Que1 = document.getElementById("Yes-Que1");
var No_Que1 = document.getElementById("No-Que1");

Yes_Que1.onclick = function () {
  fetch(`http://159.89.40.19:3000/que_1/Que_1_Yes`);
  window.location.href = "que_2.html";
};

No_Que1.onclick = function () {
  fetch(`http://159.89.40.19:3000/que_1/Que_1_No`);
  window.location.href = "que_2.html";
};
