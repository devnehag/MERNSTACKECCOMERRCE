const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


//Async Await method
const connectDatabase = async()=>{
    console.log(process.env.DB_URI);
    try{
        const conn = await mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex: true });
        console.log(`mongodb server is running : ${conn.connection.host}`);
    }
    catch(err){
        console.log(err);
    }
};
module.exports = connectDatabase;