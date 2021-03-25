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
    const listings = await Listing.find({}).populate('vehicle');

    return res.send(listings);
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

exports.getListingsOnRequestedRange = async function(req, res){
  const { scheduleStartDate } = req.body;
  const { scheduleEndDate } = req.body;
  const { fuel } = req.body;
  const { transmission } = req.body;
  const { priceStart } = req.body
  const { priceEnd } = req.body
  if(!scheduleEndDate && scheduleEndDate){
    return res.status(400).send({ error: 'Data de inico e fim nao especificada'});
  }

  if(priceStart && priceEnd && transmission && fuel){ //Se todos os campos tem valor
    try {  
      const listings = await Listing.find().where('startDate').gte(scheduleStartDate).
      where('endDate').lte(scheduleEndDate).where('price').gte(priceStart).lte(priceEnd).populate('vehicle').lean();

      return res.send(listings.filter(
        function(x){
          return x.vehicle.transmission == transmission && x.vehicle.fuel == fuel
        })
        );        
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
  }else if(priceStart && priceEnd && transmission){
    try {
      const listings = await Listing.find().where('startDate').gte(scheduleStartDate).
      where('endDate').lte(scheduleEndDate).where('price').gte(priceStart).lte(priceEnd).populate('vehicle').lean();

      return res.send(listings.filter(
        function(x){
          return x.vehicle.transmission == transmission
        })
        );        
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
  }else if(priceStart && priceEnd && fuel){
    try {
      const listings = await Listing.find().where('startDate').gte(scheduleStartDate).
      where('endDate').lte(scheduleEndDate).where('price').gte(priceStart).lte(priceEnd).populate('vehicle').lean();

      return res.send(listings.filter(
        function(x){
          return x.vehicle.fuel == fuel
        })
        );       
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
  }else if(transmission && fuel){
    try {
      const listings = await Listing.find().where('startDate').gte(scheduleStartDate).
      where('endDate').lte(scheduleEndDate).populate('vehicle').lean();

      return res.send(listings.filter(
        function(x){
          return x.vehicle.transmission == transmission && x.vehicle.fuel == fuel
        })
        );        
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
  }else if(fuel){
    try {
      const listings = await Listing.find().where('startDate').gte(scheduleStartDate).
      where('endDate').lte(scheduleEndDate).populate('vehicle').lean();

      return res.send(listings.filter(
        function(x){
          return x.vehicle.fuel == fuel
        })
        );       
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
  }else if(transmission){
    try {
      const listings = await Listing.find().where('startDate').gte(scheduleStartDate).
      where('endDate').lte(scheduleEndDate).populate('vehicle').lean();
      
      return res.send(listings.filter(
        function(x){
          return x.vehicle.transmission == transmission
        })
        );        
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
  }else if(priceStart && priceEnd){
    try {
      const listings = await Listing.find().where('startDate').gte(scheduleStartDate).
      where('endDate').lte(scheduleEndDate).where('price').gte(priceStart).lte(priceEnd).populate('vehicle').lean();

      return res.send(listings);      
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
  }else{
    try {
      const listings = await Listing.find().where('startDate').gte(scheduleStartDate).
      where('endDate').lte(scheduleEndDate).populate('vehicle');
      return res.send({listings});        
    } catch (err) {
      return res.status(400).send({ error: '' + err });
  }
}
}

