//Bring in the friends from data
var friends = require ("./../data/friends")

module.exports = function(app){

//GET route for /api/friends that will display JSON of all friends
 app.get("/api/friends", function(req, res) {
    return (res.json(friends));
  });

//POST route for /api/friends to handle incoming survey results and matching logic 
app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
  
    var newReservation = req.body;
  //need to check space and add to the correct array
  if (tables.length < 5 ){
      tables.push(newReservation);
      res.json(true);
     
  } else{
      waitlist.push(newReservation);
      res.json(false)
  }
  
    res.json(newReservation);
  
  });
}
