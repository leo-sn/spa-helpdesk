require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const app = express();
const axios = require("axios");

const passportSetup = require("./passport")
const authRoute = require("./routes/auth");

/* ****************** */
/*     MIDDLEWARE     */
/* ****************** */

app.use(
    cookieSession({
        name: "session",
        keys: ["leo"],
        maxAge: 24*60*60*100,
    })
)

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

const port = process.env.PORT || 8080;

/* ****************** */
/*       ROUTING      */
/* ****************** */

app.use("/auth", authRoute);


/* ****************** */
/*    SERVER RUNS     */
/* ****************** */


// const API_KEY = 'AIzaSyBycTaUKUsTtBRLjVLIeSKO_CNSR9XcFaA'

// // function getCoordinates(address,country){
// //     axios.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+'&country='+country+'&key='+API_KEY)
// //     .then(res => {

// //         const latitute = res.data.results[0].geometry.location.lat
// //         const longitute = res.data.results[0].geometry.location.lng

// //         console.log('lat and lon:', latitute,' and' ,longitute)
// //     })
    //   .then(data => {
    //     const latitude = res.data.results[0].geometry.location.lat;
    
    //     const longitude = data.results.geometry.location.lng;
    //     console.log({latitude, longitude})
    //     })
// }

// getCoordinates('V6Y','ca');


/* ****************** */
/*    SERVER START    */
/* ****************** */

app.listen(port, () => console.log(`Listening on port ${port}...`));


