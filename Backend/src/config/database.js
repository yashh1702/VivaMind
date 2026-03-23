const mongoose = require("mongoose")

const connectToDb = async function(req,res){
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected : ${conn.connection.host} `)
    } catch (error) {
         console.error(`MongoDB Connection Error: ${error.message}`);
         process.exit(1); 
    }
}

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected!');
});

module.exports = connectToDb