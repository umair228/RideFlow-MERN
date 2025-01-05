const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const captainController = require('../controllers/captain.controller');
router.post('/register', [
        body('email').isEmail().withMessage('Invalid Email'),
        body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
        body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
        body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
        body('vehicle.vehicleType').isIn(['car', 'motorcycle','auto rickshaw']).withMessage('Invalid vehicle type'),
    ],
    captainController.registerCaptain
);


module.exports = router;