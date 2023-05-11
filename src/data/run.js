const mysql = require('mysql2/promise');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'script-crc'
};

async function getCategories() {
  const connection = await mysql.createConnection(config);
  const [rows] = await connection.execute('SELECT * FROM categories');
  connection.end();
  return rows;
}

async function getChoices() {
  const connection = await mysql.createConnection(config);
  const [rows] = await connection.execute('SELECT * FROM choices');
  connection.end();
  return rows;
}

app.get('/categories', async (req, res) => {
  const categories = await getCategories();
  res.send(categories);
});

app.get('/choices', async (req, res) => {
  const choices = await getChoices();
  res.send(choices);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});