var express               = require('express')
    app                   = express()
    mongoose              = require('mongoose')
    passport              = require('passport')
    bodyParser            = require('body-parser')
    LocalStrategy         = require('passport-local')
    passportLocalMongoose = require('passport-local-mongoose')
    UserSchema            = require('./models/user')

mongoose.connect('mongodb://localhost/auth')
app.use(require('express-session')({
  secret: 'dhanasekar never underestimate yourself and also over estimate yourself',
  resave: false,
  saveUnitialized: false
}))
app.set('view engine', 'ejs')
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.urlencoded({extended: true}))
passport.serializeUser(UserSchema.serializeUser())
passport.deserializeUser(UserSchema.deserializeUser())
app.get('/',function(req,resp){
  resp.render('home')
})
app.get('/register/new', function(req, resp){
  resp.render('register')
})
app.get('/secret', function(req,resp){
  resp.render('secret')
})
app.post('/register', function(req, resp){
  console.log(req.body.reg)
//  resp.send(req.body.reg)
  UserSchema.register(new UserSchema({username:req.body.reg.name}), req.body.reg.pass, function (err, data) {
    if (err) {
      console.log(err)
      return resp.render('register')
    }
    else {
    passport.authenticate('local')(req,resp, function (){
      resp.redirect('/secret')
    })
  }
  })
})
app.post('/login', passport.authenticate('local', {
  successRedirect: '/secret',
  failureRedirect: '/'
}),function(req,resp){
})
app.get('/logout', function(req,resp){
  req.logout()
  resp.redirect('/')
})

app.get('*',function (req,resp) {
  resp.send('404 page')
})
app.listen(1234,function(){
  console.log('THE SERVER IS RUNNING IN 1234');
})
