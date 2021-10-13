// const express = require('express');
// const router = express.Router();
// let Hotels = require('./hiltonDerbyHotels');
// const axios = require('axios');


// const hiltonVegasArray = [
//     "LASHH",
//     "LASCD",
//     "LASCF",
//     "LASVG"
// ];

// const hiltonAllInclusiveResorts = [
//     'CUNCI',
//     'CUNHI',
//     'CURRY',
//     'CZMPC',
//     'CZMPD',
//     'LRMDO',
//     'LRMFM',
//     'MBJRH',
//     'PVRPA',
//     'PVRPV'
// ]

// const firstTenHilton = [
//     'LAXMA',
//     'NYCMM',
//     'NYCHS',
//     'EWRHD',
//     'CHINP',
//     'MRYES',
//     'SNACM',
//     'ONAIS',
//     'STAOC',
//     'MESWH',
//     'KOAHW'
// ]
// const hiltonHotelIdList = [
//     'MSYRV',
//     'PHXRS',
//     'DXBVH',
//     'DXBAH',
//     'SJDWA',
//     'CNYCU',
//     'AVLCU',
//     'AVLBP',
//     'LRMFM',
//     'CUNCU',
//     'PVRPV',
//     'MTYAP',
//     'MSPMH',
//     'LAXGH',
//     'SANGQ',
//     'SANHA',
//     'SANHV',
//     'NYCFF',
//     'SJDMX',
//     'CHIEE',
//     'DENAH',
//     'LASNO',
//     'LASCH',
//     'LASAP',
//     'LASSR',
//     'LASHW',
//     'LASHE',
//     'SEALW',
//     'MIADB',
//     'VALVH',
//     'RLBK',
//     'PHXPV',
//     'CHABS',
//     'DALPA',
//     'NYCTH',
//     'TUSHT',
//     'PSPDP',
//     'MCLDT',
//     'SANAH',
//     'MIAMB',
//     'SJNHI',
//     'NYCRW',
//     'MIASB',
//     'MEXRF',
//     'MEXAH',
//     'PVRPV',
//     'LAXRB',
//     'FLLTS',
//     'MIAMH',
//     'HOUES',
//     'MCOSR',
//     'MCOCV',
//     'MCOCC',
//     'PDXRE',
//     'PWMMM',
//     'NYCTR',
//     'NYCTF',
//     'NYCCS',
//     'NYCEM',
//     'NYCSP',
//     'NYCCL',
//     'NYCUN',
//     'NYCWF',
//     'NYCMT',
//     'NYCME',
//     'HYACC',
//     'HNLGW',
//     'AUSGI',
//     'NYCMW',
//     'LAXMA',
//     'NYCMM',
//     'NYCHS',
//     'EWRHD',
//     'CHINP',
//     'MRYES',
//     'SNACM',
//     'ONAIS',
//     'STAOC',
//     'MESWH',
//     'KOAHW',
//     'SBAFP',
//     'PSPPS',
//     'ORLIH',
//     'FATCC',
//     'NYCCH',
//     'SNACC',
//     'MSYDT',
//     'LGBSP',
//     'FLGES',
//     'PBISI',
//     'SDGO',
//     'DERDT',
//     'PHXHY',
//     'ALTAH',
//     'SJCSV',
//     'SFONO',
//     'PHXCB',
//     'RLSC',
//     'NYCUP',
//     'MIASP',
//     'NORNH',
//     'MCOHW',
//     'PHXTC',
//     'SFOAO',
//     'SANCL',
//     'SJNHI',
//     'SATEM',
//     'MSYOR',
//     'MIADT',
//     'MSPAH',
//     'FLLBM',
//     'SJUCO',
//     'NRRIT',
//     'MIABS',
//     'NYCML',
//     'HWOFL',
//     'CHIOH',
//     'NAPVL',
//     'DENRT',
//     'ITOHN',
//     'LIHWB',
//     'JACJH',
//     'FLLCI',
//     'XWOWO',
//     'MJVLT',
//     'EGEVC',
//     'DRWDD',
//     'DRWED',
//     'DNNCD',
//     'DCUSA',
//     'CNSDC',
//     'MTYMM',
//     'MGMME',
//     'JAXJV',
//     'EWRET',
//     'GLSDT',
//     'ATLWO',
//     'SAFCR',
//     'SCHNT',
//     'CHIAN',
//     'BUFFL',
//     'YHZHD',
//     'LEXQQ',
//     'JAXJR',
//     'FLLSM',
//     'CHIDM',
//     'BOSNS',
//     'BILDT',
//     'PITMP',
//     'BWILM',
//     'MVNPB',
//     'LWCMD',
//     'RICKS',
//     'ROASA',
//     'BOSRO',
//     'RDUDN',
//     'MSPST',
//     'HLNDN',
//     'HSBDT',
//     'FSMCC',
//     'BUFDT',
//     'ROACO',
//     'MSPML',
//     'SANST',
//     'ORLOE',
//     'MCOHN',
//     'LAXWA',
//     'DCASH',
//     'NYCNH',
//     'NYCSW',
//     'MCOUN',
//     'SLCDM',
//     'AKLHI',
//     'MIAGS',
//     'FLGSS',
//     'YTOCS',
//     'EYWRO',
//     'NYCCI',
//     'MCOBU',
//     'APFGS',
//     'LAXHO',
//     'LAXDT',
//     'APFNH',
//     'NYCCP',
//     'SNAAH',
//     'QKBVR',
//     'BURUC',
//     'HIIAZ',
//     'ATLWA',
//     'MBJRH',
//     'MCOOD',
//     'NYCJF',
//     'CHIWA',
//     'HNLWA',
//     'DCAWH',
//     'SFEHI',
//     'FLLGR',
//     'ORLDW',
//     'HNLHV',
//     'YYCAH',
//     'DCAKE',
//     'SFOSF',
//     'YQBHI',
//     'MRYMH',
//     'SDXSE',
//     'MIAOP',
//     'PHXRS',
//     'SMOOL',
//     'SGUCH',
//     'PHXBM',
//     'ORLBC',
//     'ORLHH',
//     'EYWQQ',
//     'DABDH',
//     'MIACI',
//     'HOUCV',
//     'CCBCH',
//     'SNAMO',
//     'YVRVM',
//     'FLLFS',
//     'SFOFD',
//     'JHMGW',
//     'PIECB',
//     'MIABM',
//     'SJDGV',
//     'EYWCM',
//     'KOAHW',
//     'SFOFH',
//     'LAXAH',
//     'CHIPH',
//     'CHICH',
//     'NYCWA',
//     'MLEHI',
//     'FLLDH',
//     'LAXBH'
// ]



