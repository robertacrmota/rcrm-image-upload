const bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      express = require('express'),
      cors = require('cors'),
      app = express();

// --------------------------------------------------------------------
// APP CONFIG
// --------------------------------------------------------------------
app.use(cors())
   .use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: true }));


// --------------------------------------------------------------------
// MONGODB/MONGOOSE
// --------------------------------------------------------------------
const MONGODB_URI ='mongodb://localhost:27017/avatar-db';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("connected to URL " + MONGODB_URI))
.catch((err) => console.log("Error on db connection: " + err.message));

const resetdb = require('./reset-db');
resetdb();

// --------------------------------------------------------------------
// ROUTES
// --------------------------------------------------------------------
const  AvatarRouter = require('./routes/avatar');

app.use("/", AvatarRouter);

// --------------------------------------------------------------------
// SERVER LISTENER
// --------------------------------------------------------------------

app.listen(3000, () => console.log('Server listening on port 3000!'));