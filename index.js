const {Client,Pool} = require('pg');
const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
 
  app = express(),
  // set port, listen for requests
  PORT = process.env.PORT || 3000,
  corsOptions = {
    origin: "http://localhost:3000",
  };

  //Connection Start
 

const client = new Client({
  user: 'admin',
  host: 'localhost',
  database: 'Segwitz-Assignment',
  password: 'admin',
  port: 5432,
});

client.connect()
client.query('SELECT NOW()', (err, res) => {  
  console.log(err, res)
  client.end()
})
  // const connectionString = 'postgres://admin:admin@localhost:5432/Segwitz-Assignment';
  // const client = new Client({
  //     connectionString:connectionString// process.env.DATA_BASE_LINK 
  // });
  // client.connect();
  // console.log("Connected");
  //  client.query('SELECT NOW()', (err, res) => {  
   
  //     console.log(err, res)
  //     client.end()
  //   })
/// End connnection code

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello, Segwitz application." });
});

require("./app/routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
