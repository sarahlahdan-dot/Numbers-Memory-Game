let numbers = [];
let score = 0;

const numbersDisplay = document.getElementById('numbersDisplay');
const startBtn = document.getElementById('startBtn');
const checkBtn = document.getElementById('checkBtn');
const result = document.getElementById('result');
const scoreDiv = document.getElementById('score');

const inputs = [
  document.getElementById('input0'),
  document.getElementById('input1'),
  document.getElementById('input2')
];


function startGame() {
  numbers = [];
  numbersDisplay.innerHTML = '';
  result.textContent = '';

  inputs.forEach(input => {
    input.value = '';
    input.classList.remove('correct', 'incorrect');
  });

  // Generate 3 random numbers (1–50)
  for (let i = 0; i < 3; i++) {
    numbers.push(Math.floor(Math.random() * 50) + 1);
  }

  // Show numbers
  numbers.forEach(num => {
    const div = document.createElement('div');
    div.className = 'number-box';
    div.textContent = num;
    numbersDisplay.appendChild(div);
  });

  // Hide numbers in few seconds
  setTimeout(() => {
    numbersDisplay.innerHTML = '';
  }, 3000);
}



startBtn.addEventListener('click', startGame);
