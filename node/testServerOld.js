var http = require('http');
var url = require('url');
var dt = require('./testModule');
var articlesDT = require('./articles/articlesLimit');
const express = require('express');
const app = express();

app.get('/articles', function (req, res) {
    // res.send("111")
    res.send(articlesDT.articlesLimit())
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
