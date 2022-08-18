var express = require('express');
var cors = require('cors')
var app = express();
const db = require("./app/models");

var bodyParser = require('body-parser')

// view engine setup
app.use(express.urlencoded());
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

require("./app/routes/mongodb1.routes")(app);

const securePort = process.env.PORT || '5000'
app.listen(securePort, () => {
    console.log(`La api está escuchando en el puerto ${securePort}`)
})

module.exports = app;