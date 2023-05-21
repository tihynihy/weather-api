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


    const city = await prompt('Enter the city: ');
    const date = await prompt('Enter the date (YYYY-MM-DD): ');

 
    const historyOptions = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/history.json',
      params: {
        q: city,
        dt: date,
        lang: 'en'
      },
      headers: {
        'X-RapidAPI-Key': 'ffbdc38f00mshfa60716f35785ffp10b986jsn56a8db74c3e2',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try {
      const historyResponse = await axios.request(historyOptions);
      console.log(historyResponse.data);
    } catch (error) {
      console.error(error);
    }

    
    const forecastOptions = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {
        q: city,
        days: '3'
      },
      headers: {
        'X-RapidAPI-Key': 'ffbdc38f00mshfa60716f35785ffp10b986jsn56a8db74c3e2',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try {
      const forecastResponse = await axios.request(forecastOptions);
      console.log(forecastResponse.data);
    } catch (error) {
      console.error(error);
    }

 
    const realtimeOptions = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: city },
      headers: {
        'X-RapidAPI-Key': 'ffbdc38f00mshfa60716f35785ffp10b986jsn56a8db74c3e2',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try {
      const realtimeResponse = await axios.request(realtimeOptions);
      console.log(realtimeResponse.data);
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log('Invalid username or password. Login failed.');
  }

  rl.close();
}

login();
