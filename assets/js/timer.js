var score = 0;
for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt)
    if(response == questions[i].answer){
        score++;
    }
}
alert("you got " + score + "/" + questions.length);
// var response will access the questions if they are written out as prompts
// [i] acts as the loop

// var questions = [
// {
// },
// ]


// create a start button that will load trivia questions
// create a timer
// record answers of the questions
// missed guess = a loss of point(s)
// 15 and 10 second warning
// total score outcome
// create a ending sound if I have time
