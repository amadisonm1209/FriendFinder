//Dependencies
var express = require("express");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000; //if the server youre on mandates a port use that one, if not, use this one

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Starts the server and tells it to listen
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
