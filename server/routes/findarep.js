const router = require("express").Router();
const fs = require('fs');
const repDatabase = './data/repDatabase.json';
const uniqid = require('uniqid');

// Reading JSON database
function readRepDatabase() {
    const repFile = fs.readFileSync(repDatabase);
    const repData = JSON.parse(repFile)
    return repData;
}

//GET request to get a rep list
router.get("/reps", (_req, res) => {

    const repList = readRepDatabase();
    res.status(200).json(repList);

})

//PUT request to update a rep
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


// POST request to create a rep
router.post("/reps", (req, res) => {
    const repList = readRepDatabase();
    req.body.repId = uniqid();
    
    //need to add the geolocation when a new sales zip is entered.
    
    repList.push(req.body)
    fs.writeFileSync('./data/repDatabase.json', JSON.stringify(repList))

    res.status(200).json('Rep created successfully')
})


//GET request for searching a rep
router.get("/rep-search", (req, res) => {
    const repList = readRepDatabase();

    let foundRep = false;

    for(let i=0; i<repList.length; i++){

        // WE FIRST LOOKUP IF THE COUNTRY MATCHES WITHOUT DEEPEN THE OBJECT
        if(repList[i].repCountry.toLowerCase() === `${req.query.country.toLowerCase()}`){

            // IF COUNTRY MATCHES, WE LOOK INSIDE THE OBJECT
            for(let j=0; j<repList[i].repLocations.length; j++) {

                if(repList[i].repLocations[j].toLowerCase() === `${req.query.zipcode.toLowerCase().slice(0,3)}`){
                    foundRep = repList[i]
                    console.log(foundRep)
                }
            }
        } 
    }

    if(foundRep) {
        res.status(200).json(foundRep)
    } else {
        res.status(200).json(false)
    }

})


module.exports = router;