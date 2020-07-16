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

const MONGODB_URI ='mongodb://localhost:27017/avatar-db';
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("connected to URL " + MONGODB_URI))
.catch((err) => console.log("Error on db connection: " + err.message));

// --------------------------------------------------------------------
// ROUTES
// --------------------------------------------------------------------

app.get('/',  (req, res) => res.send('Hello World!'));

// --------------------------------------------------------------------
// SERVER LISTENER
// --------------------------------------------------------------------

app.listen(3000, () => console.log('Server listening on port 3000!'));