//GRAB BODY TAG
const body = $("body");

//==========================================CREATES TITLE SECTION
const titleDiv = $(
  "<div id='title'><h1>JEOPARDY GAME</h1><div id='score-div'>YOUR SCORE : 0</div></div>"
);

body.append(titleDiv);

//APPENDS TITLE

//==========================================CREATES BOARDS AND ROW
const boardDiv = $("<div id='board-grid'></div>");
body.append(boardDiv);

for (let i = 0; i < 5; i++) {
  //ADD ROW FOR 100
  const box100 = $("<div class='board-grid board-100'>$100</div>");
  boardDiv.append(box100);
}

for (let i = 0; i < 5; i++) {
  const box200 = $("<div class='board-grid board-200'>$200</div>");
  boardDiv.append(box200);
}

for (let i = 0; i < 5; i++) {
  const box400 = $("<div class='board-grid board-400'>$400</div>");
  boardDiv.append(box400);
}

for (let i = 0; i < 5; i++) {
  const box600 = $("<div class='board-grid board-600'>$600</div>");
  boardDiv.append(box600);
}

for (let i = 0; i < 5; i++) {
  const box800 = $("<div class='board-grid board-800'>$800</div>");
  boardDiv.append(box800);
}

//=============================================DISPLAYS QUESTION DIV
const questionDisplay = $('<div id="question-answer-display">QUESTION:</div>');
body.append(questionDisplay);

//==============================================ANSWER SUBMIT DIV
const answer = $(
  '<div id=\'answer-div\'><div id="answer-label" class="answer">ANSWER SUBMIT<input type="text" class="answer" id="answer-input"><button id="submit" class="answer">SUBMIT</button></div></div>'
);

body.append(answer);

//===============================================QUERIED VALUES
const box100 = $(".board-100");
const box200 = $(".board-200");
const box400 = $(".board-400");
const box600 = $(".board-600");
const box800 = $(".board-800");

//FILTER VALUES PREFERRED OVER LO-DASH
const questions100 = QUESTIONS.filter((v) => v.value === "$100");
const questions200 = QUESTIONS.filter((v) => v.value === "$200");
const questions400 = QUESTIONS.filter((v) => v.value === "$400");
const questions600 = QUESTIONS.filter((v) => v.value === "$600");
const questions800 = QUESTIONS.filter((v) => v.value === "$800");

//===========================================CLEAR VALUES USER RESET
let currentQuestion = "";
let currentAnswer = "";
let currentQuestionValue = "";

//=========================LOOPS BASED ON USER CLICK VALUE APPENDS QUESTION TO DOM
//================================100 BOX / ROW
for (const clickButton of box100) {
  const button100 = $(clickButton);

  button100.click(() => {
    let question =
      questions100[Math.floor(Math.random() * questions100.length).toFixed(0)];
    currentQuestion = question.question;
    questionDisplay.text(currentQuestion);

    currentAnswer = question.answer;
    currentQuestionValue = question.value;
    console.log(currentAnswer);
  });
}

//===============================200 BOX / ROW
for (const clickButton of box200) {
  const button200 = $(clickButton);

  button200.click(() => {
    let question =
      questions200[Math.floor(Math.random() * questions200.length).toFixed(0)];
    currentQuestion = question.question;
    questionDisplay.text(currentQuestion);

    currentAnswer = question.answer;
    currentQuestionValue = question.value;
    console.log(currentAnswer);
  });
}

//===============================400 BOX / ROW
for (const clickButton of box400) {
  const button400 = $(clickButton);

  button400.click(() => {
    let question =
      questions400[Math.floor(Math.random() * questions400.length).toFixed(0)];
    currentQuestion = question.question;
    questionDisplay.text(currentQuestion);

    currentAnswer = question.answer;
    currentQuestionValue = question.value;
    console.log(currentAnswer);
  });
}

//===============================600 BOX / ROW
for (const clickButton of box600) {
  const button600 = $(clickButton);

  button600.click(() => {
    let question =
      questions600[Math.floor(Math.random() * questions600.length).toFixed(0)];
    currentQuestion = question.question;
    questionDisplay.text(currentQuestion);

    currentAnswer = question.answer;
    currentQuestionValue = question.value;
    console.log(currentAnswer);
  });
}

//=================================800 BOX / ROW
for (const clickButton of box800) {
  const button800 = $(clickButton);

  button800.click(() => {
    let question =
      questions800[Math.floor(Math.random() * questions800.length).toFixed(0)];
    currentQuestion = question.question;
    questionDisplay.text(currentQuestion);

    currentAnswer = question.answer;
    currentQuestionValue = question.value;
    console.log(currentAnswer);
  });
}

//=========================QUERIED ANSWER INPUT / ANSWER SUBMIT / AND SCORE
const inputAnswer = $("#answer-input");
const submitButton = $("#submit");
const scoreDisplayValue = $("#score-div");

//========================================SCORE TRACKER
let newScore = 0;

//====================================GRABS LOCAL STORAGE
const storedScores = localStorage.getItem("storedScores");


//=====================================OVER-RIDES SCORE AND RECALIBRATES
if (storedScores !== null) {
  newScore += Number(storedScores);
  scoreDisplayValue.text(`Your Score: ${newScore}`);
}


//====================SCORE IS DISPLAYED IF ANSWER IS CORRECT + CONGRATULATIONS YOU ARE CORRECT
submitButton.click(() => {
  if (inputAnswer.val() === currentAnswer) {
    questionDisplay.text(`YOU ARE CORRECT!!!`);
    newScore += Number(currentQuestionValue.slice(1));
    scoreDisplayValue.text(`Your Score : ${newScore}`);
    inputAnswer.val("");

    //KEY FOR LOCAL STORAGE TO DISPLAY 
    localStorage.setItem("storedScores", newScore);
  } else {
    questionDisplay.text(currentAnswer);
  }
});
