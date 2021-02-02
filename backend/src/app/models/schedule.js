const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const ScheduleSchema = new mongoose.Schema({
  endDate: {
    type: Date,
    require: true,
  },
  startDate: {
    type: Date,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  vehicle: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    require: true,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);

module.exports = Schedule;
