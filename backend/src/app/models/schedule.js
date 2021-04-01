const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const ScheduleSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    require: true,
  },
  endDate: {
    type: Date,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing',
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);

module.exports = Schedule;
