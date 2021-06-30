function windowAlert() {
    alert("Welcome to the RG")
};

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

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h+':'+m+':'+s;
    setTimeout(function() {
        startTime();
    }, 500);
}

function checkTime (i) {
    if(i<10) {
        i = "0"+i
    }
    return i
};