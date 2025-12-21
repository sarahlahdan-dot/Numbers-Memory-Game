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

  
  for (let i = 0; i < 3; i++) {
    numbers.push(Math.floor(Math.random() * 50) + 1);
  }

  
  numbers.forEach(num => {
    const div = document.createElement('div');
    div.className = 'number-box';
    div.textContent = num;
    numbersDisplay.appendChild(div);
  });

  
  setTimeout(() => {
    numbersDisplay.innerHTML = '';
  }, 3000);
}


function checkAnswers() {
  let allCorrect = true;

  numbers.forEach((num, index) => {
    if (parseInt(inputs[index].value) === num) {
      inputs[index].classList.add('correct');
      inputs[index].classList.remove('incorrect');
    } else {
      allCorrect = false;
      inputs[index].classList.add('incorrect');
      inputs[index].classList.remove('correct');
    }
  });

  if (allCorrect) {
    score++;
    result.textContent = 'Perfect! All answers are correct!';
    result.style.color = '#4CAF50'; 
    inputs.forEach(input => input.classList.add('correct'));
  } else {
    result.textContent = 'Incorrect! Try again.';
    result.style.color = '#F44336'; 
    inputs.forEach(input => input.classList.add('incorrect'));
  }

  scoreDiv.textContent = `Score: ${score}`;
}


startBtn.addEventListener('click', startGame);
checkBtn.addEventListener('click', checkAnswers)