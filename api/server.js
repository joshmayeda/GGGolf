const axios = require('axios');
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000; // Choose a port number

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const apiURL = `https://golf-leaderboard-data.p.rapidapi.com/leaderboard/25`;

const options = {
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': process.env.API_HOST
  }
};

app.get('/api', async (req, res) => {
  try {
    const response = await axios.get(apiURL, options);
    const results = response.data['results'];
    res.json(results);
    console.log(results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
})

app.get('/api/first', async (req, res) => {
  try {
    const response = await axios.get(apiURL, options);
    const results = response.data['results'];
    const resultsOf1st = results.leaderboard[0];
    res.json(resultsOf1st);
    console.log(resultsOf1st);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
})

app.get('/api/phil', async (req, res) => {
  try {
    const response = await axios.get(apiURL, options);
    const results = response.data['results'];
    const resultsOfPhil = results.leaderboard.find(player => player.player_id === 5446);
    res.json(resultsOfPhil);
    console.log(resultsOfPhil);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
})