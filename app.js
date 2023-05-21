const axios = require('axios');
const readline = require('readline');
const fs = require('fs');

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

async function login() {

  const username = await prompt('Enter your username: ');
  const password = await prompt('Enter your password: ');

  let passwords;
  try {
    passwords = JSON.parse(fs.readFileSync('local_db.json'));
  } catch (error) {
    console.error('Error reading passwords:', error);
    rl.close();
    return;
  }

  if (passwords[username] === password) {
    console.log('Login successful.');
    return true;
  } else {
    console.log('Invalid username or password. Login failed.');
    return false;
  }
}

module.exports = login;
