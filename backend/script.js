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
//NPM understanding
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


//installing and unistalling basic and advamced
//scripts-understanding scripts path and custom scripts

//node js se download-module
//npm se download -package
//node js is runtime environment that allows developers to run JavaScript code on the server side. It is built on Chrome's V8 JavaScript engine and provides an event-driven, non-blocking I/O model, making it suitable for building scalable network applications. Node.js enables developers to create server-side applications using JavaScript, which was traditionally a client-side language, thus allowing for full-stack development using a single programming language.
//node pack manager(npm) is a package manager for JavaScript and is the default package manager for the JavaScript runtime environment Node.js. It allows developers to install, share, and manage dependencies in their projects. npm provides a vast repository of open-source packages that can be easily integrated into applications, facilitating code reuse and collaboration within the developer community.
//npm is used to manage packages and dependencies in Node.js applications, making it easier to install

//nodejs-runtime environment that allows developers to run JavaScript code on the server side. It is built on Chrome's V8 JavaScript engine and provides an event-driven, non-blocking I/O model, making it suitable for building scalable network applications. Node.js enables developers to create server-side applications using JavaScript, which was traditionally a client-side language, thus allowing for full-stack development using a single programming language.

//
//Node.js lets you use JavaScript to build backend/server-side applications.
//concurently running multiple instances of a Node.js application, which can improve performance and resource utilization. It allows developers to easily scale their applications by running multiple processes on multi-core systems, ensuring that each instance can handle requests independently. This is particularly useful for applications that require high availability and responsiveness, as it helps distribute the load across different processes, enhancing overall application performance.
//concurrency-react+nodejs
//dev dependencies are packages that are only needed during the development phase of a project, such as testing frameworks, build tools, and linters. They are not required for the application to run in production. By marking packages as dev dependencies, developers can keep their production environment clean and lightweight, ensuring that only essential packages are included in the final build. This distinction helps in managing project dependencies effectively and optimizing the deployment process.


// npm init -y
//express js is a npm package
//express js is framework for building web applications in Node.js. It provides a robust set of features for web and mobile applications, allowing developers to create APIs and web servers quickly and efficiently. Express simplifies the process of handling HTTP requests, routing, middleware integration, and serving static files, making it a popular choice for building server-side applications in the Node.js ecosystem. Its minimalistic design and flexibility enable developers to customize their applications according to their specific needs.
//express js is a framework for building web applications in Node.js. It provides a robust set
//MERN