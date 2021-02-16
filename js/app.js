'use strict';

let userScoor = 0;

function wlecomingUser() {
  let gussetName = prompt('Please enter your name', 'Your Name');
  console.log('asking the user about his name ==>', 'Welcome ' + gussetName);
  alert('Welcome ' + gussetName);
}

function askingForInput() {

  let answerAfterCheck = '';

  let favoriateAnimal = prompt('Do you think that my fav animal is cat? answer with yes/no - y/n');
  answerAfterCheck = checkInput(favoriateAnimal, 'Do you think that my fav animal is cat? answer with yes/no - y/n');
  (answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? (alert('you are correct'), userScoor++) : alert('why do you think that i\'m not caty person!');
  // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'why do you think that i\'m not caty person!');

  let gusseMyAge = prompt('Do you think i\'m bigger than 25? answer with yes/no - y/n');
  answerAfterCheck = checkInput(gusseMyAge, 'Do you think i\'m bigger than 25? answer with yes/no - y/n');
  (answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? (alert('you are correct'), userScoor++) : alert('I am 30 years old?');
  // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'am i really look smaller than 25?');


  let gusseMyJob = prompt('Do you think i am software developer? answer with yes/no - y/n');
  answerAfterCheck = checkInput(gusseMyJob, 'Do you think i am software developer? answer with yes/no - y/n');
  (answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? (alert('you are correct'), userScoor++) : alert('who do you think built this website!');
  // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'who do you think built this website!');

  let guessMyNationallaty = prompt('Do you i think have a dual citizenship ? answer with yes/no - y/n');
  answerAfterCheck = checkInput(guessMyNationallaty, 'Do you i think have a dual citizenship ? answer with yes/no - y/n');
  (answerAfterCheck === 'n' || answerAfterCheck === 'no') ? (alert('you are correct'), userScoor++) : alert('no i don\'t have a dual citizenship');
  // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'no i have a dual citzenship');

  let guessMyTall = prompt('Do you think im taller than 160 ? answer with yes/no - y/n');
  answerAfterCheck = checkInput(guessMyTall, 'Do you think im taller than 160 ? answer with yes/no - y/n');
  (answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? (alert('you are correct'), userScoor++) : alert('am i look short in my pics?');
  // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'am i look short in my pics?');
}

function checkInput(userAnswer, promptQuestion) {

  // console.log('first one ', userAnswer);
  while (userAnswer.toLowerCase() !== 'yes' && userAnswer.toLowerCase() !== 'y' && userAnswer.toLowerCase() !== 'n' && userAnswer.toLowerCase() !== 'no') {
    // ...
    // console.log('i\'m in the while');
    userAnswer = prompt(promptQuestion);
  }
  // console.log('second one ', userAnswer);
  return userAnswer.toLowerCase();
}


function check7thQuestion() {
  let countAttemt = 0;
  let yearGrad = Number(prompt('guess my graduated year?'));
  while (yearGrad !== 2016 && countAttemt < 3) {
    if (yearGrad < 2016) {
      alert('too low');
    }
    else {
      alert('too high');
    }
    ++countAttemt;
    yearGrad = Number(prompt('guess my graduated year?'));
  }
  if (yearGrad === 2016) {
    alert('you are right');
    userScoor++;
  }
  else {
    alert('you are wrorng the answer is 2016');
  }
}
function check8thQuestion() {
  let arr = ['red', 'green', 'blue', 'yallow'];
  let countAttemtcolor = 0;
  let favColor = prompt('guess my fav color');
  while (arr[0] !== favColor && arr[1] !== favColor && arr[2] !== favColor && arr[3] !== favColor && countAttemtcolor < 5) {
    alert('not correct,try agian');
    ++countAttemtcolor;
    favColor = prompt('guess my fav color');
  }
  if (arr[0] === favColor || arr[1] === favColor || arr[2] === favColor || arr[3] === favColor) {
    alert('you are right');
    userScoor++;
  } else {
    alert('my fav colors are' + ' ' + arr[0] + ' ' + arr[1] + ' ' + arr[2] + ' ' + arr[3]);
  }
}




wlecomingUser();

askingForInput();

check7thQuestion();

check8thQuestion();


alert('your scoor is: ' + userScoor + ' /7');

