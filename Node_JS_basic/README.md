Here's an example of how you can achieve all of the above tasks:

    // Importing required modules
    import fs from 'fs';
    import http from 'http';
    import { argv, env } from 'process';
    import express from 'express';
    import babel from 'babel-node';
    import nodemon from 'nodemon';

    // Reading command line arguments and environment variables
    console.log('Command line arguments:', argv);
    console.log('Environment variables:', env);

    // Using specific Node.js module to read files
    fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
    });

    // Creating a small HTTP server using Node.js
    const nodeServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node.js HTTP server!\n');
    });

    nodeServer.listen(3000, () => {
    console.log('Node.js HTTP server is running on port 3000');
    });

    // Creating a small HTTP server using Express.js
    const app = express();

    app.get('/', (req, res) => {
    res.send('Hello from Express.js HTTP server!');
    });

    app.listen(3001, () => {
    console.log('Express.js HTTP server is running on port 3001');
    });

    // Creating advanced routes with Express.js
    app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(`User ID: ${req.params.userId}, Book ID: ${req.params.bookId}`);
    });

    // Using ES6 with Node.js using Babel-node
    // Make sure to have babel configured and required presets installed
    // Example .babelrc:
    // {
    //   "presets": ["@babel/preset-env"]
    // }
    // Then run: babel-node yourScript.js

    // Using Nodemon to develop faster
    nodemon({
    script: 'yourScript.js',
    ext: 'js json'
    });

Make sure you have the required modules installed (npm install express nodemon babel-cli @babel/preset-env). You'll also need to configure Babel for ES6 support and Nodemon for automatic server restarts during development.
