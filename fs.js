var http = require('http');
var fs = require('fs');

//fs readfile
http.createServer(function(req, res) {
    fs.readFile('fs.html', function(err, data) {
        res.writeHead(200, {'content-type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(6969);

//fs create and update file
//append method
fs.appendFile('fs.txt', 'it is a test', function(err) {
    if(err) throw err;
    console.log('done');
});

//open method(create only)
fs.open('fs.txt', 'w', function(err, file) {
    if(err) throw err;
    console.log('done!');
});

//writeFile method
fs.writeFile('fs.txt', 'it is a test!', function(err) {
    if(err) throw err;
    console.log('file has been wrote...');
});

//fs delete file
fs.unlink('fs.txt', function(err) {
    if(err) throw err;
    console.log('file deleted...');
});

//fs rename file
fs.rename('fs.txt', 'filesystem.txt', function(err) {
    if(err) throw err;
    console.log('file renamed...');
});