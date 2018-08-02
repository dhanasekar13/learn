var express     = require('express')
var app         = express()
var mongoose    = require('mongoose'),
    passport    = require('passport'),
    bodyParser  = require('body-parser'),
    User        = require('./models/user')
    LocalStrategy= require('passport-local')
    passportLocalMongoose  = require('passport-local-mongoose')
mongoose.connect('mongodb://localhost/authentication')
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use(require('express-session')({
  secret: 'dhanasekar make use of the oppurninty',
  resave:false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.get('/', function (req,resp){
  resp.render('home')
})
app.get('/signup', function (req, resp){
  resp.render('register')
})
app.post('/register', function(req, resp){
  User.register(new User({username:req.body.username}), req.body.password, function(err, user){
    if (err) {
        console.log(err);
        return res.render('register')
    }
    passport.authenticate('local')(req,resp, function() {
      resp.redirect('/secret')
    })
  })
})

app.get('/secret', isLoggedIn, function (req, resp){
  resp.render('secret')
})
app.get('/logout', function (req, resp) {
  req.logout()
  resp.redirect('/')
})
app.post('/login', passport.authenticate('local',{
  successRedirect: '/secret',
  failureRedirect: '/'
}),function (req, resp){
})

function isLoggedIn(req, resp, next){
  if (req.isAuthenticated()) {
    return next()
  }
  resp.redirect('/')
}
app.listen(1212, function () {
  console.log('hey this is the index page')
})
