var express = require('express');
// Tells which server is used

var app = express();
//Initializes app

app.use(express.static('public'));
//Specifies folder out of which to serve files in this case public

app.listen(3000, function() {
  console.log("Example app is listening on port 3000!");
});
