const wordEl = document.querySelector(".word");
const txtEl = document.querySelector(".text");
const scoreEl = document.querySelector(".score");
const timeEl = document.querySelector(".time");
const endGameEl = document.querySelector(".end-game-container");
const containerEl = document.querySelector(".container");
const settingsFormEl = document.querySelector(".settingsForm");
const diffultSelect = document.querySelector(".difficulty");

//random numbers
const words = [
  "javascript",
  "html",
  "css",
  "react",
  "node",
  "express",
  "mongodb",
  "firebase",
  "typescript",
  "sass",
  "git",
  "github",
  "heroku",
  "webpack",
  "npm",
  "jquery",
  "bootstrap",
  "firebase",
  "firestore",
  "sad",
  "happy",
  "angry",
  "sad",
  "happy",
];

//init word
let randomWord;

//init score
let score = 0;

//init time
let time = 10;

//init difficult level
let diffultLevel = "easy";

//generate random  words

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

//add to DOM
function addWordToDom() {
  randomWord = getRandomWord();
  wordEl.innerHTML = randomWord;
}

addWordToDom();

//update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

//update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + " s";
  if (time === 0) {
    clearInterval(timeInterval);
    //game over
    gameOver();
  }
}

updateTime();

//start counting down

const timeInterval = setInterval(updateTime, 1000);

//typing fn

txtEl.addEventListener("input", function (e) {
  console.log(e.target.value);
  const insertedTxt = e.target.value;

  if (insertedTxt === randomWord) {
    //change the word
    addWordToDom();
    //update score
    updateScore();
    //clear the input
    e.target.value = "";

    if (diffultLevel === "easy") {
      time += 5;
    } else if (diffultLevel === "medium") {
      time += 3;
    } else if (diffultLevel === "hard") {
      time += 2;
    }
    //add 5s to the time
    updateTime();
  }
});
//game over
function gameOver() {
  //hide the form
  settingsFormEl.style.display = "none";
  containerEl.style.display = "none";

  endGameEl.innerHTML = `
  <p class="over">Game Over</p>
  <p>Your Score : <span class="score">${score}</span></p>
  <button onclick='location.reload()' class="play-again-btn">Play Again</button>
  `;
}

//difficult level fn
diffultSelect.addEventListener("change", function (e) {
  diffultLevel = e.target.value;
  console.log(diffultLevel);
});