// const firstHundredHilton = [
//     'MSYRV',
//     'PHXRS',
//     'DXBVH',
//     'DXBAH',
//     'SJDWA',
//     'CNYCU',
//     'AVLCU',
//     'AVLBP',
//     'LRMFM',
//     'CUNCU',
//     'PVRPV',
//     'MTYAP',
//     'MSPMH',
//     'LAXGH',
//     'SANGQ',
//     'SANHA',
//     'SANHV',
//     'NYCFF',
//     'SJDMX',
//     'CHIEE',
//     'DENAH',
//     'LASNO',
//     'LASCH',
//     'LASAP',
//     'LASSR',
//     'LASHW',
//     'LASHE',
//     'SEALW',
//     'MIADB',
//     'VALVH',
//     'RLBK',
//     'PHXPV',
//     'CHABS',
//     'DALPA',
//     'NYCTH',
//     'TUSHT',
//     'PSPDP',
//     'MCLDT',
//     'SANAH',
//     'MIAMB',
//     'SJNHI',
//     'NYCRW',
//     'MIASB',
//     'MEXRF',
//     'MEXAH',
//     'PVRPV',
//     'LAXRB',
//     'FLLTS',
//     'MIAMH',
//     'HOUES',
//     'MCOSR',
//     'MCOCV',
//     'MCOCC',
//     'PDXRE',
//     'PWMMM',
//     'NYCTR',
//     'NYCTF',
//     'NYCCS',
//     'NYCEM',
//     'NYCSP',
//     'NYCCL',
//     'NYCUN',
//     'NYCWF',
//     'NYCMT',
//     'NYCME',
//     'HYACC',
//     'HNLGW',
//     'AUSGI',
//     'NYCMW',
//     'LAXMA',
//     'NYCMM',
//     'NYCHS',
//     'EWRHD',
//     'CHINP',
//     'MRYES',
//     'SNACM',
//     'ONAIS',
//     'STAOC',
//     'MESWH',
//     'KOAHW'
// ]
// // console.log('THE COUNT OF FIRST: :: ', firstHundredHilton.length)
// const secondHundredHilton = [
//     'SBAFP',
//     'PSPPS',
//     'ORLIH',
//     'FATCC',
//     'NYCCH',
//     'SNACC',
//     'MSYDT',
//     'LGBSP',
//     'FLGES',
//     'PBISI',
//     'SDGO',
//     'DERDT',
//     'PHXHY',
//     'ALTAH',
//     'SJCSV',
//     'SFONO',
//     'PHXCB',
//     'RLSC',
//     'NYCUP',
//     'MIASP',
//     'NORNH',
//     'MCOHW',
//     'PHXTC',
//     'SFOAO',
//     'SANCL',
//     'SJNHI',
//     'SATEM',
//     'MSYOR',
//     'MIADT',
//     'MSPAH',
//     'FLLBM',
//     'SJUCO',
//     'NRRIT',
//     'MIABS',
//     'NYCML',
//     'HWOFL',
//     'CHIOH',
//     'NAPVL',
//     'DENRT',
//     'ITOHN',
//     'LIHWB',
//     'JACJH',
//     'FLLCI',
//     'XWOWO',
//     'MJVLT',
//     'EGEVC',
//     'DRWDD',
//     'DRWED',
//     'DNNCD',
//     'DCUSA',
//     'CNSDC',
//     'MTYMM',
//     'MGMME',
//     'JAXJV',
//     'EWRET',
//     'GLSDT',
//     'ATLWO',
//     'SAFCR',
//     'SCHNT',
//     'CHIAN',
//     'BUFFL',
//     'YHZHD',
//     'LEXQQ',
//     'JAXJR',
//     'FLLSM',
//     'CHIDM',
//     'BOSNS',
//     'BILDT',
//     'PITMP',
//     'BWILM',
//     'MVNPB',
//     'LWCMD',
//     'RICKS',
//     'ROASA',
//     'BOSRO',
//     'RDUDN',
//     'MSPST',
//     'HLNDN',
//     'HSBDT',
//     'FSMCC',
//     'BUFDT',
//     'ROACO',
//     'MSPML',
//     'SANST',
//     'ORLOE',
//     'MCOHN',
//     'LAXWA',
//     'DCASH',
//     'NYCNH',
//     'NYCSW',
//     'MCOUN',
//     'SLCDM',
//     'AKLHI',
//     'MIAGS',
//     'FLGSS',
//     'YTOCS',
//     'EYWRO',
//     'NYCCI',
//     'MCOBU',
//     'APFGS',
//     'LAXHO',
//     'LAXDT',
//     'APFNH',
//     'NYCCP',
//     'SNAAH',
//     'QKBVR',
//     'BURUC'
// ]

