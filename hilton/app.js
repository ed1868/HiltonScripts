const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');


mongoose.connect('mongodb://localhost/hilton');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



const firstTenHilton = [
  'MSYRV',
  'PHXRS',
  'DXBVH',
  'DXBAH',
  'SJDWA',
  'CNYCU',
  'AVLCU',
  'AVLBP',
  'LRMFM',
  'CUNCU'
]
const hiltonHotelIdList = [
  'MSYRV',
  'PHXRS',
  'DXBVH',
  'DXBAH',
  'SJDWA',
  'CNYCU',
  'AVLCU',
  'AVLBP',
  'LRMFM',
  'CUNCU',
  'PVRPV',
  'MTYAP',
  'MSPMH',
  'LAXGH',
  'SANGQ',
  'SANHA',
  'SANHV',
  'NYCFF',
  'SJDMX',
  'CHIEE',
  'DENAH',
  'LASNO',
  'LASCH',
  'LASAP',
  'LASSR',
  'LASHW',
  'LASHE',
  'SEALW',
  'MIADB',
  'VALVH',
  'RLBK',
  'PHXPV',
  'CHABS',
  'DALPA',
  'NYCTH',
  'TUSHT',
  'PSPDP',
  'MCLDT',
  'SANAH',
  'MIAMB',
  'SJNHI',
  'NYCRW',
  'MIASB',
  'MEXRF',
  'MEXAH',
  'PVRPV',
  'LAXRB',
  'FLLTS',
  'MIAMH',
  'HOUES',
  'MCOSR',
  'MCOCV',
  'MCOCC',
  'PDXRE',
  'PWMMM',
  'NYCTR',
  'NYCTF',
  'NYCCS',
  'NYCEM',
  'NYCSP',
  'NYCCL',
  'NYCUN',
  'NYCWF',
  'NYCMT',
  'NYCME',
  'HYACC',
  'HNLGW',
  'AUSGI',
  'NYCMW',
  'LAXMA',
  'NYCMM',
  'NYCHS',
  'EWRHD',
  'CHINP',
  'MRYES',
  'SNACM',
  'ONAIS',
  'STAOC',
  'MESWH',
  'KOAHW',
  'SBAFP',
  'PSPPS',
  'ORLIH',
  'FATCC',
  'NYCCH',
  'SNACC',
  'MSYDT',
  'LGBSP',
  'FLGES',
  'PBISI',
  'SDGO',
  'DERDT',
  'PHXHY',
  'ALTAH',
  'SJCSV',
  'SFONO',
  'PHXCB',
  'RLSC',
  'NYCUP',
  'MIASP',
  'NORNH',
  'MCOHW',
  'PHXTC',
  'SFOAO',
  'SANCL',
  'SJNHI',
  'SATEM',
  'MSYOR',
  'MIADT',
  'MSPAH',
  'FLLBM',
  'SJUCO',
  'NRRIT',
  'MIABS',
  'NYCML',
  'HWOFL',
  'CHIOH',
  'NAPVL',
  'DENRT',
  'ITOHN',
  'LIHWB',
  'JACJH',
  'FLLCI',
  'XWOWO',
  'MJVLT',
  'EGEVC',
  'DRWDD',
  'DRWED',
  'DNNCD',
  'DCUSA',
  'CNSDC',
  'MTYMM',
  'MGMME',
  'JAXJV',
  'EWRET',
  'GLSDT',
  'ATLWO',
  'SAFCR',
  'SCHNT',
  'CHIAN',
  'BUFFL',
  'YHZHD',
  'LEXQQ',
  'JAXJR',
  'FLLSM',
  'CHIDM',
  'BOSNS',
  'BILDT',
  'PITMP',
  'BWILM',
  'MVNPB',
  'LWCMD',
  'RICKS',
  'ROASA',
  'BOSRO',
  'RDUDN',
  'MSPST',
  'HLNDN',
  'HSBDT',
  'FSMCC',
  'BUFDT',
  'ROACO',
  'MSPML',
  'SANST',
  'ORLOE',
  'MCOHN',
  'LAXWA',
  'DCASH',
  'NYCNH',
  'NYCSW',
  'MCOUN',
  'SLCDM',
  'AKLHI',
  'MIAGS',
  'FLGSS',
  'YTOCS',
  'EYWRO',
  'NYCCI',
  'MCOBU',
  'APFGS',
  'LAXHO',
  'LAXDT',
  'APFNH',
  'NYCCP',
  'SNAAH',
  'QKBVR',
  'BURUC',
  'HIIAZ',
  'ATLWA',
  'MBJRH',
  'MCOOD',
  'NYCJF',
  'CHIWA',
  'HNLWA',
  'DCAWH',
  'SFEHI',
  'FLLGR',
  'ORLDW',
  'HNLHV',
  'YYCAH',
  'DCAKE',
  'SFOSF',
  'YQBHI',
  'MRYMH',
  'SDXSE',
  'MIAOP',
  'PHXRS',
  'SMOOL',
  'SGUCH',
  'PHXBM',
  'ORLBC',
  'ORLHH',
  'EYWQQ',
  'DABDH',
  'MIACI',
  'HOUCV',
  'CCBCH',
  'SNAMO',
  'YVRVM',
  'FLLFS',
  'SFOFD',
  'JHMGW',
  'PIECB',
  'MIABM',
  'SJDGV',
  'EYWCM',
  'KOAHW',
  'SFOFH',
  'LAXAH',
  'CHIPH',
  'CHICH',
  'NYCWA',
  'MLEHI',
  'FLLDH',
  'LAXBH'
]

