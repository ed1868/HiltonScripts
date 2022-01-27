const express = require('express');
const router = express.Router();
const Hotels = require('./hiltonDerbyHotels');
const axios = require('axios');




let hotelDataSet = []



queryHotel = (hotelProvider,id, checkin, checkout) => {
    
    
    console.log(`HOTEL CHECK IN RANGE : ${checkin} `);
    console.log(`HOTEL CHECK OUT RANGE : ${checkout} `);

    


    axios({
        method: "post",
        url: "https://go3-tn4-aws.derbysoftca.com/api/go/bookingusb/v4/availability",
        headers: {
            Authorization:
                "2Rrae9SU2G50R3ZmGJ0000015a5333652005486d8bc9da2eb0f4780f",
        },
        data: {
            "header": {
                "supplierId": `${hotelProvider}`,
                "distributorId": "OVERSEAS",
                "version": "v4.0",
                "token": "1630430035483"
            },
            "stayRange": {
                "checkin": checkin,
                "checkout": checkout
            },
            "roomCriteria": {
                "roomCount": 1,
                "adultCount": 1,
                "childCount": 0,
                "childAges": []
            },
            "hotelId": id,
            "iata": "",
            "promoteCode": "",
            "isAfterPromotion": false
        }
    })
        .then((payload) => {
            if (payload.status == "200") {
                if (payload.data.roomRates.length >= 1) {
                    succesfulQueries.push(
                        payload.data.hotelId
                    )


                } else {
                    console.log(payload.data)
                    noRateQueries.push({ hotelId: id, stayRange: payload.data.stayRange })
                }

            }
            console.log('succesful hotel queries ::::: ', succesfulQueries.length);
            console.log('succesful hotel queries WITH NO RATES ::::: ', noRateQueries.length);
        })
        .catch((err) => {



            if (err && err.response) {
                // console.log('ERROR RESPONSE::::::', err.response)
                if (err.response.status == 500) {

                    if (err.data) {
                        console.log(err)
                        console.log("TIMEOUT OR INTERNAL SERVER ERROR :: ", id);
                        setTimeout(function () {
                            console.log("ENTERING SET TIMEOUT FOR HOTEL : ", id);
                            // console.log(':::::::::::::::ERROR FIX SET TIME OUT ID :::::::::::::::::::::::::::::::', id)
                            queryHotel(id, checkin, checkout)
                        }, 5000)
                    }

                } else {
                    console.log('OTHER ERROR ::::::::::>>>>>>>>>>> ', err)
                }

            } else {
                console.log('OTHER ERROR ::::::::::>>>>>>>>>>> ', err)
            }

            console.log('unsuccesful hotel queries :::::: ', unsuccesfulQueries.length)
        });
}


async function getQuery(hotelId) {
    let checkin = "2021-09-10";
    let checkout = "2021-09-12";

    await queryHotel(hotelId, checkin, checkout)


}




router.get('/availability', (req, res, next) => {
    res.status(200).json(others)
});



router.post('/availability', (req, res, next) => {
    console.log('REQ BODY :::::: ', req.body);

    let hotelId = req.body.hotelId;
    let hotelName = req.body.searchTearm;
    let hotelProvider = req.body.hotelProvider;
    let checkinRange = req.body.checkin;
    let checkoutRange = req.body.checkout;


    console.log('HOTEL ID : ', hotelId);
    console.log('HOTEL NAME : ', hotelName);

    axios({
        method: "post",
        url: `https://go-us.derbysoftsec.com/api/go/shoppingengine/v4/hotels/${hotelProvider}/setup`,
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
                    supplierId: `${hotelProvider}}`,
                    hotelId: hotelId,
                    status: "Actived",
                },
            ],
        },
    })
})



module.exports = router;