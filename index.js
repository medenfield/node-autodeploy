var express = require('express');
var app = express();
app.set('port', process.env.PORT || 5000);

// Our first route
app.get('/', function (req, res) {
  res.send('Hello Node + GitHub!');
});

// Listen to port
app.listen(app.get('port'), function () {
  console.log('App is listening on port ' + app.get('port'));
});

// Listen to port 5000.

/*
app.listen(5000, function() {
  console.log('Dev app listining on port 5000');
});

*/
