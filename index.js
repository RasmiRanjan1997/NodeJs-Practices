// const http = require('http');

// http.createServer((req, resp) =>{
//     resp.writeHead(200, {'Content-Type': 'application\json'});
//     resp.write(JSON.stringify({name: "Pupunu", email: "p@gmail.com"}));
//     resp.end();
// }).listen(4200);

// create a simple get Api Random data;

// const http = require('http');
// const data = require('./data')

// http.createServer((req, resp) =>{
//     resp.writeHead(200, {'Contnt-Type': 'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end()
// }).listen(4200);

// const fs = require('fs');
// const input = process.argv;

// fs.writeFileSync(input[2], input[3]); // create a file using the cli;

// file system in Node js

// if(input[2] == 'add'){ // condition wise add
//     fs.writeFileSync(input[3], input[4]); // input[3] for the file like file.txt & input[4] for the file text message;
// }else if(input[2] == 'remove'){ // condition wise remove;
//     fs.unlinkSync(input[3]) // use for the remove element;
// }else{
//     console.log("invalid input");
// }

// CREATE MULTIPLE FILE AT a TIME.


// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');

// for(let i=0; i<4; i++){
//     // fs.writeFileSync(dirPath + `/file ${i}.txt`, "create multipe files in single line")
//     fs.writeFileSync(dirPath + "/hello" + i + "txt.", "create multipe files in single line")
// }

// how to get files and print;

// fs.readdir(dirPath, (error, file) =>{
//     console.log(file);
//     file.forEach(element => {
//         console.log(element);
//     });
// })

// CRUD With file system;

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'CRUD');
// const filePath = `${dirPath}/omm.txt`;
// fs.writeFileSync(filePath, "add the ele file  in CRUD folder");

// read in side text in the file;

// fs.readFile(filePath,'utf8', (error, item) =>{
//     console.log(item);
// })


// update the file

// fs.appendFile(filePath, 'and file name is apple.txt', (err) =>{
//     if(!err){
//         console.log('file update');
//     }
// })

// rename the file name;

// fs.rename(filePath, `${dirPath}/maa.txt`, (err) =>{
//     if(!err){
//         console.log('file renamed');
//     }
// })

// delete the file;

// fs.unlinkSync(`${dirPath}/apple.txt`)

// Asynchronous basics;

// console.log('first');
// setTimeout(()=>{
//     console.log('second');
    
// }, 2000);
// console.log('Third');

// draw-back of asynchronous operation'

// let a = 10;
// let b = 10;

// Asynchronous data drawback;
// setTimeout(() => {
//     b=20
// }, 3000);

// console.log(a + b);

// handle the aSynchronous Data using the promise;

// let a = 10;
// let b = 0;
// let waitingData = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve(90);
//     }, 4000);
// });

// waitingData.then((res) =>{
//     console.log(a + res);
// })

// How node js works; (Call Back, Node API, CallBack Queue, Example, IQ)


const express = require('express');
const app = express();



