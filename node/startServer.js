// var http = require('http');
var url = require('url');
// var dt = require('./testModule');
// var articlesDT = require('./articles/articlesLimit');
const express = require('express');
const app = express();
var db;
var dbo;
var MongoClient = require('mongodb').MongoClient;
var mongodbUrl = "mongodb://localhost:27017/";

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


MongoClient.connect(mongodbUrl, function (err, _db) {
  if (err) throw err;
  db = _db;
  dbo = _db.db("mydb");
});

//Enable CORS for all HTTP methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/articles/:limit', function (req, res) {
  try {
    let limit = req.params.limit && req.params.limit !== "" ? parseInt(req.params.limit) : 20;
    //TODO добавить фильтрацию по времени публикации
    dbo.collection("articles").find().limit(limit).toArray(function (err, result) {
      if (err) throw err;
      res.send({ data: result })
    });
  } catch (e) { //TODO:add logging
  }
});

app.get('/article/:id', function (req, res) {
  try {
    dbo.collection("articles").find({ uuid: req.params.id }).toArray(function (err, result) {
      if (err) throw err;
      res.send({ data: result })
    });
  } catch (e) { //TODO:add logging
  }
});

app.post('/addArticle', function (req, res) {
  try {
    dbo.collection("articles").insertOne({
      uuid: req.body.id,
      creationDate: new Date(),
      caption: req.body.caption,
      status: req.body.status,
    }, function (err, res) {
      if (err) throw err;
      db.close();
    });
    res.send('POST request to homepage')
  } catch (e) { //TODO:add logging
  }
});



app.post('/updateArticle', function (req, res) {
  // try {
  //   console.log('/updateArticle' + req.body + '____' + JSON.stringify(req.body) + '____id' + req.body.id)

  //   var newArticle = {
  //     $set: {
  //       updateDate: new Date(),
  //       caption: { $cond: { if: !!req.body.caption }, then: req.body.caption, else: '$caption' },
  //       status: { $cond: { if: !!req.body.status }, then: req.body.status, else: '$status' }
  //       // req.body.caption? req.body.caption : undefined,
  //       // status: req.body.status ? req.body.status : undefined,
  //     }
  //   };
  //   dbo.collection("articles").updateOne(
  //     { uuid: req.body.id },
  //     newArticle,
  //     function (err, res) {
  //       if (err) throw err;
  //       console.log("articles updated");
  //       db.close();
  //     });
  //   res.send('POST request to homepage')
  // } catch (e) { //TODO:add logging
  // }


  dbo.collection("articles").findOne({ uuid: req.body.id }).then(res => {
    // if (err) throw err;
    // console.log('res.caption' + res.caption);
    // console.log('/oldArticle' + res + '____' + JSON.stringify(res) /*+ '____id' + req.body.id*/)
    // db.close();
    const caption = req.body.caption || res.caption;
    const status = req.body.status || res.status;
    console.log('res.caption' + caption);
    console.log('res.status' + status);
    dbo.collection("articles").updateOne(
      { uuid: req.body.id },
      {
        $set: {
          updateDate: new Date(),
          caption: caption,
          status: status,
        }
      }).then((res) => {
        console.log(res.res)
      });
  });

});


// app.post('/updateArticle', function (req, res) {
//   // try {
//   console.log('/updateArticle' + req.body + '____' + JSON.stringify(req.body) + '____id' + req.body.id)

//   dbo.collection("articles").findOne({ uuid: req.body.id }, function (err, res) {
//     if (err) throw err;
//     // console.log('res.caption' + res.caption);
//     // console.log('/oldArticle' + res + '____' + JSON.stringify(res) /*+ '____id' + req.body.id*/)
//     // db.close();

//     dbo.collection("articles").updateOne({
//       uuid: req.body.id,
//       // creationDate: new Date(),
//       updateDate: new Date(),
//       caption: req.body.caption || res.caption,
//       status: req.body.status || res.status,
//     }, function (err, res) {
//       if (err) throw err;
//       console.log("articles updated");
//       db.close();
//     });
//   });



//   // res.send('POST request to homepage')
//   // } catch (e) { //TODO:add logging
//   // }
// });

app.listen(8080);