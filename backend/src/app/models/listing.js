const mongoose = require('../../database');
const User = require('./user');

const ListingSchema = new mongoose.Schema({
  price: {
    type: Number,
    require: true,
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing;