// const thirdHundredHilton = [
//     'HIIAZ',
//     'ATLWA',
//     'MBJRH',
//     'MCOOD',
//     'NYCJF',
//     'CHIWA',
//     'HNLWA',
//     'DCAWH',
//     'SFEHI',
//     'FLLGR',
//     'ORLDW',
//     'HNLHV',
//     'YYCAH',
//     'DCAKE',
//     'SFOSF',
//     'YQBHI',
//     'MRYMH',
//     'SDXSE',
//     'MIAOP',
//     'PHXRS',
//     'SMOOL',
//     'SGUCH',
//     'PHXBM',
//     'ORLBC',
//     'ORLHH',
//     'EYWQQ',
//     'DABDH',
//     'MIACI',
//     'HOUCV',
//     'CCBCH',
//     'SNAMO',
//     'YVRVM',
//     'FLLFS',
//     'SFOFD',
//     'JHMGW',
//     'PIECB',
//     'MIABM',
//     'SJDGV',
//     'EYWCM',
//     'KOAHW',
//     'SFOFH',
//     'LAXAH',
//     'CHIPH',
//     'CHICH',
//     'NYCWA',
//     'MLEHI',
//     'FLLDH',
//     'LAXBH'
// ]
// let hotelIdWoRatesInNovember = [];

// let hotelIdWoRatesInJanuary = [];



// let goodHotels = [];

// let hotelsNotFound = [];

// // let hotelIdWoRatesInJanuary = [];



// // availabilitySearchNovember = (id) => {
// //     let checkIn = "11/12/2021";
// //     let checkOut = "11/15/2021";

