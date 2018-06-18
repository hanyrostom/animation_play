const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const router = require('./routes.js');

const app = express();
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist/')));



// app.use('/', router);


app.listen(3000, () => {
  console.log('Listening on port 3000...');
});




module.exports = app;
