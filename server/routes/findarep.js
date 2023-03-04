const router = require("express").Router();
const fs = require('fs');
const repDatabase = './data/repDatabase.json';
const uniqid = require('uniqid');

// Reading videos database
function readRepDatabase() {
    const repFile = fs.readFileSync(repDatabase);
    const repData = JSON.parse(repFile)
    return repData;
}

router.get("/reps", (_req, res) => {

    const repList = readRepDatabase();
    res.status(200).json(repList);

})

router.put("/reps", (req, res) => {

    const repList = readRepDatabase();
  
    for(i=0; i<repList.length; i++) {
        if(repList[i].repId === req.body.repId) {
            repList[i] = req.body
            break
        }
    }

    fs.writeFileSync('./data/repDatabase.json', JSON.stringify(repList))

    res.status(200).json('Rep updated successfully')
})

router.post("/reps", (req, res) => {
    const repList = readRepDatabase();
    req.body.repId = uniqid();
    
    repList.push(req.body)
    fs.writeFileSync('./data/repDatabase.json', JSON.stringify(repList))

    res.status(200).json('Rep created successfully')
})



router.get("/rep-search", (req, res) => {
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