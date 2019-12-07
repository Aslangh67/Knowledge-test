var questionPop = document.getElementById("queMark")
var submit = document.getElementById("submit")
var timerOnPage = document.getElementById("timer")
var options = document.getElementById("options")
var optOne = document.getElementById("opt-one")
var optTwo = document.getElementById("opt-two")
var optThree = document.getElementById("opt-three")
var optFour = document.getElementById("opt-four")
var clickMe = document.querySelectorAll(".clickMe")
var optBox = document.querySelector(".options-box")
var firstPop = document.querySelector(".header")
var secondPop = document.querySelector(".second-pop")
var ChangeButton = document.querySelector("#change-over")
var gameOver= document.querySelector("#game-over")
var finalScore= document.querySelector("#final-score")
var scoreShow=document.querySelector("#score")
var scoreList=document.querySelector("#scores-list")
var submitName=document.querySelector("#submit-name")
var initialsInput=document.querySelector("#initials-input")
scoreList=[]
finalScore=[]
var clicked = []
var i = 0
var wrong="notYet"
var gO=[0]
var timeLeft = questions.length * 15



function loadFirst() {
  secondPop.style.display = "none"
  gameOver.style.display= "none"
}

ChangeButton.onclick = function () {
  firstPop.style.display = "none"
  secondPop.style.display = ""
  console.log("show me");

  questionsPage()
  timer()
}

options.onclick = function () {
  var answerSelect = []
  clickMe.forEach(function (event) {
    answerSelect.push(this.event.target.textContent)
  })

  if (answerSelect[0] === questions[i].answer) {
    alert("You got the right answer! now close this")
  } else {
    alert("You got the wrong answer! you've been deducted some seconds! now close this")
    wrong="now"
  }
  i++
  if(i>=questions.length){
    secondPop.style.display = "none"
    gameOver.style.display= ""
    gO=timeLeft
    scoreShow.innerHTML=("Your sore is " + gO)
    storeScore()
    

    
  } else {

    questionsPage()
  }
}

function questionsPage() {
  questionPop.textContent = questions[i].title
  optOne.textContent = questions[i].choices[0]
  optTwo.textContent = questions[i].choices[1]
  optThree.textContent = questions[i].choices[2]
  optFour.textContent = questions[i].choices[3]
}

function timer() {
  var timeInterval = setInterval(function () {
    timerOnPage.textContent = timeLeft;
    timeLeft--;
    if(wrong==="now"){
      timeLeft=timeLeft - 15
      wrong = "notYet"
    }
    
    if (timeLeft === 0) {
      timerOnPage.textContent = "TIME UP";

      clearInterval(timeInterval);
      gameOver.style.display= ""
      secondPop.style.display = "none"
      
    }
  }, 1000);
}
// submitName.onclick=function(){
// // var namePushed=""
// // namePushed=initialsInput.textContent
// // console.log(namePushed);
// console.log("asd");

// }
loadFirst()
console.log(timeLeft);

function storeScore() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("Score", JSON.stringify(gO));
}

// function initScoreList() {
//   // Get stored todos from localStorage
//   // Parsing the JSON string to an object
//   var storedScores = JSON.parse(localStorage.getItem("score"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedTodos !== null) {
//     scoreList = storedScores;
//   }






// submit.addEventListener("click", function (event) {
//     event.preventDefault()


//     questionPop.textContent = questions[0].title

//         questionPop.textContent = questions [qList].title



// })

// functional for loops for questions 

      // optBox.addEventListener("click", function(event){
      //   event.preventDefault()
      //   for(j=0;j<clickMe.length;j++){
      //     clicked.push(clickMe[j].innerText)
      //   }
      //   console.log(clicked);
      //   })



  //  for (let i = 0; i < clickMe.length; i++) {
  //       clicked=clickMe[i]
  //  }





    //   optOne.addEventListener("click", function() {
    //       if(questions[0+i].choices[0]===questions[0+i].answer){
    //           console.log("YOU DID IT");
    //       }else{
    //           console.log("YOU SUCK");   
    //       }
    //   });
    //   optTwo.addEventListener("click", function() {
    //     if(questions[0+i].choices[1]===questions[0+i].answer){
    //         console.log("YOY DID IT");
    //     }else{
    //         console.log("YOU SUCK");   
    //     }
    // });
    // optThree.addEventListener("click", function() {
    //     if(questions[0+i].choices[2]===questions[0+i].answer){
    //         console.log("YOY DID IT");
    //     }else{
    //         console.log("YOU SUCK");   
    //     }
    // });
    // optFour.addEventListener("click", function() {
    //     if(questions[0+i].choices[3]===questions[0+i].answer){
    //         console.log("YOY DID IT");
    //     }else{
    //         console.log("YOU SUCK");   
    //     }
    // })
