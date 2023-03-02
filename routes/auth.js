const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

router.post('/userrequest', [
    body('name', "Please enter a valid name").isLength({min : 4}),  
    body('email', "Please enter the valid email").isEmail(),
    body('phone', "Please enter min & max 10 digit").isLength({max : 10, min : 10}),
    body('collageSchool', "Please enter your school collage name")], (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      email: req.body.email,
      phone : req.body.phone,
      address : req.body.address,
      collageSchool : req.body.collageSchool,
      message : req.body.message
    }).then(user => res.json(user))
    .catch(err => {console.log(err)
    res.status(400).json({errors : "Internal server error"})})
})

module.exports = router