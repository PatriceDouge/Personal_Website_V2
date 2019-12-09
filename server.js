const express = require("express");
// const favicon = require('express-favicon');
const path = require("path");
const port = process.env.PORT || 80;
const app = express();

if (process.env.NODE_ENV === 'production') {
  // app.use(favicon(__dirname + '/build/favicon.ico'));
  app.use(express.static('build'));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Server up and running on port ${port} !`));