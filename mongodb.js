const dbCollection = require('../../NodePractices/mongoConfig')

// one way :

// dbCollection().then((data) =>{
//     data.find().toArray().then((res) =>{
//         console.log(res);
//     })
// })

// another way;

const main = async () =>{
    let data = await dbCollection();
    data = await data.find().toArray();
    console.log(data);
}

main()