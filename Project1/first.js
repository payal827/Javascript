const quotes = [
  "Believe you can and you're halfway there.",
  "Dream big and dare to fail.",
  "Do something today that your future self will thank you for.",
  "Success is not final, failure is not fatal.",
  "Happiness depends upon ourselves.",
  "Push yourself, because no one else is going to do it for you.",
  "Difficult roads often lead to beautiful destinations.",
  "Stay positive, work hard, make it happen.",
  "Don’t wait for opportunity. Create it.",
  "Little things make big days.",
  "It always seems impossible until it's done.",
  "Start where you are. Use what you have. Do what you can.",
  "Great things never come from comfort zones.",
  "Don’t stop until you're proud.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Believe in yourself and all that you are.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Your limitation—it’s only your imagination.",
  "Sometimes later becomes never. Do it now.",
  "The harder you work for something, the greater you’ll feel when you achieve it."
];


const button = document.querySelector('button');
const quote = document.querySelector('h1')

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*20);
    quote.innerText = quotes[index];



})