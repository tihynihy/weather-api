const axios = require('axios');

async function getHistory(city, date) {
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
}

module.exports = getHistory;
