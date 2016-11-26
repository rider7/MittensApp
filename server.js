var express = require('express');
// Tells which server is used

var app = express();
//Initializes app

app.use(express.static('public'));
//Specifies folder out of which to serve files in this case public

app.get('/meows', function(req, res, next){
// Routes HTTP GET requests to the specified path with the specified callback functions.
var meows = [
  'Hello I flipped over a cup',
  'My owner just said hi to me... yum',
  'I ran around the house today and made a mess',
  'Hang in there!',
  'hello again'
];

res.send(meows);
// Send response object
});

app.listen(3000, function() {
  console.log("Example app is listening on port 3000!");
});
