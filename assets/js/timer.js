// timer 1
// var number = 45000;
// var intervalId;
// function run() {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
// }
// function decrement() {
//     number--;
// }
// if (number === 0) {
//     stop();
//     clearInterval(intervalId);
// } run();

// const timerBar = document.getElementById("timer-text");

// timer 2
// function timer(seconds) {
//     setInterval(function () {
//         seconds--
//     }, 45000
    

// timer 3
//         counter++;
//     }
//     setInterval(timerBar, 1000)
// }
//     console.log('Hello')
// function myFunction() {

//     }
//   window.setTimeout(function () {
//         console.log('test')


// function reset() {
//     clock = 0;
//     render();


// var interval = setTimeout(function () {
//     console.log
// }     45000


// clearTimeout()

//   checking answers 
// $("").click
// $("#check").on("click", function (event) {
$("#after_submit").hide();
function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var correct = 0;

    if (question1 === "Sponge Bob Square Pants") {
        correct = correct + 1
        console.log(question1)
    }
    if (question2 === "Hawkins") {
        correct = correct + 1;
    }
    if (question3 === "Mouse") {
        correct = correct + 1;
    }
    if (question4 === "Arya Stark") {
        correct = correct + 1;
    }
    if (question5 === "Balto") {
        correct = correct + 1;
    }
    if (question6 === "Carebears") {
        correct = correct + 1;
    }


    // modal on bootstrap
    $("#quiz").hide();
    $("#after_submit").show();
    $("#message").text("you got " + correct + "/" + 6)
    // document.getElementById("completed_questions").style.visibility = "visible";

    // document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";


}

// }
// for(var i=0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt)
//     if(response == questions[i].answer){
//         score++;
//     }
// }

// alert("you got " + score + "/" + questions.length);



// alert('hello world')