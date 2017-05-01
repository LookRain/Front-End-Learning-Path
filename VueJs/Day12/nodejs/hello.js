var http = require('http');
var dt = require('./datetime');
var fs = require('fs');

http.createServer((req, res) => {
	fs.readFile('service.html', (err, data) => {

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	res.end();
	});

}).listen(8080);

fs.appendFile('write-file-here.txt', 'this is the content, hi~', err => {
	if (err) throw err;
	console.log('saved!');
});

fs.writeFile('write-file-here.txt', 'something else to be written', err => {
	if (err) throw err;
	console.log('replaced!')
});

fs.writeFile('written.txt', 'something lk;asdjfl 32423', err => {
	if (err) throw err;
	console.log('written!')
});

fs.unlink('written.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});