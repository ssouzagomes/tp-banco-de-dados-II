const express = require('express');
const Listing = require('../models/listing')

async function getListings(req,res){
    const listings = Listing.find({});

    return res.send(listings);
}

async function getListingsOnRequestedRange(req, res){
    const { scheduleStartDate } = req.body.startDate;
    const { scheduleEndDate } = req.body.endDate;

    const listings = Listing.find().where('startDate').gte(scheduleStartDate).
    where('endDate').lte(scheduleEndDate);

    return res.send(listings);
}

