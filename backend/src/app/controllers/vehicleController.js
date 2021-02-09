const express = require('express');
const Vehicle = require('../models/vehicle');

async function getVehicles(req,res){
    const vehicles = Vehicle.find({});

    return res.send(vehicles);
}

async function getVehicleByModel(req, res){
    const { model } = req.body

    const vehicle = Vehicle.find().where('model').equals(model);

    return res.send(vehicle);
}

