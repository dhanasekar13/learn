var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cats')

// this tells the js side of things that i want ot be able to add cats to our database
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  details: String
});
//defining the pattern for the data
//providing the template for the structure
// looks easy to maintainence

var Cat = mongoose.model('Cat', catSchema)

/*
// adding a new cat to
var val = new Cat({
  name:'siri',
  age:4,
  details: 'naughty cat'
})

val.save(function (err, data) {
  if (err) { console.log(err) }
  else {
    // console.log(data)
  }
})
*/
Cat.find({}, function (err, data) {
  if (err) {
    console.log(err)
  }
  else {
    console.log(data)
  }
})
var dhana = mongoose.model('')
