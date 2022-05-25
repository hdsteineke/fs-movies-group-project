const fetch = require('node-fetch');
require('dotenv').config();

exports.handler = async (event) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_KEY}&query=${event.queryStringParameters.query}`);
    const data = await response.json();
    const json = JSON.stringify(data);

    return { 
      statusCode: 200, 
      body: json
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};