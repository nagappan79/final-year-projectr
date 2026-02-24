const express = require('express');
const app = express();

// Hardcoded secret (detectable)
const API_KEY = "123456789SECRETKEY";

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
