var express = require('express'),
app= express(),
engines = require('consolidate'),
MongoClient = require('mongodb').MongoClient,
assert = require('assert');
bodyParser = require('body-parser');



var app = express();

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup





// catch 404 and forward to error handler

MongoClient.connect('mongodb://localhost:27017/blog', function(err, db){

  assert.equal(null, err);
      console.log("Successfully connected to MongoDB.");


app.get('/', function(req, res){
res.render('index.html' );

});

app.get('/cat', function(req, res){
db.collection('blog').aggregate([{$group : {_id : "$category", total : {$sum : 1}}}]).toArray(function(err, docs) {
            if (!err) {

                console.log(docs);

                res.json(docs);


}
else{
  console.log(err);
}
})
                 });

app.get('/name', function(req, res){
db.collection('blog').find().sort({'date': -1}).toArray(function(err, docs) {
            if (!err) {

                console.log(docs);

                res.json(docs);


}
else{
  console.log(err);
}
})
});




   app.post('/calls', function(req, res) {
       console.log("Post is "+ req.data.value)
       response={
         "_id": req.data.value,
         "post": req.data.comment,
          "category": req.data.category,
         "date": new Date()


       }
db.collection("blog").insert(response, {w:1}, function(err, result) {});

   });


   app.post('/delete', function(req, res) {
       console.log("Post _id is gone");
       db.collection('blog').remove( {"_id": req.body._id},{justOne: true} );


   });

app.use(function(req, res){
  res.sendStatus(404);
});


var server = app.listen(3000, function() {
  var port=server.address().port;
  console.log('express server listening on port %s', port);
});

});

module.exports = app;
