const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const uri = "mongodb+srv://admin:admin@cluster0.tauho.mongodb.net/rentx?retryWrites=true&w=majority";
try {
    mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log("Database connected!"));    
    } catch (error) { 
    console.log("Could not connect!");    
}

mongoose.Promise = global.Promise;

module.exports = mongoose;
