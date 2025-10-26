// 🎀 ANGEL'S QUIZZY LOGIC 🎀

// When the page loads, find the start button
const startBtn = document.getElementById("start-btn");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const resultTitle = document.getElementById("result-title");
const resultText = document.getElementById("result-text");
const restartBtn = document.getElementById("restart-btn");
const startScreen = document.getElementById("start-screen");
const resultSound = document.getElementById("result-sound");

let currentQuestion = 0;
let score = 0;

const quizData = [
  {
    question: "Someone cancels plans last minute. You...",
    answers: [
      { text: "Say 'no worries!' and actually mean it.", score: 1 },
      { text: "Pretend you’re fine but post a cryptic quote.", score: 2 },
      { text: "Act chill, but write a novel about it later.", score: 3 },
      { text: "Make it everyone’s problem 😌", score: 4 }
    ]
  },
  {
    question: "Your crush likes your old photo. You...",
    answers: [
      { text: "Smile quietly — a win is a win.", score: 1 },
      { text: "Like one of theirs back from 2018. Balance restored.", score: 2 },
      { text: "Screenshot it, send to 3 friends, overanalyze.", score: 3 },
      { text: "Plan your wedding in your Notes app.", score: 4 }
    ]
  },
  {
    question: "You’re in an argument. What’s your move?",
    answers: [
      { text: "Keep calm and hit them with logic.", score: 1 },
      { text: "Use sarcasm as your sword.", score: 2 },
      { text: "Silent treatment, level 100.", score: 3 },
      { text: "Oscar-winning tears. No regrets.", score: 4 }
    ]
  },
  {
    question: "Your outfit doesn’t get noticed. You...",
    answers: [
      { text: "Didn’t dress for them anyway.", score: 1 },
      { text: "Say nothing, but feel betrayed.", score: 2 },
      { text: "Subtly bring it up in conversation.", score: 3 },
      { text: "Storm home and change. Scene included.", score: 4 }
    ]
  }
];

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", () => {
  resultEl.classList.add("hidden");
  startScreen.classList.remove("hidden");
  currentQuestion = 0;
  score = 0;
});

function startQuiz() {
  startScreen.classList.add("hidden");
  quiz.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  nextBtn.classList.add("hidden");
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach(a => {
    const btn = document.createElement("button");
    btn.textContent = a.text;
    btn.classList.add("answer-btn");
    btn.addEventListener("click", () => selectAnswer(a.score));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(s) {
  score += s;
  nextBtn.classList.remove("hidden");
}

function showResult() {
  quiz.classList.add("hidden");
  resultEl.classList.remove("hidden");

  let title, text;
  if (score <= 5) {
    title = "Unbothered Icon 🧊";
    text = "You keep it calm, classy, and chill. Drama doesn’t stand a chance.";
  } else if (score <= 8) {
    title = "Quiet Storm 🌪";
    text = "Your emotions have layers — subtle, powerful, and poetic.";
  } else if (score <= 11) {
    title = "Main Character Energy 🎬";
    text = "You *are* the storyline — dramatic, radiant, unforgettable.";
  } else {
    title = "Certified Drama Festival 💅";
    text = "You don’t enter the scene. You *are* the scene. Iconic chaos, respectfully.";
  }

  resultTitle.textContent = title;
  resultText.textContent = text;
  resultSound.play();
}