const axios = require('axios');

async function getRealtime(city) {
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
}

module.exports = getRealtime;
