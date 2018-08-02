var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog_demo_1')
var postSchema = new mongoose.Schema({
  title: String,
  content: String
})

var postModel = mongoose.model("Post", postSchema)

// user model    - email and name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }]
})

var User = mongoose.model("User", userSchema)
//
// postModel.create({
//   title:'this is second object to',
//   content:'check the details of varous application in the field of the next '
// },function (err,post){
//   User.findOne({email:'dans13'}, function (err,foundUser) {
//     if(err) { console.log(err) }
//     else {
//       foundUser.posts.push(post)
//       foundUser.save(function(err,data) {
//          if(err) { console.log(err) }
//          else {
//            console.log(data)
//          }
//       })
//     }
//   })
// })

// now we need to find
// all user and find all post for the user
//

User.findOne({email:'dans13'}).populate('posts').exec(function (err, user) {
  if (err) { console.log(err) }
  else {
    console.log(user)
  }
})
