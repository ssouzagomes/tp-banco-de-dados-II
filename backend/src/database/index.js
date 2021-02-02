const mongoose = require('mongoose');

const uri =
    "mongodb+srv://admin:admin@cluster0-shard-00-02.tauho.mongodb.net/rentx?retryWrites=true&w=majority";
try {
    mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log("connected"));    
    }catch (error) { 
    console.log("could not connect");    
}

mongoose.Promise = global.Promise;

module.exports = mongoose;
