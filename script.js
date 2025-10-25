// 🎀 ANGEL'S QUIZZY LOGIC 🎀

// When the page loads, find the start button
const startBtn = document.querySelector("button");
const body = document.body;

// Quiz data
const question = "Which color represents Angel's quizzy vibe the best?";
const answers = ["Pink 🍓", "Blue 💎", "Yellow 🌼"];
const correctAnswer = "Pink 🍓";

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  // Clear the screen
  body.innerHTML = `
    <h1>Quiz Time 💖</h1>
    <p>${question}</p>
    <div id="options"></div>
    <footer>Made with love by Angel 🩷</footer>
  `;

  const optionsDiv = document.getElementById("options");

  answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.addEventListener("click", () => checkAnswer(answer));
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const message = document.createElement("p");
  if (selected === correctAnswer) {
    message.textContent = "Yay! You got it right 🎉💅🏽";
    message.style.color = "#ff66b3";
  } else {
    message.textContent = "Oops! Try again 💫";
    message.style.color = "#777";
  }

  document.body.appendChild(message);
}