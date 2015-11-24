var express = require('express')
var app = express()

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
app.set('port', port);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server = app.listen(port, function () {

})