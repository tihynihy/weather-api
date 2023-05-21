const readline = require('readline');
const login = require('./login');
const getHistory = require('./history');
const getForecast = require('./forecast');
const getRealtime = require('./realtime');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  const loggedIn = await login();

  if (!loggedIn) {
    rl.close();
    return;
  }

  const city = await prompt('Enter the city: ');
  const date = await prompt('Enter the date (YYYY-MM-DD): ');

  await getHistory(city, date);
  await getForecast(city);
  await getRealtime(city);

  rl.close();
}

main();
