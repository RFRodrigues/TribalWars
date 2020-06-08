var firebase = require('firebase');
var express = require('express');
var app = express();

var config = {
  apiKey: "AIzaSyBbGn-CM2XXJAmhkTERlsGDRyYryij9D4g",
  authDomain: "tribalwars-15493.firebaseapp.com",
  databaseURL: "https://tribalwars-15493.firebaseio.com",
  projectId: "tribalwars-15493",
  storageBucket: "tribalwars-15493.appspot.com",
  messagingSenderId: "1009323283348"
};
firebase.initializeApp(config);

app.get('/api/', (req, res) => {
  console.log("hey")
  var db = firebase.database().ref('/Users');
  db.once('value', (snapshot) => {
    var users = snapshot.val();
    res.send(users);
  });
  
});

app.listen(5000);
console.log('API is running');




