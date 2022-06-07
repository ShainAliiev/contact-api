const express = require('express');
require('dotenv').config()

const mongoConfig = require('./config/mongoConfig')
const contactRouter = require('./routes/contactRouter')

const app = express();
const PORT = 4000;

app.use(express.json())

app.use('/contacts', contactRouter)

app.get('/', (req, res) => {
  res.status(200).json('Welcome to my API')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoConfig()
})