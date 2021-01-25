const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@cluster0-shard-00-02.tauho.mongodb.net:27017/test?authSource=admin&replicaSet=atlas-84758b-shard-0', { useMongoClient: true})
mongoose.Promise = global.Promise;

module.exports = mongoose;