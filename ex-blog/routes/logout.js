var express = require('express');
var router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

/*
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
    req.logout();
  res.redirect('/login');
});


*/
module.exports = router;