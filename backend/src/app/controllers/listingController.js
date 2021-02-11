const express = require('express');
const Listing = require('../models/listing');

exports.createListing = async function(req,res){
    const { creator } = req.body;
    const { vehicle } = req.body;
  
    try {
      if (await Listing.findOne({ creator, vehicle }))
        return res.status(400).send({ error: 'Listing already exists' });
  
      const listing = await Listing.create(req.body);
  
      return res.send({
        listing,
        token: { id: listing.id },
      });
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
};

exports.getListings = async function(req,res){
    const listings = await Listing.find({});

    return res.send({listings});
}

exports.getListingsOnRequestedRange = async function(req, res){
    const { scheduleStartDate } = req.body;
    const { scheduleEndDate } = req.body;

    try {
        const listings = await Listing.find().where('startDate').gte(scheduleStartDate).
        where('endDate').lte(scheduleEndDate);
        return res.send({listings});        
    } catch (err) {
        return res.status(400).send({ error: '' + err });
    }

}

