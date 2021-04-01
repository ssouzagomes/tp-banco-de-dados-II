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

  if(!startDate && endDate){
    return res.status(400).send({ error: 'Data de inico e fim nao especificada'});
  }
  console.log(startDate,endDate,fuel,transmission,priceStart,priceEnd);
  if(priceStart >=0 && priceEnd >= 0 && transmission && fuel){ //Se todos os campos tem valor
    console.log("todos tem valor");
    try {  
      const listings = await Listing.find().where('startDate').gte(startDate).
      where('endDate').lte(endDate).where('price').gte(priceStart).lte(priceEnd).populate('vehicle').lean();

      return res.send(listings.filter(
        function(x){
          return x.vehicle.transmission == transmission && x.vehicle.fuel == fuel
        })
        );        
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
  }else if(priceStart >= 0 && priceEnd >= 0 && transmission){
    console.log("preco e transmissao");
    try {
      const listings = await Listing.find().where('startDate').gte(startDate).
      where('endDate').lte(endDate).where('price').gte(priceStart).lte(priceEnd).populate('vehicle').lean();

      return res.send(listings.filter(
        function(x){
          return x.vehicle.transmission == transmission
        })
        );        
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
  }else if(priceStart >= 0 && priceEnd >= 0 && fuel){
    console.log("preco e combustivel");
    try {
      const listings = await Listing.find().where('startDate').gte(startDate).
      where('endDate').lte(endDate).where('price').gte(priceStart).lte(priceEnd).populate('vehicle').lean();
      
      return res.send(listings.filter(
        function(x){
          return x.vehicle.fuel == fuel
        })
        );       
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
  }else if(transmission && fuel){
    console.log("transmissao e combustivel");
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
    console.log("combustivel");
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
    console.log("transmissao");
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
  }else if(priceStart >= 0 && priceEnd >= 0){
    console.log("preço");
    try {
      const listings = await Listing.find().where('startDate').gte(startDate).
      where('endDate').lte(endDate).where('price').gte(priceStart).lte(priceEnd).populate('vehicle').lean();

      return res.send(listings)      
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
  }else{
    console.log("só data");
    try {
      const listings = await Listing.find().where('startDate').gte(startDate).
      where('endDate').lte(endDate).populate('vehicle');
      return res.send(listings);        
    } catch (err) {
      return res.status(400).send({ error: '' + err });
  }
}
}
