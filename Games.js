var x = document.getElementById("ipn");
x.addEventListener("change",errorAlert);
x.addEventListener("focus",colorChange);
x.addEventListener("focusout",colorChangeBack);

function errorAlert() {
    alert("Search bar is invalid. Sorry!")
};
function colorChange() {
    x.style.background = "#00a8ff"
}
function colorChangeBack() {
    x.style.background = "#25ccf7"
}