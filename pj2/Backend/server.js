const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


app.post('/api/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;
  
    let result;
    if (operation === 'add') {
      result = num1 + num2;
    } else if (operation === 'subtract') {
      result = num1 - num2;
    } else if (operation === 'multiply') {
      result = num1 * num2;
    } else if (operation === 'divide') {
      result = num1 / num2;
    }
  
    // Store the result in the database (to be implemented later)
    // ...
  
    res.json({ result });
  });

  
  const MongoClient = require('mongodb').MongoClient;
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'calculatorDB';

MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Failed to connect to the database:', err);
    return;
  }

  const db = client.db(dbName);
  console.log('Connected to the database');

  // Close the database connection when the server is shut down
  process.on('SIGINT', () => {
    client.close();
    console.log('Database connection closed');
    process.exit();
  });

  // Add the database logic (to be implemented later)
  // ...
});


app.post('/api/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;
  
    let result;
    if (operation === 'add') {
      result = num1 + num2;
    } else if (operation === 'subtract') {
      result = num1 - num2;
    } else if (operation === 'multiply') {
      result = num1 * num2;
    } else if (operation === 'divide') {
      result = num1 / num2;
    }
  
    const collection = db.collection('results');
    collection.insertOne({ num1, num2, operation, result }, (err, result) => {
      if (err) {
        console.error('Failed to insert result into the database:', err);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }
  
      res.json({ result });
    });
  });
  