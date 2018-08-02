var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hi There, Welcome to my assignment ')
})
app.get('/speak/:animal', function (req,res) {
  var animal = req.params.animal
  var say = ''
  if (animal === 'pig') {
    say = 'Oink'
  } else if (animal === 'cow') {
    say = 'Moo'
  } else if (animal === 'dog') {
    say = 'Woof Woof !!!'
  }
  res.send('The '+ ' ' + animal + ' ' + 'Says ' + say)
})

app.get('/repeat/:val/:val1', function (req,res) {
  var times = parseInt(req.params.val1)
  var word = req.params.val
  var words = ''
  for(var i =0 ;i<times;i++ ){
    words = words + ' - - - ' + word
  }
  res.send('the totol words ' + words)
})
app.get('*', function(req,res) {
  res.send('Soory no such directory exits 404 error')

})
app.listen(3000, function () {
  console.log("listen to the port 3000")
})
