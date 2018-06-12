const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3000);

//PathLocationStrategy - lets Angular handle routing for sub-routes instead of the server.  When we type in some //sub-route of our application, index.html will get served before any other route that might get //typed into the address bar.  Angular will handle any sub-routes.

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log('Console listening on port 3000');
