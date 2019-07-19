//Bring in the friends from data
var friends = require("./../data/friends")

module.exports = function (app) {

  //GET route for /api/friends that will display JSON of all friends
  app.get("/api/friends", function (req, res) {
    return (res.json(friends));
  });

  //POST route for /api/friends to handle incoming survey results and matching logic 
  app.post("/api/friends", function (req, res) {

    //to start finding best match, set up match variables 
    var match = {
      name: "",
      photo: "",
      scoreDifference: 100
    }
    var totalDifference = 0;

    // req.body hosts is equal to the JSON post sent from the user
    var newFriend = req.body;

    //loop through all friends to calculate total difference
    for (let i = 0; i < friends.length; i++) {
      totalDifference = 0;
      //second loop through all the answers 
      for (let j = 0; j < friends[i].answers.length; j++) {
        //find total difference using math.abs
        totalDifference += Math.abs(parseInt(newFriend.answers[j]) - parseInt(friends[i].answers[j]));

        //check to see which friend is the best match
        if (totalDifference <= match.scoreDifference) {

          match.name = friends[i].name;
          match.photo = friends[i].photo;
          match.scoreDifference = totalDifference;
          console.log(match);
        }
      }
    }
      //push to friends array to display on API
      friends.push(newFriend);
      res.json(match);
    });
};
