const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:admin@cluster0.tauho.mongodb.net/rentx?retryWrites=true&w=majority";
try {
    mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log("Server started at port 3333!"));    
    } catch (error) { 
    console.log("Could not connect!");    
}

mongoose.Promise = global.Promise;

module.exports = mongoose;
