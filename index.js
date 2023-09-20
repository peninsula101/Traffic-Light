let redButtonElement = document.getElementById("stopButton");
let redColorElement = document.getElementById("stopLight");

let orangeButtonElement = document.getElementById("readyButton");
let orangeColorElement = document.getElementById("readyLight");

let greenButtonElement = document.getElementById("goButton");
let greenColorElement = document.getElementById("goLight");

function colorRedChange() {
    redButtonElement.style.backgroundColor = "#cf1124";
    redColorElement.style.backgroundColor = "#cf1124";
    orangeButtonElement.style.backgroundColor = "#1f1d41";
    orangeColorElement.style.backgroundColor = "#4b5069";
    greenButtonElement.style.backgroundColor = "#1f1d41";
    greenColorElement.style.backgroundColor = "#4b5069";
}

function colorOrangeChange() {
    orangeButtonElement.style.backgroundColor = "#f7c948";
    orangeColorElement.style.backgroundColor = "#f7c948";
    redButtonElement.style.backgroundColor = "#1f1d41";
    redColorElement.style.backgroundColor = "#4b5069";
    greenButtonElement.style.backgroundColor = "#1f1d41";
    greenColorElement.style.backgroundColor = "#4b5069";

}

function colorGreenChange() {
    greenButtonElement.style.backgroundColor = "#199473";
    greenColorElement.style.backgroundColor = "#199473";
    orangeButtonElement.style.backgroundColor = "#1f1d41";
    orangeColorElement.style.backgroundColor = "#4b5069";
    redButtonElement.style.backgroundColor = "#1f1d41";
    redColorElement.style.backgroundColor = "#4b5069";
}
