let Hotels = require('./hiltonDerbyHotels');


// console.log('0000000000000',Hotels);

let hiltonHotelNames = [];

Hotels.map(hotel => {
    hiltonHotelNames.push(hotel.hotelName);
});

console.group('THE FINAL HOTEL NAME ARRAY : ', hiltonHotelNames)