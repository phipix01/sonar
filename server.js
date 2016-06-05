var express = require('express')
var qr = require('qr-image')

var app = express()
app.set('port', (process.env.PORT || 5000))

app.get('/qr', function(req, res) {
  var code = qr.image(new Date().getTime(), { type: 'svg' })
  res.type('svg')
  code.pipe(res)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})
