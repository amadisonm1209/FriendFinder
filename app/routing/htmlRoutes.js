//Dependencies
var path = require("path");

module.exports = function(app){

//Default / route that leads to home.html and displays the home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
//GET route to /survey which displays the survey page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

}