let hotelIdWoRatesInNovember = [];

let goodHotels = [];

let hotelsNotFound = [];

let hotelIdWoRatesInJanuary = [];

let hotelIdWoRatesInFebruary = [];

let hotelIdWoRatesInMarch = [];

let hotelIdWoRatesInApril = [];

let hotelIdWoRatesInMay = [];

availabilitySearchNovember = (id) => {
  let checkIn = "11/12/2021";
  let checkOut = "11/15/2021";

  let hotelId = id;

  console.log('HOTEL ID BEING QUERIED : ', hotelId);
  axios({
    method: "post",
    "url": "https://go-us.derbysoftsec.com/api/go/shoppingengine/v4/shopping/multihotels",
    headers: {
      Authorization:
        // BOOKING TOKEN
        // "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
        // SHOPPING TOKEN
        "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6"
    },
    data: {
      header: {
        Authorization:
          // BOOKING TOKEN
          // "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
          // SHOPPING TOKEN
          "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",

        distributorId: "OVERSEAS",
        version: "v4",
        token:
          // BOOKING TOKEN
          // "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
          // SHOPPING TOKEN
          "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6"
      },
      "env": "PROD",
      hotels: [
        {
          supplierId: "HILTON",
          hotelId: hotelId,
          status: "Actived",
        },
      ],
      "stayRange": {
        "checkin": "2021-11-12",
        "checkout": "2021-11-13"
      },
      "roomCriteria": {
        "roomCount": 1,
        "adultCount": 1,
        "childCount": 0,
        "childAges": []
      },
      "iata": "",
      "promoteCode": "",
      "isAfterPromotion": "false"
    },
  })
    .then(payload => {
      console.log('QUERY PAYLOAD:::::', payload.data.availHotels);

      if (payload.status == "200") {
        console.log('Good request made');
        console.log('HOTEL AVAILABILITY ROOM RATE LENGTH ::: ', payload.data.availHotels[0].availRoomRates.length);
        if (payload.data.availHotels[0].availRoomRates.length >= 1) {
          console.log('THIS HOTEL HAS RATES ::  ');

          goodHotels.push(hotelId);


        } else {
          console.log('NO RATES FOR THIS HOTEL ::: ', payload.data.availHotels);


          hotelIdWoRatesInNovember.push(hotelId);
        }
      }

      console.log('HOTELS NOT FOUND :: ', hotelsNotFound)

      console.log('SUCCESFUL HOTEL :: ', goodHotels);

      console.log('HOTEL WITH NO RATES:: ', hotelIdWoRatesInNovember);


    })
    .catch(err => {
      if (err) {
        if (err && err.response.status == "500") {
          console.log(':::::::::::::SERVER ERROR :::::::::::::: ', err.response.status);
          console.log('err data :: ', err.response.data);
          if (err.response.data.errorCode == "HotelNotFound") {

            console.log('THIS HOTEL WAS NOT FOUND:::: ', hotelId);
            hotelsNotFound.push(hotelId)
          } else {
            setTimeout(function () {
              console.log(':::::::::::::::ERROR FIX SET TIME OUT ID :::::::::::::::::::::::::::::::', hotelId)
              availabilitySearchNovember(hotelId)
            }, 6000)
          }

        }




      }
    })
}


// availabilitySearchNovember("MIASP");



availabilitySearchJanuary = (id) => {
  let checkIn = "01/05/2022";
  let checkOut = "01/07/2022";

  let hotelId = id;

  console.log('HOTEL ID BEING QUERIED : ', hotelId);
  axios({
    method: "post",
    "url": "https://go-us.derbysoftsec.com/api/go/shoppingengine/v4/shopping/multihotels",
    headers: {
      Authorization:
        // BOOKING TOKEN
        // "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
        // SHOPPING TOKEN
        "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6"
    },
    data: {
      header: {
        Authorization:
          // BOOKING TOKEN
          // "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
          // SHOPPING TOKEN
          "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",

        distributorId: "OVERSEAS",
        version: "v4",
        token:
          // BOOKING TOKEN
          // "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
          // SHOPPING TOKEN
          "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6"
      },
      "env": "PROD",
      hotels: [
        {
          supplierId: "HILTON",
          hotelId: hotelId,
          status: "Actived",
        },
      ],
      "stayRange": {
        "checkin": "2021-11-12",
        "checkout": "2021-11-13"
      },
      "roomCriteria": {
        "roomCount": 1,
        "adultCount": 1,
        "childCount": 0,
        "childAges": []
      },
      "iata": "",
      "promoteCode": "",
      "isAfterPromotion": "false"
    },
  })
    .then(payload => {
      console.log('QUERY PAYLOAD:::::', payload.data.availHotels);
    })
    .catch(err => {
      if (err) {
        console.log('THE ERROR::::: ', err);
      }
    })
}


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


//GET ALL HOTEL IDS
async function getAllHotels() {
  const apiPromises = firstTenHilton.map(getAvailability)

  await Promise.all(apiPromises)
}

// GET ALL AVAILABILITY STATUS FROM HOTELS 

async function getAvailability(hotelId) {
  await availabilitySearchNovember(hotelId);
}


getAllHotels();


// async function getActivation(hotelId) {
//   await activateHotel(hotelId)
// }

// async function getAllHotels() {
//   const apiPromises = derbyNoratesMarriottList.map(getActivation)

//   await Promise.all(apiPromises)
// }




// getAllHotels()

// activateHotel("ABQFI");

// });



const index = require('./routes/index');
app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
