const express = require('./config/express');

const port = process.env.PORT || 3000;

var app = express();

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
