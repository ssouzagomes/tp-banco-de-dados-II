const express = require('express');
const Schedule = require('../models/schedule');
const Listing = require('../models/listing')
const authController = require('../controllers/authController');

async function createSchedule(req, res){
    const selectedListing = req.body;
    const currentUser = authController.loggedUser;
    
    try{
        if(!selectedListing || !currentUser)
        return res.status(400).send({ error: 'Something went wrong...' });

        if( await Schedule.findOne({ user } ))
            return res.status(400).send({ error: 'User already scheduled' });
        
        const schedule = await Schedule.create(selectedListing, currentUser);
        return res.send(schedule);
        
    }catch (err) {
        return res.status(400).send({ error: '' + err });
      }
}

async function showSchedules(req, res){
    const currentUser = authController.loggedUser;
    
    try{
        if(!currentUser)
            return res.status(400).send({ error: 'Something went wrong...' });
        
        const schedules = await Schedule.findOne({ user });

        if(!schedules)
            return res.status(400).send({ error: 'No schedules' });
        
        return res.send(schedules);
        
    }catch (err) {
        return res.status(400).send({ error: '' + err });
      }
}
