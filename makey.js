function getYear() {
    var msg;
    var year;
    year =  new Date().getFullYear();
    msg = '©Goldot ' + year;
    document.getElementById("someText").innerHTML = msg;
}