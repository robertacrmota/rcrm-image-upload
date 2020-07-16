const bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      express = require('express'),
      app = express();

// --------------------------------------------------------------------
// APP CONFIG
// --------------------------------------------------------------------

app.use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: true }));


// --------------------------------------------------------------------
// MONGODB/MONGOOSE
// --------------------------------------------------------------------

const Avatar = require('./models/avatar');


app.get('/',  (req, res) => res.send('Hello World!'));

// --------------------------------------------------------------------
// SERVER LISTENER
// --------------------------------------------------------------------

app.listen(3000, () => console.log('Server listening on port 3000!'));