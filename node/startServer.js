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

app.get('/articles', function (req, res) {
    dbo.collection("articles").find().limit(20).toArray(function (err, result) {
        if (err) throw err;
        res.send({ data: result })
        // db.close();
        // return result;
    });

    // res.send(articlesDT.articlesLimit())
});

app.get('/article/:id', function (req, res) {
    dbo.collection("articles").find({ uuid: req.params.id }).toArray(function (err, result) {
        if (err) throw err;
        res.send({ data: result })
    });
});

// app.get('/addArticle/:id/:caption', function (req, res) {
//     console.log('/addArticle/:id/:caption')
// });
app.post('/addArticle', function (req, res) {
    console.log('/addArticle' + req.body + '____' + JSON.stringify(req.body) + '____id' + req.body.id)
    
    

      //   {
  //     uuid: uuidv4(),
  //     date:"2020-06-23T01:23:40.000Z",
  //     caption: '«Такого минимума у нас никогда не было». Элла Памфилова — о жалобах на принуждение к голосованию по Конституции',
  //     content: `В Центризбирком РФ поступили десятки жалоб на использование административного ресурса и принуждение к участию в голосовании по поправкам к Конституции. Об этом заявила глава ЦИК Элла Памфилова.

  //     «Обычно, когда у нас выборы проходят, мы тысячами измеряем обращения по регионам. У нас сейчас из всех жалоб по этому поводу, которые связаны с якобы применением административного ресурса, на всю страну немногим более 50 обращений. Такого минимума у нас никогда не было», — рассказала она в интервью «России 24».
      
  //     Ранее 23 июня на заседании Центризбиркома Памфилова сообщала, что комиссия получила 70 соответствующих жалоб, в том числе 23 в Москве и 27 в Петербурге. Из всех обращений, добавила глава ЦИК, только 52 содержат корректные указания на работодателя, допустившего, по мнению заявителей, нарушения. «По этим обращениям берем ситуацию под жесткий контроль. Надеюсь, что меры определенные по ним будут приняты, а люди проголосуют спокойно, как они считают, и ничего им за это не будет», — цитирует ТАСС слова Памфиловой.
      
  //     17 июня телеканал «Дождь» рассказал, что москвичам за деньги предлагают зарегистрироваться на сайте mos.ru и проголосовать за поправки к Конституции, используя подставные SIM-карты. Провластные СМИ назвали расследование канала «вбросом», в Кремле его посчитали «абсолютной чушью». Московская полиция, проведя проверку по материалам «Дождя», заявила, что установила подозреваемых в создании ложных аккаунтов для голосования.
      
  //     Агентство Reuters в свою очередь сообщало, что администрация президента РФ разработала документ «Мобилизация в корпорациях 2020», в которых просит крупные частные компании прорекламировать среди своих сотрудников голосование по поправкам в Конституцию 1 июля.`,
  //   },
//   const article ={}

  dbo.collection("articles").insertOne({
    uuid:req.body.id,
    creationDate: new Date(),
    caption: req.body.caption,
    status: req.body.status,
  }, function(err, res) {
    if (err) throw err;
    console.log("articles inserted");
    db.close();
  });

    // dbo.collection("articles").find({ uuid: req.params.id }).toArray(function (err, result) {
    //     if (err) throw err;
    //     res.send({ data: result })
    // });


    res.send('POST request to homepage')

});

// app.get('/addArticle/:id/:caption', function (req, res) {
//     var newArticle = {
//         uuid: req.params.id,
//         caption: req.params.caption,
//     };
//     dbo.collection("articles").insertOne(newArticle, function (err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// });


app.listen(8080);