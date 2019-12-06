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
var clicked = []
var i = 0
var timeLeft = questions.length * 15


function loadFirst() {
  secondPop.style.display = "none"
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
    timeLeft
  }
  i++
  questionsPage()
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
    if (timeLeft === 0) {
      timerOnPage.textContent = "TIME UP";
      clearInterval(timeInterval);
    }
  }, 1000);
}
loadFirst()







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
