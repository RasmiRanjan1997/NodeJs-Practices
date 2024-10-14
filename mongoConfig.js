// this is the one way to used for loaded the mongodb. & object destructuring, store the class and functions in the MongoClient.
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dataBase = 'e-comm';
const client = new MongoClient(url);


async function dbCollection(){
    let result = await client.connect();
    let db = result.db(dataBase);
    return db.collection('products');
}

module.exports = dbCollection;