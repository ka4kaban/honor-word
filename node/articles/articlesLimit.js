var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const limit = 20;

exports.articlesLimit = function () {
  return MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("articles").find().limit(limit).toArray(function (err, result) {
      if (err) throw err;
      db.close();
      return result;
      // console.log(result);
      
    });
  });
};
