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

//Enable CORS for all HTTP methods
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/articles', function (req, res) {
    console.log(1)
    dbo.collection("articles").find().limit(20).toArray(function (err, result) {
        if (err) throw err;
        res.send({ data: result })
        // console.log(result);
        // db.close();
        // return result;
    });

    // res.send(articlesDT.articlesLimit())
});

app.get('/article/:id', function (req, res) {
    dbo.collection("articles").find({ uuid: req.params.id }).toArray(function (err, result) {
        console.log(result);
        if (err) throw err;
        res.send({ data: result })
    });
});

app.get('/addArticle/:id/:caption', function (req, res) {
    var newArticle = {
        uuid: req.params.id,
        caption: req.params.caption,
    };
    dbo.collection("articles").insertOne(newArticle, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});


app.listen(8080);