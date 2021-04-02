const express = require('express');
const auth = require('./authController');
const vehicle = require('./vehicleController');
const listing = require('./listingController');
const schedule = require('./scheduleController');

const router = express.Router();


router.get('/', (req, res) => {
  res.send("Não tem nada aqui... ainda");
});

router.post('/register', async (req, res) => {
    auth.register(req,res);
});

router.post('/authenticate', async (req, res) => {
    auth.authenticate(req,res);
});

router.put('/resetPassword', async (req, res) => {
    auth.reset_password(req,res);
});

router.get('/getVehicles', async (req, res) => {
    vehicle.getVehicles(req,res);
});

router.get('/getUsers', async (req, res) => {
    auth.showUsers(req,res);
});

router.post('/getVehicleByModel', async (req, res) => {
    vehicle.getVehicleByModel(req,res);
});

router.post('/createVehicle', async (req, res) => {
    vehicle.createVehicle(req,res);
});

router.get('/getListings', async (req,res) => {
    listing.getListings(req,res);
})

router.post('/getListingsOnRequestedRange', async (req,res) => {
    listing.getListingsOnRequestedRange(req,res);
})

router.get('/getListing/:id',function(req,res){
    listing.getListing(req,res);
});

router.post('/createListing', async (req,res) =>{
    listing.createListing(req,res);
})

router.post('/createSchedule', async (req,res) =>{
    schedule.createSchedule(req,res);
})

router.post('/getSchedules', async (req,res) =>{
    schedule.getSchedules(req,res);
})

module.exports = app => app.use('/', router);
