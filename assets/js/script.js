function toplama() {
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;
  var result = parseInt(n1) + parseInt(n2);
  document.getElementById("result").value = result;
}
function cixma() {
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;
  var result = parseInt(n1) - parseInt(n2);
  document.getElementById("result").value = result;
}
function vurma() {
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;
  var result = parseInt(n1) * parseInt(n2);
  document.getElementById("result").value = result;
}
function bolme() {
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;
  var result = parseInt(n1) / parseInt(n2);
  document.getElementById("result").value = result;
}




// function OpenMenu() {
//   var menu = document.getElementById("menu");
//   var menuIcon = document.getElementById("menuIcon");
//   if (menu.classList.contains("active")) {
//     menu.classList.remove("active");
//     menuIcon.classList.remove("fa-arrow-up");
//     menuIcon.classList.add("fa-arrow-down");
//   } else {
//     menu.classList.add("active");
//     menuIcon.classList.remove("fa-arrow-down");
//     menuIcon.classList.add("fa-arrow-up");
//   }
// }
