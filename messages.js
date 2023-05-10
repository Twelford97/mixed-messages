const messages = {
  greeting: ['Hello!', 'Hey!', 'Hi!', 'Hiya!'],
  question: ['Have you got any plans for the weekend?', 'Do you have a holiday planned this year?', 'What are you doing today?', 'Are you having a nice day?.'],
  reply: ['Wow cool!', 'Sounds exciting!', "Well now I'm jealous!, That's fun!"],
  farewell: ['see you later.', 'enjoy the rest of your day.', 'bye bye.', 'catch you soon.']
};
  
const firstMessage = obj => {
  let greeting = messages.greeting[Math.floor(Math.random() * messages.greeting.length)]
  let question = messages.question[Math.floor(Math.random() * messages.question.length)]
  
  return `${greeting} ... ${question}`;
};

console.log(firstMessage(messages));

const secondMessage = obj => {
  let reply = messages.reply[Math.floor(Math.random() * messages.reply.length)]
  let farewell = messages.farewell[Math.floor(Math.random() * messages.farewell.length)]
  
  return `${reply} Anyway... ${farewell}`;
}

console.log(secondMessage(messages));