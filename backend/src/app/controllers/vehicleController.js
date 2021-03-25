const express = require('express');
const Vehicle = require('../models/vehicle');

exports.createVehicle= async function(req,res) {
    const { model } = req.body;
  
    try {
      if (await Vehicle.findOne({ model }))
        return res.status(400).send({ error: 'Model already exists' });
  
      const vehicle = await Vehicle.create(req.body);
  
      return res.send({
        vehicle,
        token: { id: vehicle.id },
      });
    } catch (err) {
      return res.status(400).send({ error: '' + err });
    }
};

exports.getVehicles = async function(req,res){
  const vehicles = await Vehicle.find({});

  return res.send(vehicles);

};

exports.getVehicleByModel = async function(req, res){
    const { model } = req.body

    const vehicle = await Vehicle.find().where('model').equals(model);

    return res.send(vehicle);
}

