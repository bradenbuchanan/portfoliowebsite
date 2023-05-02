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
  const hashedCorrectPassword = '620d6ac62331415d7ca592b1c5fb42df946392f6423bb288ebf5dbf322859dea';
    
  if (hashedEnteredPassword === hashedCorrectPassword) {
    window.location.href = 'blank.html';
  } else {
    alert('Incorrect password, please try again.');
    event.preventDefault(); // prevent the default link behavior
  }
}
