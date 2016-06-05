var express = require('express')
var useragent = require('express-useragent')
var qr = require('qr-image')

var app = express()

// settings
app.set('port', (process.env.PORT || 8080))
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

// app.use(express.static(path.join(__dirname, 'views')))
app.use(useragent.express())

app.get('/', (req, res) => {
  let { useragent } = req
  // if client is desktop
  if (useragent.isDesktop) {
    res.render('index', { useragent })
  }else if (useragent.isMobile) {
    res.render('mobile', { useragent })
  }
})

app.get('/qr', function(req, res) {
  let code = qr.image(new Date().getTime(), { type: 'svg' })
  res.type('svg')
  code.pipe(res)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})