// //     let hotelId = id;

// //     console.log('HOTEL ID BEING QUERIED : ', hotelId);
// //     axios({
// //         method: "post",
// //         "url": "https://go-us.derbysoftsec.com/api/go/shoppingengine/v4/shopping/multihotels",
// //         headers: {
// //             Authorization:
// //                 // BOOKING TOKEN
// //                 // "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
// //                 // SHOPPING TOKEN
// //                 "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6"
// //         },
// //         data: {
// //             header: {
// //                 Authorization:
// //                     // BOOKING TOKEN
// //                     // "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
// //                     // SHOPPING TOKEN
// //                     "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",

// //                 distributorId: "OVERSEAS",
// //                 version: "v4",
// //                 token:
// //                     // BOOKING TOKEN
// //                     // "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
// //                     // SHOPPING TOKEN
// //                     "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6"
// //             },
// //             "env": "PROD",
// //             hotels: [
// //                 {
// //                     supplierId: "HILTON",
// //                     hotelId: hotelId,
// //                     status: "Actived",
// //                 },
// //             ],
// //             "stayRange": {
// //                 "checkin": "2021-11-12",
// //                 "checkout": "2021-11-13"
// //             },
// //             "roomCriteria": {
// //                 "roomCount": 1,
// //                 "adultCount": 1,
// //                 "childCount": 0,
// //                 "childAges": []
// //             },
// //             "iata": "",
// //             "promoteCode": "",
// //             "isAfterPromotion": "false"
// //         },
// //     })
// //         .then(payload => {
// //             console.log('QUERY PAYLOAD:::::', payload.data.availHotels);

// //             if (payload.status == "200") {
// //                 console.log('Good request made');
// //                 console.log('HOTEL AVAILABILITY ROOM RATE LENGTH ::: ', payload.data.availHotels[0].availRoomRates.length);
// //                 if (payload.data.availHotels[0].availRoomRates.length >= 1) {
// //                     console.log('THIS HOTEL HAS RATES ::  ');

// //                     goodHotels.push(hotelId);


// //                 } else {
// //                     console.log('NO RATES FOR THIS HOTEL ::: ', payload.data.availHotels);


// //                     hotelIdWoRatesInNovember.push(hotelId);
// //                 }
// //             }

// //             console.log('HOTELS NOT FOUND :: ', hotelsNotFound)

// //             console.log('SUCCESFUL HOTEL :: ', goodHotels);

// //             console.log('HOTEL WITH NO RATES:: ', hotelIdWoRatesInNovember);


// //         })
// //         .catch(err => {
// //             if (err) {

// //                 if(err.response){
// //                     if (err.response.status == "500") {
// //                         console.log(':::::::::::::SERVER ERROR :::::::::::::: ', err.response.status);
// //                         console.log('err data :: ', err.response.data);
// //                         if (err.response.data.errorCode == "HotelNotFound") {

// //                             console.log('THIS HOTEL WAS NOT FOUND:::: ', hotelId);
// //                             hotelsNotFound.push(hotelId)
// //                         } else {
// //                             setTimeout(function () {
// //                                 console.log(':::::::::::::::ERROR FIX SET TIME OUT ID :::::::::::::::::::::::::::::::', hotelId)
// //                                 availabilitySearchNovember(hotelId)
// //                             }, 9000)
// //                         }

// //                     }


// //                     if (err.response.status == "429") {
// //                         console.log(':::::::::::::SERVER ERROR TOO MANY ATTEMPTS :::::::::::::: ', err.response.status);
// //                         console.log('err data :: ', err.response.data);
// //                         if (err.response.data.error == "Rate limit exceeded") {

// //                             setTimeout(function () {
// //                                 console.log(':::::::::::::::ERROR FIX SET TIME OUT ID :::::::::::::::::::::::::::::::', hotelId)
// //                                 availabilitySearchNovember(hotelId)
// //                             }, 9000)
// //                         } 

// //                     }
// //                 }



// //                 else{

// //                     if(err.code == "ECONNREFUSED"){
// //                         console.log(':::::::::::::SERVER ECONNREFUSED :::::::::::::: ', err.code);
// //                         setTimeout(function () {
// //                             console.log(':::::::::::::::ERROR FIX SET TIME OUT ID :::::::::::::::::::::::::::::::', hotelId)
// //                             availabilitySearchNovember(hotelId)
// //                         }, 9000) 
// //                     }else{
// //                         console.log('NEW ERROR::::: ', err)
// //                     }

