var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser')
var mongoose    = require('mongoose')

mongoose.connect('mongodb://localhost/yelp')

//  SCHEMA
var campgroundSchema = new mongoose.Schema({
  chk: String,
  description: String
})

var Campground = mongoose.model('Campground', campgroundSchema)
/*
Campground.create([
  {
    chk:'one'
  },{
    chk:'two'
  },{
    chk:'three'
  }
], function (err, data) {
  if (err) {console.log(err)}
  else {
    console.log(data)
  }
})
*/
app.use(bodyParser.urlencoded({extended: true}))
// NEW === SHOW FORM TO CREATE CAMPGROUND
app.get('/comp/new', function (req, resp) {
  resp.render('add')
})

// CREATE == CREATE A NEW DATA
app.post('/comp', function (req, resp){
  console.log(req.body)
  //var set1 = { chk:req.body.chk }
  Campground.create({
      chk:req.body.chk,
      description:req.body.des
    }, function (err, data) {
    if (err) {console.log(err)}
    else {
      console.log(data)
      resp.redirect('/comp')
    }
  })
  // console.log(val);
})
app.set('view engine', 'ejs')
app.get('/', function (req, resp) {
  resp.render('home')
})
// Index - show all comp
app.get('/comp', function (req, resp) {
  //Get all campounds from database
  Campground.find({}, function (err, data) {
    if (err) {console.log(err)}
    else { resp.render('comp', {value: data})}
  })
})
// SHOW == more information about the particaulr camp
app.get('/comp/:id', function (req, resp) {
  console.log(req.params.id)
  Campground.findById(req.params.id, function (err, data) {
    if (err) { console.log(err)}
    else {
      console.log(data);
        resp.render('show', {val: data})
    }
  })

})
app.get('*', function (req, resp) {
  resp.redirect('/')
})
app.listen(1234,function (){
  console.log('The server is running in 1234 port');;
})
