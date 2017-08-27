var fs = require('fs');

var readable  = fs.createReadStream(__dirname + '/greet.txt',
{encoding: 'utf8', highWateMark: 32*1024});

var writeable = fs.createWriteStream(__dirname +'/greet1.txt');

readable.on('data', function(chunk){
    console.log(chunk);
    writeable.write(chunk);
});
