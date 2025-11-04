const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

const db = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: '',
    port: 3307,
};

app.get('/', (req, res) => {
    res.send('Hello, a backend szerver fut!');
  });


  app.listen(port, () => {
    console.log(`Szerver fut a http://localhost:${port} címen`);
    });  