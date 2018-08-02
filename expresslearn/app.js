var express = require('express')
var app = express()

// create a route for '/'

app.get('/', function (req, res) {
  res.send('this is HOME PAGE')
})

// create a route for '/bye'
app.get('/bye', function (req, res) {
  console.log('this is bye page request is added')
  res.send('this is bye of the page')
})

app.get('/chk/:val/:val1', function (req, res) {
  res.send('this is first parameter ' +  req.params.val + 'this is second parameter' + req.params.val1)
})
app.get('/dog/:pd', function (req,res) {
  console.log(req.params)
  res.send('this is any directory' + req.params.pd)
})
//create a route for '/dog'
app.get('/dog', function (req, res) {
  console.log('dog is page is requested')
  res.send(' this is dog application page')
})
app.get('*', function (req, res) {
    res.send('this is astrix of the application of the page')
})

// listen for the request

app.listen(3030, process.env.IP, function () {
  console.log('hey this is listening to 3030')
})
