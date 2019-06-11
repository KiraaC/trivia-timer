$(document).ready(function () {
    var intervalId;
    var seconds = 45;
    intervalId = setInterval(decrement, 1000);
    $("#after_submit").hide();
    function decrement() {
        if (seconds === 0) {
            // run check
            check();
            $("#timer-bar").html(` : ${seconds}`)
        }
        // write the remainding time on the the span with id timer-bar
        $("#timer-bar").html(` : ${seconds}`)
        // decrease the var seconds
        seconds--;
    }
    // this is to add a event lister to the complete button with id button
    $("#button").on("click", check)
    function check() {
        clearInterval(intervalId);
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
    }
})


