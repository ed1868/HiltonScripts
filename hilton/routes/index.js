const express = require('express');
const router = express.Router();
// let Hotels = require('./hiltonDerbyHotels');
const axios = require('axios');


let Hotels = require('./ihg');

// console.log('IHG HOTELS : ', Hotels);



let hotelsTested = [];
let batchActive = [];

let hotelsActivated = 0;
let hunger = 0;

let failedAttempt = [];

activateHotel = (id) => {
  let hotelToActivate = id;
  console.log('el id : ', id)
  axios({
    method: "post",
    url: "https://go-us.derbysoftsec.com/api/go/shoppingengine/v4/hotels/IHG/setup",
    headers: {
      Authorization:
        "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
    },
    data: {
      header: {
        Authorization:
          "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",

        distributorId: "OVERSEAS",
        version: "v4",
        token:
          "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
      },
      hotels: [
        {
          supplierId: "IHG",
          hotelId: id,
          status: "Actived",
        },
      ],
    },
  })
    .then((payload) => {
      if (payload.status == "200") {
        if (payload.data.hotelCount) {
          hunger += 1;
          batchActive.push(id);
        }
        hotelsTested.push(id);

        hotelsActivated += 1;
        console.log(`HOTEL ${id} HAS BEEN ACTIVATED ::::: `, id);

        console.log('PAYLOAD DATA : ', payload.data)
      }


      console.log(`TOTAL HOTELS ACTIVATED ${hotelsActivated} `);
      console.log(`TOTAL NEW HOTEL ACTIVATION ${hunger} `);
      // console.log('THE FINAL ARRAY FROM PROPERTIES LOADED : ::::: ', batchActive)


    })
    .catch((err) => {

      if (err && err.code == "ECONNREFUSED") {
        console.log(':::::::::::::ECONNREFUSED ERROR :::::::::::::: ', err)
        setTimeout(function () {
          console.log(':::::::::::::::ERROR FIX SET TIME OUT ID :::::::::::::::::::::::::::::::', id)
          activateHotel(id)
        }, 7000)
      }
      if (err && err.code == "ETIMEDOUT") {
        console.log(':::::::::::::ETIMEDOUT ERROR :::::::::::::: ', err)
        setTimeout(function () {
          console.log(':::::::::::::::ERROR FIX SET TIME OUT ID :::::::::::::::::::::::::::::::', id)
          activateHotel(id)
        }, 7000)

      }

      if (err && err.response) {
        if (err.response.status) {
          if (err.response.status == "429") {
            setTimeout(function () {
              console.log(':::::::::::::::ERROR FIX SET TIME OUT ID :::::::::::::::::::::::::::::::', id)
              activateHotel(id)
            }, 6000)
          }
        }
      }

      if (err && !err.response) {
        console.log('no error response ')
      }
    });



};


async function getActivation(hotelId) {
  await activateHotel(hotelId)
}

async function getAllHotels() {
  const apiPromises = one.map(getActivation)

  await Promise.all(apiPromises)
}


// getAllHotels()

// promoIdList.map(hotelId => {
//   if(parsedArr.includes(hotelId)){
//     console.log('dup');
//   }else{
//     parsedArr.push(hotelId);
//   }
// })

const idArray = [];

getAllHotelIds = (arr) => {

  // console.log('Given Array : : : ', arr);

  // console.log(`HOTELS---- ${arr[0]}`);
  arr.map(hotel => {
    console.log("el hotel - ", hotel.status)
    if (hotel.status && hotel.status == "Actived") {
      console.log('entroooooo ---', hotel.hotelId)

        idArray.push(hotel.hotelId);

    }




    console.log('FINAL ARRAY::::', idArray);
    return idArray;

  })
}

/* GET home page. */
router.get('/', (req, res, next) => {

Hotels.map(hotel => {
  getAllHotelIds(hotel);
})
  
  res.status(200).json({
    allHotelIds: idArray
  })

  // res.status(200).json({
  //   finalHotelListWithPromos: parsedArr
  // });

  // hiltonList.map(hotel => {
  //   if(hiltonHotelNames.includes(hotel)){
  //     console.log('yeapppp ::::::::::', hotel)
  //     counter++;
  //     filterItems(hiltonHotelNames, hotel)
  //   }else{

  //   }
  // })

  // hiltonHotelNames.map(hotel => {
  //   if(hiltonList.includes(hotel)){

  //   }
  // })




  // console.log('THE TOTAL AMOUNT OF DASHBOARD HOTELS THAT WERE IN THE DERBY HOTEL LIST ARE ::::: ', counter)
  // console.log('othersss: ', others.length)
  // console.log('THE TOTAL AMOUNT OF UNDEFINED HOTELS ON DERBYS LIST IS :::::: ', uncounter);
  // // console.log('MISSING HOTEL LIST COUNT : ',  missingHotels );
  // // console.log('DUPLICATES LIST  IS  : ', duplicates);
  // console.log('THE DUPLICATES LIST TOTAL AT : ', duplicates.length);

  //REMOVE DUPLICATE FUNCTION
  // function removeDuplicates(array) {
  //   const result = [];
  //   for (let i = 0; i < array.length; i++) {
  //     let exists = false;
  //     for (j = 0; j < result.length; j++) {
  //       if (array[i] === result[j]) {
  //         exists = true;
  //         break;
  //       }
  //     }
  //     if (!exists) {
  //       result.push(array[i]);
  //     }
  //   }
  //   return result;
  // }


  // let finally = hiltonHotelNames.filter(val => !parsedFilteredDashboardHiltonList.includes(val));


  //   let result = hiltonHotelNames.filter(val => !parsedFilteredDashboardHiltonList.includes(val));

  //   let comparison = parsedFilteredDashboardHiltonList.filter(val => !hiltonHotelNames.includes(val));

  // let finalz = hiltonHotelNames.filter(val => !comparison.includes(val));



  //   console.log('THE FINAL COMPARISON ::::: ', comparison);
  // console.log('SHIT SHIT HI :::  ', finalz.length)
  // let final = [...new Set(result)];
  // console.log('THE FINAL REUSLT :::: ', final.length)
  // console.log('THE MISSING HOTELLSL : ', missingHotels)
  // console.log('RANDOM RANDOM : ', hello.l)
  // console.log(' FINAL LIST LENGTH ::: ', hiltonHotelNames.length);

  // res.status(200).json({
  //   numberOfNewActivatedHotels: batchActive.length,
  //   count: hunger,
  //   hotelsTested: hotelsTested,
  //   newHotels: batchActive,

  // })
});


router.get('/marriotts', (req, res, next) => {


  res.status(200).json(newMarriottBatch)
})
router.get('/ref', (req, res, next) => {

  res.status(200).json(hiltonRefugees);
});


router.get('/hamptons', (req, res, next) => {
  res.status(200).json(hamptons)
});

router.get('/others', (req, res, next) => {
  res.status(200).json(others)
});




// router.get('/newParse', (req, res, next) => {

//   let marriottId = [];
//   let otherHotels = [];
//   providorId.map(id => {

//     if (id[0] == "m" || id[0] == "M") {
//       console.log('MARRIOT MATCH');
//       marriottId.push(id);

//     } else {
//       console.log('NOT A MARRIOTT HOTEL');
//       otherHotels.push(id);
//     }
//   });

//   res.status(200).json({ numberOfMarriottHotels: marriottId.length, marriottHotels: marriottId, numberOfNonMarriottHotels: otherHotels.length, nonMarriottHotels: otherHotels });
// })

module.exports = router;
