const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  app = express(),
  // set port, listen for requests
  PORT = process.env.PORT || 3000,
  corsOptions = {
    origin: "http://localhost:3000",
  };

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
