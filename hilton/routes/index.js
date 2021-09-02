const express = require('express');
const router = express.Router();
let Hotels = require('./hiltonDerbyHotels');
const axios = require('axios');
let derbyNoratesMarriottList = [
  // "ABQFI",
  // "ABERI",
  // "ADBSI",
  // "ABECY",
  // "ABQRI",
  // "ATLCU",
  // "ATLBW",
  // "ATLAN",
  // "ATLNP",
  // "ATLJC",
  // "ATLMN",
  // "ATLMW",
  // "ATLWS",
  // "ATLTN",
  // "ATLTC",
  // "AUSTW",
  // "BHMSC",
  // "BNAMF",
  // "BNATN",
  // "BOSFB",
  // "BOSDV",
  // "BOSWB",
  // "BOSML",
  // "BOSTD"


  "BOSST",
"BUFAM",
"BVUCH",
"BUDAK",
"BWIRI",
"BWICL",
"BVUSI",
"CAIHM",
"CAIHM",
"CANAL",
"CHACH",
"CHIAN",
"CHIDN",
"CHIRW",
"CHIRD",
"CHITS",
"CIDIC",
"CLEAP",
"CLLFP",
"CLTUN",
"CPTSB",
"DACFP",
"DALMK",
"CWBFP",
"DALCE",
"DALCC",
"DALRH",
"DALRS",
"DFWFC",
"DOHMC",
"DTWRI",
"DTWNV",
"DTWAB",
"DTWTS",
"DURED",
"DXBAE",
"EVVPC",
"EWRMW",
"EWRTC",
"EWRPY",
"EWRNJ",
"GRJFO",
"HAMTX",
"GYDAK",
"GYDBS",
"GYDIB",
"HFEWI",
"HAVFP",
"HOUTS",
"HOUTC",
"HOUWH"

]
// "BOSST",
// "BUFAM",
// "BVUCH",
// "BUDAK",
// "BWIRI",
// "BWICL",
// "BVUSI",
// "CAIHM",
// "CAIHM",
// "CANAL",
// "CHACH",
// "CHIAN",
// "CHIDN",
// "CHIRW",
// "CHIRD",
// "CHITS",
// "CIDIC",
// "CLEAP",
// "CLLFP",
// "CLTUN",
// "CPTSB",
// "DACFP",
// "DALMK",
// "CWBFP",
// "DALCE",
// "DALCC",
// "DALRH",
// "DALRS",
// "DFWFC",
// "DOHMC",
// "DTWRI",
// "DTWNV",
// "DTWAB",
// "DTWTS",
// "DURED",
// "DXBAE",
// "EVVPC",
// "EWRMW",
// "EWRTC",
// "EWRPY",
// "EWRNJ",
// "GRJFO",
// "HAMTX",
// "GYDAK",
// "GYDBS",
// "GYDIB",
// "HFEWI",
// "HAVFP",
// "HOUTS",
// "HOUTC",
// "HOUWH",
// "IADFL",
// "HZVPR",
// "HVNFP",
// "HVNFP",
// "IEVAL",
// "ILGWC",
// "ILGSW",
// "ISPFP",
// "INTUP",
// "JKTLC",
// "KOASI",
// "LASNW",
// "LAXCT",
// "LAXCA",
// "LEBEL",
// "LEDCY",
// "LIMFP",
// "LIHHI",
// "LONPM",
// "MANBR",
// "MCICA",
// "MEXSI",
// "MEXSI",
// "MIACO",
// "MKEBC",
// "MIAML",
// "MLICH",
// "MSPED",
// "MRUXR",
// "MSPMD",
// "MSYHM",
// "MTTFI",
// "MSYRI",
// "MVDSI",
// "NKGLC",
// "NYCEA",
// "NTYPR",
// "NKGSI",
// "NYCXM",
// "NYCRW",
// "NYCWD",
// "NYCWD",
// "NYCMS",
// "OAKMV",
// "OAKRM",
// "OAKCP",
// "ORFTS",
// "ORNSI",
// "OXRCH",
// "PARWH",
// "PBIBC",
// "PHFTS",
// "PHLAT",
// "PHXCC",
// "PHXCL",
// "PHXRI",
// "PHXTE",
// "PHXMY",
// "PHXRT",
// "PHXRS",
// "PHXTO",
// "PLZMA",
// "PRGAK",
// "PRYHA",
// "PRYWA",
// "PTYPA",
// "PTYBB",
// "RDUAP",
// "RDURT",
// "RECSI",
// "RDURD",
// "RICTS",
// "RNORI",
// "ROMEX",
// "RUTLC",
// "SATRW",
// "SAVAD",
// "SANRB",
// "SATFP",
// "SDKFP",
// "SEZMD",
// "SELSI",
// "SELMD",
// "SFOCD",
// "SFORW",
// "SFOLS",
// "SFOLS",
// "SFOOP",
// "SFORI",
// "SFOLA",
// "SFOPC",
// "SHABR",
// "SINMD",
// "SJDSI",
// "SJDSI",
// "SNAFC",
// "SNAFV",
// "SLWFI",
// "SNALH",
// "SPACH",
// "STFSI",
// "TKDPR",
// "TGUMC",
// "TNAJS",
// "TSNJX",
// "VCEAK",
// "USMMD",
// "WASAR",
// "WASKB",
// "WASBV",
// "WASTS",
// "WASPT",
// "WASWH",
// "YBYCY",
// "YKAFP",
// "YVRGW",
// "ZRHFP",
// "ZISMD",
// "SHADF",
// "CPTCA",
// "CORSI",
// "BDLCT"


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
    url: "https://go-us.derbysoftsec.com/api/go/shoppingengine/v4/hotels/MARRIOTT/setup",
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
          supplierId: "MARRIOTT",
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
          batchActive.push(payload.data);
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
        }, 6000)
      }
      if (err && err.code == "ETIMEDOUT") {
        console.log(':::::::::::::ETIMEDOUT ERROR :::::::::::::: ', err)
        setTimeout(function () {
          console.log(':::::::::::::::ERROR FIX SET TIME OUT ID :::::::::::::::::::::::::::::::', id)
          activateHotel(id)
        }, 6000)

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
  const apiPromises = derbyNoratesMarriottList.map(getActivation)

  await Promise.all(apiPromises)
}


getAllHotels()



/* GET home page. */
router.get('/', (req, res, next) => {




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

  res.status(200).json({ newHotels: batchActive, hotelsTested: hotelsTested })
});

router.get('/ref', (req, res, next) => {

  res.status(200).json(hiltonRefugees);
});


router.get('/hamptons', (req, res, next) => {
  res.status(200).json(hamptons)
});

router.get('/others', (req, res, next) => {
  res.status(200).json(others)
});

module.exports = router;
