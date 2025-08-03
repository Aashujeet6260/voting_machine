const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); // Import body-parser to parse request bodies
app.use(bodyParser.json()); // Use body-parser to parse JSON request bodies
const PORT = process.env.PORT || 3000; // Set the port to listen on, defaulting to 3000 if not specified



// Import the router files
const userroutes = require('./routes/userroutes');
const candidateroutes = require('./routes/candidateroutes');

// Use the routers
app.use('/user', userroutes);
app.use('/candidate',candidateroutes);

  




app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000')
}) // Start the server on port 3000

