var express = require('express');
var app = express();
app.set('port', process.env.PORT || 5000);

// Our first route.
app.get('/', function (req, res) {
   res.send('Hello Node + Github! This code push has auto-deployed?');
});

// Our second route.
app.get('/dev', function(req, res) {
  res.send("Hello, you are now on the dev route!");
});

// Listen to port 5000.

/*
app.listen(5000, function() {
  console.log('Dev app listining on port 5000');
});

*/
