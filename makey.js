function getYear() {
    var msg;
    var year;
    year =  new Date().getFullYear();
    msg = '©Goldot ' + year;
    document.getElementById("someText").innerHTML = msg;
}

function togglePW() {
    var x = document.getElementById("myPW");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}