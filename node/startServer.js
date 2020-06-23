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


MongoClient.connect(mongodbUrl, function (err, _db) {
    if (err) throw err;
    db = _db;
    dbo = _db.db("mydb");
});



app.get('/articles', function (req, res) {
    dbo.collection("articles").find().limit(20).toArray(function (err, result) {
        if (err) throw err;
        res.send({result: result})
        // console.log(result);
        // db.close();
        // return result;
    });

    // res.send(articlesDT.articlesLimit())
});

app.listen(8080);

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     if (req.url === '/article') {

//     }
//     if (req.url === '/articles') {

//     }
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);
// }).listen(8080);

// http://localhost:8080/?year=2017&month=July
