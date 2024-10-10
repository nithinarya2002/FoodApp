const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://external-api.com/endpoint');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(5000, () => console.log('Server running'));
