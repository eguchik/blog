var express = require('express');
var router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User1 = {
  name: "ike",
  password: "sakuramusub1"
};


passport.use(new LocalStrategy(
  (username, password, done) => {

    if(username !== User1.name){
      // Error
      return done(null, false);
    } else if(password !== User1.password) {
      // Error
      return done(null, false);
    } else {
      // Success and return user information.
      return done(null, { username: username, password: password});
    }
  }
));

passport.serializeUser((user, done) => {
  console.log('Serialize ...');
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('Deserialize ...');
  done(null, user);
});

router.use(passport.initialize());
router.use(passport.session());

router.get('/', (req, res) => {
  console.log(req.session);
  res.render('login', {user: req.user});
});

router.post('/',
  passport.authenticate('local',
    {
      failureRedirect : 'login/failure',
      successRedirect : 'login/success'
    }
  )
);

router.get('/failure', (req, res) => {
  console.log(req.session);
  res.send('Failure');
});

router.get('/success', (req, res) => {
  console.log(req.session);
  res.redirect('/')
});

router.post('/logout', (req, res) => {
  req.session.passport.user = undefined;
  res.redirect('/white');
});



module.exports = router;