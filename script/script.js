console.log(questions);
// for loop
var questionsDeck = []
questionsDeck = questArray(questions)

function questArray(arr) {
    // Creating questions
    var selectQue = []
    for (i = 0; i < arr.length; i++) {
        selectQue.push(arr[i].title)
    }
    console.log(selectQue);
    // creating choices
    var selectChoice = []
    for (i = 0; i < arr.length; i++) {
        selectChoice.push(arr[i].choices)
    }
    console.log(selectChoice);
    // creating answers
    var correctAns = []
    for (i = 0; i < arr.length; i++) {
        correctAns.push(arr[i].answer)
    }
    console.log(correctAns);

}
