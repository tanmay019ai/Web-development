// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach(function(val) {
//     console.log(val);
// });

// async function getUser() {
//     try {
//         const blob = await fetch('https://randomuser.me/api/');
//         const res = await blob.json();
//         console.log(res.results[0].name.first);
//     } catch (err) {
//         console.error('Fetch error:', err);
//     }
// }

// getUser();

const fs = require('fs');
fs.writeFile('test.txt', 'Hello World!', function(err) {
    if (err) {
        console.error('Error writing file:');
    } else {
        console.log('File written successfully!');
    }
});

fs.appendFile('test.txt', 'i am good!', function(err) {
    if (err) {
        console.error('Error writing file:');
    } else {
        console.log('File written successfully!');
    }
});
const data = fs.readFileSync('test.txt', 'utf8');
console.log('File content:', data);
//writeFile, appendFile, readFile, unlink, copyfile


const http= require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World!\n');
});
server.listen(3000);

//http server listening on port 3000
console.log('Server is running on http://localhost:3000');
// To test the server, you can open a web browser and navigate to http://localhost:3000
// or use a tool like curl or Postman to send a request to the server.
// The server will respond with "Hello World!" when accessed.
// To stop the server, you can press Ctrl+C in the terminal where the server is running.
