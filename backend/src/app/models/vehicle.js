const mongoose = require('../../database');

const VehicleSchema = new mongoose.Schema({
  model: {
    type: String,
    require: true,
  },
  manufacturer: {
    type: String,
    require: true,
  },
  top_speed: {
    type: Number,
    require: false,
  },  
  acceleration: {
    type: Number,
    require: false,
  },
  horsepower: {
    type: String,
    require: false,
  },
  fuel: {
    type: String,
    require: false,
  },
  transmission: {
    type: String,
    require: false,
  },
  seats: {
    type: Number,
    require: false,
  },
  imageUrl: {
    type: String,
    require: false,
  }
});

const Vehicle = mongoose.model('Vehicle', VehicleSchema);

module.exports = Vehicle;
