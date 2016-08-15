var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
var rootPath = path.normalize(__dirname + '/../');

var myApiRouter = express.Router();
myApiRouter.route('/clinici')
    .get(function (req, res) {
        var nameArray;
        var thePath = rootPath + '/data/clinici';
        nameArray = (function (pathName) {
            var arrayOfFilenames = fs.readdirSync(pathName);
            for (var i = 0; i < arrayOfFilenames.length; i++){
                arrayOfFilenames[i] = arrayOfFilenames[i].substring(0, arrayOfFilenames[i].length - 5);
            }
            return arrayOfFilenames;
        })(thePath);
        res.json({filenames: nameArray});
    });
myApiRouter.route('/clinici/:id')
    .get(function (req, res) {
        var clinic = fs.readFileSync('data/clinici/' + req.params.id + '.json', 'utf8');
        // res.header('Content-Type', 'application/json');
        res.json(JSON.parse(clinic));
    });

myApiRouter.route('/invata')
    .get(function (req, res) {
        var nameArray;
        var thePath = rootPath + '/data/invata';
        nameArray = (function (pathName) {
            var arrayOfFilenames = fs.readdirSync(pathName);
            for (var i = 0; i < arrayOfFilenames.length; i++){
                arrayOfFilenames[i] = arrayOfFilenames[i].substring(0, arrayOfFilenames[i].length - 5);
            }
            return arrayOfFilenames;
        })(thePath);
        res.json({filenames: nameArray});
    });
myApiRouter.route('/invata/:id')
    .get(function (req, res) {
        var clinic = fs.readFileSync('data/invata/' + req.params.id + '.json', 'utf8');
        // res.header('Content-Type', 'application/json');
        res.json(JSON.parse(clinic));
    });
app.use('/api', myApiRouter);
app.use(express.static(rootPath + '/app'));

app.listen(8000);
console.log('Listening to port 8000...');
