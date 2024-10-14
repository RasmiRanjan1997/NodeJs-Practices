const dbCollection = require('../NodePractices/mongoConfig');

const updateData = async () =>{
    let data = await dbCollection();
    let result = await data.updateOne(
        {name: 'm 40'}, {$set: {name: 'm 50'}}
    )
    console.log(result);
}
updateData();