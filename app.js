const axios = require('axios');

async function getForecast(city) {
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
}

module.exports = getForecast;
