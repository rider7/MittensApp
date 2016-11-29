var express = require('express');
// Tells which server is used

var bodyParser = require('body-parser');
// Used to require parse the JSON
var app = express();
//Initializes app
app.use(bodyParser.json());
// Use body parser
app.use(express.static('public'));
//Specifies folder out of which to serve files in this case public

var meows = [
  'Hello I flipped over a cup',
  'My owner just said hi to me... yum',
  'I ran around the house today and made a mess',
  'Hang in there!',
  'hello again'
];

app.get('/meows', function(req, res, next){ // request, response, next(error calling)
// Routes HTTP GET requests to the specified path with the specified callback functions.

res.send(meows);
// Send response object
});

app.post('/meows', function(req, res, next){
meows.push(req.body.newMeow);
console.log(meows);
res.send(); // Always put this so the server won't hang
});
app.listen(3000, function() {
  console.log("Example app is listening on port 3000!");
});
