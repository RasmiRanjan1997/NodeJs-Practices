const dbCollection = require('./mongoConfig');


const deleteData =async ()=>{
    const data =await dbCollection();
    const result = await data.deleteMany(
        {name: 'node 5'}
    )
    console.log(result);
}

deleteData();