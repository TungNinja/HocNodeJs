var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){

    app.get('/api/person/:id', function(req, res){
        // get data from database
        res.json({firstName: 'Thanh', lastName: 'Tung'});
    });
    
    app.post('/api/personjson', jsonParser, function(req, res){
        // save to the database
    });
    
    app.delete('/api/personjson/:id', function(req, res){
        // delete from the database
    });

}
