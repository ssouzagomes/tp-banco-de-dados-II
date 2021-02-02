const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const ListingSchema = new mongoose.Schema({
  price: {
    type: Number,
    require: true,
  },
  vehicle: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
  }],
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing;
