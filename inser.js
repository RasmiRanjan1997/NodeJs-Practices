const dbCollection = require('../NodePractices/mongoConfig');

// insert the data in mongodb using the node;
const insert = async () =>{
    const db = await dbCollection();
    const result = await db.insertMany(
        [
            {
           name: 'node 5',
           brand: 'vivo' ,
           price: 23900,
           category: 'mobile'
        }, 
        {
            name: 'node 53',
            brand: 'Samsung' ,
            price: 73900,
            category: 'mobile'
         },
         {
            name: 'node 85',
            brand: 'Nokia' ,
            price: 93900,
            category: 'mobile'
         },
    ]
    );
    if(result.acknowledged){
        
        console.log("data inserted");
    }
}
insert()