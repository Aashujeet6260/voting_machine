const express = require('express');
const path = require('path');
const db = require('./db');
require('dotenv').config();

const app = express();

// Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// Import routes
const userroutes = require('./routes/userroutes');
const candidateroutes = require('./routes/candidateroutes');

// API routes
app.use('/api/user', userroutes);
app.use('/api/candidate', candidateroutes);

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'client')));

// Route for main voting page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// Route for admin panel
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'admin.html'));
});

// Fallback for any other unknown routes (optional)
app.get('*', (req, res) => {
  res.status(404).send('Page Not Found');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
