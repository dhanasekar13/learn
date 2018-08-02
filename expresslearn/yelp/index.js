var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var val = [
  {
    chk:'one'
  },{
    chk:'two'
  },{
    chk:'three'
  }
]
app.use(bodyParser.urlencoded({extended: true}))
app.get('/post', function (req, resp) {
  resp.render('add')
})
app.post('/added', function (req, resp){
  console.log(req.body)
  var set1 = { chk:req.body.chk }
  val.push(set1)
  console.log(val);
  resp.redirect('/comp')
})
app.set('view engine', 'ejs')
app.get('/', function (req, resp) {
  resp.render('home')
})
app.get('/comp', function (req, resp) {
  resp.render('comp', {value:val})
})
app.get('*', function (req, resp) {
  resp.redirect('/')
})
app.listen(1234,function (){
  console.log('The server is running in 1234 port');;
})
