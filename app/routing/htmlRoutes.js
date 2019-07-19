//Dependencies
var path = require("path");

module.exports = function(app){

//GET route to /survey which displays the survey page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
//Default / route that leads to home.html and displays the home page
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

}