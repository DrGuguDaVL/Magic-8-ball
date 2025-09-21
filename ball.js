function displayAnswer() {
// generate random number between 1 and 9
let triangle = document.getElementById("triangle");
let ball = Math.floor(Math.random() * 9) + 1;
let response = document.getElementsById("answer").innerHTML;
}
if (ball == 1) {
response = "Yes - definitely.";
} else if (ball == 2) {
response = "It is decidedly so.";
} else if (ball == 3) {
response = "Without a doubt.";
} else if (ball == 4) {
response = "Reply hazy, try again.";
} else if (ball == 5) {
response = "Ask again later.";
} else if (ball == 6) {
response = "Better not tell you now.";
} else if (ball == 7) {
response = "My sources say no.";
} else if (ball == 8) {
response = "Outlook not so good.";
} else if (ball == 9) {
response = "Very doubtful.";
}

document.getElementById("answer").innerHTML = response;
triangle.style.transform = "rotate(360deg)";

// Reset rotation after animation so it can spin again
setTimeout(() => {
triangle.style.transform = "rotate(0deg)";
}