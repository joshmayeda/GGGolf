const axios = require('axios');

let num = Math.floor(Math.random() * 635) + 1;

//range 1-635

//const apiURL = `https://golf-leaderboard-data.p.rapidapi.com/leaderboard/${num}`;
const apiURL = `https://golf-leaderboard-data.p.rapidapi.com/leaderboard/25`;

const options = {
  headers: {
    'X-RapidAPI-Key': '0edbbb1828mshabaf2ae7517d0bep15b362jsn5232fdb8fbdc',
    'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'
  }
};

async function getRandom1stPlace() {
  try {
    const response = await axios.get(apiURL, options);
    const results = response.data['results'];
    const resultsOf1st = results.leaderboard[0];
    console.log(resultsOf1st);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getPhilMickelson() {
  try {
    const response = await axios.get(apiURL, options);
    const results = response.data['results'];
    const resultsOfPhil = results.leaderboard.find(player => player.player_id === 5446);
    console.log(resultsOfPhil);
  } catch (error) {
    console.error('Error:', error);
  }
}

getRandom1stPlace();
getPhilMickelson();