const { v4: uuidv4 } = require('uuid');

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'John', uuid: uuidv4()},
    { name: 'Peter', uuid: uuidv4()},
    { name: 'Amy', uuid: uuidv4()},
    { name: 'Hannah', uuid: uuidv4()},
    { name: 'Michael', uuid: uuidv4()},
  ];
  dbo.collection("articles").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});