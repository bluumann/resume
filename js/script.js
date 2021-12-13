//index page greeting
const greetingMessage = document.getElementById('greeting');
let greeting = '';

const date = new Date;
let hours = date.getHours();

if(hours > 12) {
  greeting = 'Good Afternoon!';   
}
else {
  greeting = 'Good Morning!';   
}

greetingMessage.innerHTML = greeting;