// //                 }






// //             }
// //         })
// // }



// availabilitySearch = (id, checkIn, checkOut) => {
//     let checkInDate = checkIn;
//     let checkOutDate = checkOut

//     let hotelId = id;
//     console.log('CHECK IN DATE : ', checkInDate);
//     console.log('CHECK OUT DATE :: ', checkOutDate);
//     console.log('HOTEL ID BEING QUERIED : ', hotelId);
//     axios({
//         method: "post",
//         "url": "https://go-us.derbysoftsec.com/api/go/shoppingengine/v4/shopping/multihotels",
//         headers: {
//             Authorization:
//                 // BOOKING TOKEN
//                 // "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
//                 // SHOPPING TOKEN
//                 "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6"
//         },
//         data: {
//             header: {
//                 Authorization:
//                     // BOOKING TOKEN
//                     // "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
//                     // SHOPPING TOKEN
//                     "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",

//                 distributorId: "OVERSEAS",
//                 version: "v4",
//                 token:
//                     // BOOKING TOKEN
//                     // "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
//                     // SHOPPING TOKEN
//                     "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6"
//             },
//             "env": "PROD",
//             hotels: [
//                 {
//                     supplierId: "HILTON",
//                     hotelId: hotelId,
//                     status: "Actived",
//                 },
//             ],
//             "stayRange": {
//                 "checkin": checkInDate,
//                 "checkout": checkOutDate
//             },
//             "roomCriteria": {
//                 "roomCount": 1,
//                 "adultCount": 1,
//                 "childCount": 0,
//                 "childAges": []
//             },
//             "iata": "",
//             "promoteCode": "",
//             "isAfterPromotion": "false"
//         },
//     })
//         .then(payload => {
//             console.log('QUERY PAYLOAD:::::', payload.data.availHotels[0].availRoomRates[0]);

//             if (payload.status == "200") {
//                 console.log('Good request made');
//                 console.log('HOTEL AVAILABILITY ROOM RATE LENGTH ::: ', payload.data.availHotels[0].availRoomRates.length);
//                 if (payload.data.availHotels[0].availRoomRates.length > 0) {

//                     if (goodHotels.includes(hotelId)) {
//                         console.log("duplicate:D:D:D:D::D:D:D:D:D:D:D:")
//                     } else {
//                         console.log('THIS HOTEL HAS RATES ::  ');

//                         goodHotels.push(hotelId);
//                     }



//                 } else {

//                     console.log('NO RATES FOR THIS HOTEL ::: ', payload.data.availHotels);
//                     console.log('the rates tho L ', payload.data.availHotels[0].availRoomRates.length);

//                     hotelIdWoRatesInJanuary.push(hotelId);
//                 }
//             }

//             console.log('HOTELS NOT FOUND :: ', hotelsNotFound)

//             console.log('SUCCESFUL HOTEL :: ', goodHotels);

//             console.log('HOTEL WITH NO RATES:: ', hotelIdWoRatesInJanuary);


//         })
//         .catch(err => {
//             if (err) {

//                 if (err.response) {
//                     if (err.response.status == "500") {
//                         console.log(':::::::::::::SERVER ERROR :::::::::::::: ', err.response.status);
//                         console.log('err data :: ', err.response.data);
//                         if (err.response.data.errorCode == "HotelNotFound") {

//                             console.log('THIS HOTEL WAS NOT FOUND:::: ', hotelId);
//                             hotelsNotFound.push(hotelId)
//                         } else {
//                             setTimeout(function () {
//                                 console.log(':::::::::::::::ERROR FIX SET TIME OUT ID :::::::::::::::::::::::::::::::', hotelId)
//                                 availabilitySearch(hotelId, checkInDate, checkOutDate)
//                             }, 7000)
//                         }

//                     }


//                     if (err.response.status == "429") {
//                         console.log(':::::::::::::SERVER ERROR TOO MANY ATTEMPTS :::::::::::::: ', err.response.status);
//                         console.log('err data :: ', err.response.data);
//                         if (err.response.data.error == "Rate limit exceeded") {

