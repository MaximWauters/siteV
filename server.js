var express = require('express');
var app = express();
const http = require('http');
const path = require('path');
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost/27017/vin';

const port = process.env.port || 3001;

app.use(express.static(__dirname + '/dist/'))

app.get('/*,', (req,res) => res.sendFile(path.join(__dirname)));

app.post('/vin', function(req, res, next) {
    var item = {
        email : req.body.email
    }

    mongo.connect(url, (err, db) => {
        assert.equal(null,err);
        db.collection('vin').insertOne(item, function(err,result){
            assert.equal(null,err);
            console.log('item inserted.');
            db.close();
        })
    })
});

const server = http.createServer(app);

server.listen(port,() => console.log('Running server...'));