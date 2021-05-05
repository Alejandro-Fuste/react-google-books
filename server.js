// Requiring necessary npm packages
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Requiring .dotenv file
require("dotenv").config();

//Setting up port
const PORT = process.env.PORT || 3001;

// Set models folder to db variable
const db = require("./config/connection");

// Creating express app
const app = express();

//Configuring middleware needed for parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API Routes
require("./routes/api-routes.js")(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Delete this after finishing development
// app.get('*', function(req, res) {
// 	res.sendFile(path.join(__dirname, './client/public/index.html'));
// });

//Start server to listen
db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`🌎 ==> API running on http://localhost:%s/`, PORT)
  );
});
