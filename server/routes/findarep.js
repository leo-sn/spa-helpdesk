const router = require("express").Router();
const fs = require('fs');
const repDatabase = './data/repDatabase.json';


// Reading videos database
function readRepDatabase() {
    const repFile = fs.readFileSync(repDatabase);
    const repData = JSON.parse(repFile)
    return repData;
}

router.get("/", (req, res) => {
    const repList = readRepDatabase();

    let foundRep = {};

    for(let i=0; i<repList.length; i++){

        if(repList[i].repCountry.toLowerCase() === `${req.query.country.toLowerCase()}`){

            for(let j=0; j<repList[i].repLocations.length; j++) {

                if(repList[i].repLocations[j].toLowerCase() === `${req.query.zipcode.toLowerCase().slice(0,3)}`){
                    foundRep = repList[i]
                }
            }
        } 
    }

    res.status(200).json(foundRep)

})


module.exports = router;