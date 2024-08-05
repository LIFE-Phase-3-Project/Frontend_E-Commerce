const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Health check endpoints
app.get('/health/ready', (req, res) => {
  res.status(200).send('Ready');
});

app.get('/health/live', (req, res) => {
  res.status(200).send('Alive');
});

// Handles any requests that don't match the above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});