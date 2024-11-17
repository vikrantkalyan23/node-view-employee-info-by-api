const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 4000;

// Serve the frontend files
app.use(express.static(path.join(__dirname, 'public')));

// API to fetch employee data from mock API
app.get('/api/employees', async (req, res) => {
  try {
    const response = await axios.get('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching employee data:', error.message);
    res.status(500).json({ error: 'Failed to fetch employee data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
