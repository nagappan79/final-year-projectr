const express = require('express');
const app = express();

app.get('/', (req, res) => {
  eval(req.query.code);  // Vulnerable
});

app.listen(3000);
