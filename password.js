'use strict';

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#project-1').addEventListener('click', checkPassword1);
  document.querySelector('#project-2').addEventListener('click', checkPassword2);
});

function checkPassword1() {
  const enteredPassword = prompt('Enter password:');
  const hashedEnteredPassword = CryptoJS.SHA256(enteredPassword).toString();
  const hashedCorrectPassword = '0cedbd78e59e9963e3e43ad5455eae46b222a4b6a6e9189856d2b691651a08f0';
    
  if (hashedEnteredPassword === hashedCorrectPassword) {
    window.location.href = 'airbnb-jtbd.html';
  } else {
    alert('Incorrect password, please try again.');
    event.preventDefault(); // prevent the default link behavior
  }
}

function checkPassword2() {
  const enteredPassword = prompt('Enter password:');
  const hashedEnteredPassword = CryptoJS.SHA256(enteredPassword).toString();
  const hashedCorrectPassword = '46aa338f8d9f28dd20de3540259fe3fb45d83cfb4bf222e4eb94975e13f4990c';
    
  if (hashedEnteredPassword === hashedCorrectPassword) {
    window.location.href = 'blank.html';
  } else {
    alert('Incorrect password, please try again.');
    event.preventDefault(); // prevent the default link behavior
  }
}
