const mongoose = require("mongoose")

function connectToBD(){
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to DB");
        
    })
    .catch(err => {
        console.log("error conncting to db", err);
        
    })
}

module.exports =  connectToBD