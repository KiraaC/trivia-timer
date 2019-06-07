// var score = 0;
// for(var i=0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt)
//     if(response == questions[i].answer){
//         score++;
//     }
// }

// alert("you got " + score + "/" + questions.length);
// var response will access the questions if they are written out as prompts
// [i] acts as the loop

// var questions = [
// {
// },
// ]
  // alert('hello world')

//   checking answers 
function check() {
    const question1 = document.quiz.question1.value;
    const question2 = document.quiz.question2.value;
    const question3 = document.quiz.question3.value;
    const question4 = document.quiz.question4.value;
    const question5 = document.quiz.question5.value;
    const question6 = document.quiz.question6.value;
    var correct = 0;

    if (question1 === "Sponge Bob Square Pants") {
        correct = correct + 1
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
   
  document.getElementById("completed_questions").style.visibility = "visible";
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}