//                             setTimeout(function () {
//                                 console.log(':::::::::::::::ERROR FIX SET TIME OUT ID :::::::::::::::::::::::::::::::', hotelId)
//                                 availabilitySearch(hotelId, checkInDate, checkOutDate)
//                             }, 7000)
//                         }

//                     }
//                 }



//                 else {

//                     if (err.code == "ECONNREFUSED") {
//                         console.log(':::::::::::::SERVER ECONNREFUSED :::::::::::::: ', err.code);
//                         setTimeout(function () {
//                             console.log(':::::::::::::::ERROR FIX SET TIME OUT ID :::::::::::::::::::::::::::::::', hotelId)
//                             availabilitySearch(hotelId, checkInDate, checkOutDate)
//                         }, 9000)
//                     } else {
//                         console.log('NEW ERROR::::: ', err)
//                     }

//                 }






//             }
//         })
// }

// availabilitySearchJanuary = (id) => {
//     let checkIn = "01/12/2021";
//     let checkOut = "11/15/2021";

//     let hotelId = id;

//     console.log('HOTEL ID BEING QUERIED : ', hotelId);
//     axios({
//         method: "post",
//         "url": "https://go-us.derbysoftsec.com/api/go/shoppingengine/v4/shopping/multihotels",
//         headers: {
//             Authorization:
//                 // BOOKING TOKEN
//                 // "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
//                 // SHOPPING TOKEN
//                 "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6"
//         },
//         data: {
//             header: {
//                 Authorization:
//                     // BOOKING TOKEN
//                     // "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
//                     // SHOPPING TOKEN
//                     "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",

//                 distributorId: "OVERSEAS",
//                 version: "v4",
//                 token:
//                     // BOOKING TOKEN
//                     // "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6",
//                     // SHOPPING TOKEN
//                     "zCc23JLtqCPO2Lzn9S000001f6bce9a3dbad4505b04bfc014a6429b6"
//             },
//             "env": "PROD",
//             hotels: [
//                 {
//                     supplierId: "HILTON",
//                     hotelId: hotelId,
//                     status: "Actived",
//                 },
//             ],
//             "stayRange": {
//                 "checkin": "2022-01-12",
//                 "checkout": "2022-01-15"
//             },
//             "roomCriteria": {
//                 "roomCount": 1,
//                 "adultCount": 1,
//                 "childCount": 0,
//                 "childAges": []
//             },
//             "iata": "",
//             "promoteCode": "",
//             "isAfterPromotion": "false"
//         },
//     })
//         .then(payload => {
//             console.log('QUERY PAYLOAD:::::', payload.data.availHotels);

//             if (payload.status == "200") {
//                 console.log('Good request made');
//                 console.log('HOTEL AVAILABILITY ROOM RATE LENGTH ::: ', payload.data.availHotels[0].availRoomRates.length);
//                 if (payload.data.availHotels[0].availRoomRates.length >= 1) {

//                     if (goodHotels.includes(hotelId)) {
//                         console.log("duplicate:D:D:D:D::D:D:D:D:D:D:D:")
//                     } else {
//                         console.log('THIS HOTEL HAS RATES ::  ');

//                         goodHotels.push(hotelId);
//                     }



//                 } else {
//                     console.log('NO RATES FOR THIS HOTEL ::: ', payload.data.availHotels);


//                     hotelIdWoRatesInJanuary.push(hotelId);
//                 }
//             }

//             console.log('HOTELS NOT FOUND :: ', hotelsNotFound)

//             console.log('SUCCESFUL HOTEL :: ', goodHotels);

//             console.log('HOTEL WITH NO RATES:: ', hotelIdWoRatesInJanuary);


//         })
//         .catch(err => {
//             if (err) {

//                 if (err.response) {
//                     if (err.response.status == "500") {
//                         console.log(':::::::::::::SERVER ERROR :::::::::::::: ', err.response.status);
//                         console.log('err data :: ', err.response.data);
//                         if (err.response.data.errorCode == "HotelNotFound") {

//                             console.log('THIS HOTEL WAS NOT FOUND:::: ', hotelId);
//                             hotelsNotFound.push(hotelId)
//                         } else {
//                             setTimeout(function () {
//                                 console.log(':::::::::::::::ERROR FIX SET TIME OUT ID :::::::::::::::::::::::::::::::', hotelId)
//                                 availabilitySearchJanuary(hotelId)
//                             }, 7000)
//                         }

//                     }


