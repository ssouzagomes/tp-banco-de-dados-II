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

exports.getListing = async function(req,res){
  const id = req.params.id;
  console.log(id); // should display 123

  try {
    const listing = await Listing.findById(id).populate('vehicle');
    return res.send(listing);

  } catch (err) {
    return res.status(400).send({ error: 'Id not found ' + err });
  }

}


exports.getListingsOnRequestedRange = async function(req, res){
  const { startDate } = req.body;
  const { endDate } = req.body;
  const { fuel } = req.body;
  const { transmission } = req.body;
  const { priceStart } = req.body
  const { priceEnd } = req.body

  console.log(startDate, endDate)

  if(!endDate && endDate){
    return res.status(400).send({ error: 'Data de inico e fim nao especificada'});
  }

  if(priceStart && priceEnd && transmission && fuel){ //Se todos os campos tem valor
    try {  
      const listings = await Listing.find().where('startDate').gte(startDate).
      where('endDate').lte(endDate).where('price').gte(priceStart).lte(priceEnd).populate('vehicle').lean();

      return res.send(listings.filter(
        function(x){
          return x.vehicle.transmission == transmission && x.vehicle.fuel == fuel
        }).find(o => o.id === 1)
        );        
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
  }else if(priceStart && priceEnd && transmission){
    try {
      const listings = await Listing.find().where('startDate').gte(startDate).
      where('endDate').lte(endDate).where('price').gte(priceStart).lte(priceEnd).populate('vehicle').lean();

      return res.send(listings.filter(
        function(x){
          return x.vehicle.transmission == transmission
        }).find(o => o.id === 1)
        );        
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
  }else if(priceStart && priceEnd && fuel){
    try {
      const listings = await Listing.find().where('startDate').gte(startDate).
      where('endDate').lte(endDate).where('price').gte(priceStart).lte(priceEnd).populate('vehicle').lean();
      
      return res.send(listings.filter(
        function(x){
          return x.vehicle.fuel == fuel
        }).find(o => o.id === 1)
        );       
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
  }else if(transmission && fuel){
    try {
      const listings = await Listing.find().where('startDate').gte(startDate).
      where('endDate').lte(endDate).populate('vehicle').lean();

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
      const listings = await Listing.find().where('startDate').gte(startDate).
      where('endDate').lte(endDate).populate('vehicle').lean();

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
      const listings = await Listing.find().where('startDate').gte(startDate).
      where('endDate').lte(endDate).populate('vehicle').lean();
      
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
      const listings = await Listing.find().where('startDate').gte(startDate).
      where('endDate').lte(endDate).where('price').gte(priceStart).lte(priceEnd).populate('vehicle').lean();

      return res.send(listings).find(o => o.id === 1);      
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
  }else{
    try {
      const listings = await Listing.find().where('startDate').gte(startDate).
      where('endDate').lte(endDate).populate('vehicle');
      return res.send(listings);        
    } catch (err) {
      return res.status(400).send({ error: '' + err });
  }
}
}

