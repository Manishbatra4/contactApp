var express = require('express'),
	api = require('./api'),
	app = express();

app
	.use(express.static('./public'))
	.use('/api',api)
	.get('*', function (req, res) {
  		res.sendfile('public/index.html')
	})

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000 !')
})
