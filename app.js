const texts = ['BEST', 'COOL', 'NO-BULLSHIT'];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    // if (count === texts.length){
    //     // count = 0;
    // }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('#typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;

    }
    setTimeout(type, 300);
}());

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn").style.display = "block";

    } else {
        document.getElementById("btn").style.display = "none";
    }
}

function topfunction() {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}