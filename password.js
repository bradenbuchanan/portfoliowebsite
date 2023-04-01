document.querySelector('#project-1').addEventListener('click', checkPassword);

function checkPassword() {
    const enteredPassword = prompt('Enter password:');
    const hashedEnteredPassword = CryptoJS.SHA256(enteredPassword).toString();
    const hashedCorrectPassword = 'ab7d0a36ecbe10c286f92a49bffb57ed6bf5bc6c3a3e15967f3ea8d028316969';
    
    if (hashedEnteredPassword === hashedCorrectPassword) {
        window.location.href = 'airbnb-jtbd.html';
    } else {
        alert('Incorrect password, please try again.');
        event.preventDefault(); // prevent the default link behavior
    }
}

document.querySelector('#project-2').addEventListener('click', checkPassword);

function checkPassword() {
    const enteredPassword = prompt('Enter password:');
    const hashedEnteredPassword = CryptoJS.SHA256(enteredPassword).toString();
    const hashedCorrectPassword = '46aa338f8d9f28dd20de3540259fe3fb45d83cfb4bf222e4eb94975e13f4990c';
    
    if (hashedEnteredPassword === hashedCorrectPassword) {
        window.location.href = 'airbnb-jtbd.html';
    } else {
        alert('Incorrect password, please try again.');
        event.preventDefault(); // prevent the default link behavior
    }
}
