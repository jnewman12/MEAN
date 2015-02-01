var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/api/posts', function (req, res) {
	res.json([
	{
		username: 'Jimmy__Westside',
		body: 'node and such'
	}
 ])
})

app.post('/api/posts', function (req, res) {
	console.log('Post Received!')
	console.log(req.body.username)
	console.log(req.body.body)
	res.send(201)
})

app.listen(3000, function () {
	console.log("Listening on", 3000)
})