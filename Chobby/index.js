const http = require('http');
const fs = require('fs');
http
	.createServer((req, res) => {
		res.writeHead(200, { 'Content-TYpe': 'text/html' });
		fs.readFile(__dirname + '/index.html', (err, data) => res.end(data, 'utf-8'));
	})
	.listen(3000);
