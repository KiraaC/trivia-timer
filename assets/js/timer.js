

// for(var i=0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt)
//     if(response == questions[i].answer){
//         score++;
//     }
// }

// alert("you got " + score + "/" + questions.length);



// alert('hello world')

//   checking answers 
// $("").click
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
        correct = correct + 1
    }
    if (question3 === "Mouse") {
        correct = correct + 1
    }
    if (question4 === "Arya Stark") {
        correct = correct + 1
    }
    if (question5 === "Balto") {
        correct = correct + 1
    }
    if (question6 === "Carebears") {
        correct = correct + 1
    }
    var score;
    if 

// alert("you got " + score + "/" + questions.length);

    document.getElementById("completed_questions").style.visibility = "visible";

    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";


}