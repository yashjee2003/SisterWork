var Yes_Que4 = document.getElementById("Yes-Que4");
var No_Que4 = document.getElementById("No-Que4");

Yes_Que4.onclick = function () {
  fetch(`http://159.89.40.19:3000/que_4/Que_4_Yes`);
  var message = prompt("I Love You 💖");
  if (message) {
    fetch(`http://159.89.40.19:3000/que_4_message/${message}`);
  } else {
    fetch(`http://159.89.40.19:3000/que_4_message/No_Reason`);
  }
  alert("Informed To Your Partner 💖");
};

No_Que4.onclick = function () {
  fetch(`http://159.89.40.19:3000/que_4/Que_4_No`);
  var message = prompt("Still I Love You 💖");
  if (message) {
    fetch(`http://159.89.40.19:3000/que_4_message/${message}`);
  } else {
    fetch(`http://159.89.40.19:3000/que_4_message/No_Reason`);
  }
  alert("Informed To Your Partner 💖");
};
