const dbConnect = require('./mongodb')

const update = async()=>{
    let data = await dbConnect()
    data = await data.deleteMany({name:"Note 5"})
    console.log(data);
}
update()
