//javascript page random number
let randomNum = document.getElementById('randomNum');
let randomNumber = Math.floor(Math.random() * 100);
randomNum.innerHTML = 'This is a randomly generated number:' + ' ' + randomNumber;

//javascript page date and time
const dateField = document.getElementById('dateField');
const timeField = document.getElementById('timeField');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const date = new Date();
let time = (date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));  

dateField.innerHTML = 'Date: ' + monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
timeField.innerHTML = 'Time: ' + time;