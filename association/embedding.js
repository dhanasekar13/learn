var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog_demo')
var postSchema = new mongoose.Schema({
  title: String,
  content: String
})

var postModel = mongoose.model("Post", postSchema)

// user model    - email and name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
})

var User = mongoose.model("User", userSchema)

// post mode      - title and content
//
//
// var userComment= new User({
//   email:'mail2dhanasekar13@gmail.com',
//   name:'dhanasekar'
// })
//
// userComment.posts.push({
//   title:'the next set of information',
//   content:'the data of the information regarding various specisation'
// })
// userComment.save(function (err, data) {
//   if (err) { console.log(err) }
//   else {
//     console.log(data)
//   }
// })
User.find({},function (err,data) {
  if(err) {  console.log(err); }
  else {
    console.log(data)
  }
})