//                     if (err.response.status == "429") {
//                         console.log(':::::::::::::SERVER ERROR TOO MANY ATTEMPTS :::::::::::::: ', err.response.status);
//                         console.log('err data :: ', err.response.data);
//                         if (err.response.data.error == "Rate limit exceeded") {

//                             setTimeout(function () {
//                                 console.log(':::::::::::::::ERROR FIX SET TIME OUT ID :::::::::::::::::::::::::::::::', hotelId)
//                                 availabilitySearchJanuary(hotelId)
//                             }, 7000)
//                         }

//                     }
//                 }



//                 else {

//                     if (err.code == "ECONNREFUSED") {
//                         console.log(':::::::::::::SERVER ECONNREFUSED :::::::::::::: ', err.code);
//                         setTimeout(function () {
//                             console.log(':::::::::::::::ERROR FIX SET TIME OUT ID :::::::::::::::::::::::::::::::', hotelId)
//                             availabilitySearchJanuary(hotelId)
//                         }, 9000)
//                     } else {
//                         console.log('NEW ERROR::::: ', err)
//                     }

//                 }






//             }
//         })
// }


// // loop without async (used for short lists)
// hiltonVegasArray.map(hotelId => {
//     let checkIn = "2022-02-03"
//     let checkout = "2022-02-07"
//     availabilitySearch(hotelId,checkIn,checkout)
// })



// //GET ALL HOTEL IDS
// async function getAllHotels() {
//     const apiPromises = firstTenHilton.map(getAvailability)

//     await Promise.all(apiPromises)
// }

// // GET ALL AVAILABILITY STATUS FROM HOTELS 

// async function getAvailability(hotelId) {
//     let checkIn = "2022-05-28"
//     let checkout = "2022-05-30"

//     await availabilitySearch(hotelId, checkIn, checkout);
// }


// // getAllHotels();





// router.get('/november', (req, res, next) => {
//     res.status(200).json({
//         hotelsToTest: hiltonHotelIdList.length,
//         hotelsTested: goodHotels.length + hotelIdWoRatesInJanuary.length + hotelsNotFound.length,
//         hotelsWithRates: goodHotels,
//         hotelsWithOutRates: hotelIdWoRatesInNovember,
//         hotelsNotFound: hotelsNotFound,
//     })
// });



// router.get('/january', (req, res, next) => {
//     res.status(200).json({
//         batchCount: thirdHundredHilton.length,
//         hotelsTested: goodHotels.length + hotelIdWoRatesInJanuary.length + hotelsNotFound.length,
//         hotelsWithRates: {
//             count: goodHotels.length,
//             hotels: goodHotels
//         },
//         hotelsWithOutRates: {
//             count: hotelIdWoRatesInJanuary.length,
//             hotels: hotelIdWoRatesInJanuary,
//         },
//         hotelsNotFound: {
//             count: hotelsNotFound.length,
//             hotels: hotelsNotFound,
//         }
//     })
// });

// router.get('/february', (req, res, next) => {
//     res.status(200).json({
//         batchCount: thirdHundredHilton.length,
//         hotelsTested: goodHotels.length + hotelIdWoRatesInJanuary.length + hotelsNotFound.length,
//         hotelsWithRates: {
//             count: goodHotels.length,
//             hotels: goodHotels
//         },
//         hotelsWithOutRates: {
//             count: hotelIdWoRatesInJanuary.length,
//             hotels: hotelIdWoRatesInJanuary,
//         },
//         hotelsNotFound: {
//             count: hotelsNotFound.length,
//             hotels: hotelsNotFound,
//         }
//     })
// });


// router.get('/march', (req, res, next) => {
//     let checkIn = "2022-03-28"
//     let checkout = "2022-03-30"
//     res.status(200).json({
//         checkIn,
//         checkout,
//         batchCount: firstTenHilton.length,
//         hotelsTested: goodHotels.length + hotelIdWoRatesInJanuary.length + hotelsNotFound.length,
//         hotelsWithRates: {
//             count: goodHotels.length,
//             hotels: goodHotels
//         },
//         hotelsWithOutRates: {
//             count: hotelIdWoRatesInJanuary.length,
//             hotels: hotelIdWoRatesInJanuary,
//         },
//         hotelsNotFound: {
//             count: hotelsNotFound.length,
//             hotels: hotelsNotFound,
//         }
//     })
// });


// module.exports = router;