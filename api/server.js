var firebase = require("firebase");
var express = require("express");
var bodyParser = require('body-parser');
var app = express();

var firebaseConfig = {
  apiKey: "AIzaSyBbGn-CM2XXJAmhkTERlsGDRyYryij9D4g",
  authDomain: "tribalwars-15493.firebaseapp.com",
  databaseURL: "https://tribalwars-15493.firebaseio.com",
  projectId: "tribalwars-15493",
  storageBucket: "tribalwars-15493.appspot.com",
  messagingSenderId: "1009323283348",
  appId: "1:1009323283348:web:465fb1bed784908d33f581",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://tribalwarsthegame.now.sh/"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  require('body-parser').urlencoded({ extended: false });
  next();
});

app.post("/api/usercreate/", (req, res) => {

  firebase
    .database()
    .ref("/users")
    .push({ 
      userinfo: { username: req.body.nickname, email: req.body.email, password: req.body.password },
      resources: { wood: 0, iron: 0, clay: 0 },
      buildings: { mainBuilding: 0, barrack: 0, warehouse: 0 }
    });

  res.sendStatus(200);
});

//get all users info
app.get("/api/usersinfo/", (req, res) => {
  var db = firebase.database().ref("/users");
  db.once("value", (snapshot) => {
    var users = snapshot.val();
    console.log(users)
    res.send(users);
  });
});

app.listen(5000);
console.log("API is running");
