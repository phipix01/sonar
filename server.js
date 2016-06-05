var express = require('express')
var qr = require('qr-image')

var app = express()

// settings
app.set('port', (process.env.PORT || 8080))
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

// app.use(express.static(path.join(__dirname, 'views')))

app.get('/', (req, res) => {
  // if client is desktop
  if (true) {
    res.render('index', { youAreUsingJade: true })
  }
})

app.get('/qr', function(req, res) {
  var code = qr.image(new Date().getTime(), { type: 'svg' })
  res.type('svg')
  code.pipe(res)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})
