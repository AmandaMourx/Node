const http = require('http');
const host = 'http://localhost';
const port = 3000;

//Queremos criar um servidor

http.createServer((req, res) =>{
    res.end('<h1>HELLO WORLD</h1>')
}).listen(port, () => console.log(`Server is running in ${host}:${port}`));
