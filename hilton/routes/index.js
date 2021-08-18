const express = require('express');
const router  = express.Router();
let Hotels = require('./hiltonDerbyHotels');

let hiltonHotelNames = [];
let hiltonRefugees = [];
let hamptons = [];

let others = [];

Hotels.map(hotel => {
  
  if(hotel.hotelName && hotel.hotelName.includes("Hilton")){
    hiltonHotelNames.push(hotel.hotelName);    
  }else{
    if(hotel.hotelName && hotel.hotelName.includes("Hampton")){
      hamptons.push(hotel.hotelName);
    }else{
      if(hotel.hotelName){
        others.push(hotel.hotelName)
      }
      
    }

    hiltonRefugees.push(hotel.hotelName);  
  }

});



/* GET home page. */
router.get('/', (req, res, next) => {
  
  res.status(200).json(hiltonHotelNames);
});

router.get('/ref', (req, res, next) => {
  
  res.status(200).json(hiltonRefugees);
});


router.get('/hamptons', (req,res,next) => {
  res.status(200).json(hamptons)
});

router.get('/others', (req,res,next) => {
  res.status(200).json(others)
});

module.exports = router;
