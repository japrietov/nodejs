var express = require('express')
var app = express();

var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;

app.set('port', port);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server = app.listen(port, function () {

  console.log('Example app listening at http://%s:%s', host, port)

})