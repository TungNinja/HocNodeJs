var express = require('express');
app = express();
var mysql = require('mysql');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 5000;


app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', function(req, res, next){
    console.log('url: '+req.url);
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodejs"
    });

    var sql = 'SELECT NODE_PEOPLE.ID , FIRST_NAME, LAST_NAME, ADDRESS FROM NODE_PEOPLE INNER JOIN NODE_PERSONADDRESS ON NODE_PEOPLE.ID = NODE_PERSONADDRESS.PERSON_ID INNER JOIN NODE_ADDRESS ON NODE_PERSONADDRESS.ADDRESS_ID = NODE_ADDRESS.ID';

    con.query(sql, function(err, rows){
        if(err) throw err;
        console.log(rows[0].FIRST_NAME);
    });

    next();
});

// Call html controller
htmlController(app);

// Call api controller
apiController(app);

app.listen(port); 