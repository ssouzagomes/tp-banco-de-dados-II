const express = require('express');
const Schedule = require('../models/schedule');
const Listing = require('../models/listing');
const User = require("../models/user");

exports.createSchedule = async function(req, res){
    var { listing } = req.body;
    var { user } = req.body;
    const { startDate } = req.body;
    const { endDate } = req.body;
    
    try{
        if(!listing || !user)
        return res.status(400).send({ error: 'No listing or user...' });

        if( await Schedule.findOne({ listing, user } )) 
            return res.status(400).send({ error: 'Schedule already exists' });
        
        const schedule = await Schedule.create(req.body);
        return res.send(schedule);
        
    }catch (err) {
        return res.status(400).send({ error: '' + err });
      }
}

exports.getSchedules = async function(req, res){
    const { user } = req.body;
    try{
        if(!user)
            return res.status(400).send({ error: 'Something went wrong...' });
        
        const schedules = await Schedule.find({user}).populate('user').populate({path: 'listing' , populate: {path: 'vehicle'}});

        if(!schedules)
            return res.status(400).send({ error: 'No schedules' });
        
        return res.send(schedules);
        
    }catch (err) {
        return res.status(400).send({ error: '' + err });
      }
}
