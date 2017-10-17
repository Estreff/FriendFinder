const friends = require('../data/friends');
module.exports = function(app) {
    
    app.get('/api/friends', function(request, response) {
        response.json(friends);
    });

    app.post("/api/friends", function(request, response) {
        var newFriend = request.body;
        console.log(newFriend);
        friends.push(newFriend); 
        response.json(newFriend);   
    });
}