//Import the airplane array from the db.json file
const airplanes = require("./db.json");

//Initialize a global variable to store the airplane array
let globalID = 6;

module.exports = {
  //Method to get all airplanes
  getAirplanes: (req, res) => res.status(200).send(airplanes),

  getAirplane: (req, res) => {
    const { nNumber } = req.params;
    const airplane = airplanes.find((plane) => plane.nNumber === nNumber);
    if (airplane) {
      res.status(200).send(airplane);
    } else {
      res.status(404).send("Airplane not found");
    }
  },
  //Method to create a new airplane
  createAirplane: (req, res) => {
    //Extracting the airplane data from the request body
    let { globalID, nNumber, year, make, model, price, imgURL } = req.body;
    //Creating a new airplane from the extracted data
    let newAirplane = {
      id: globalID,
      nNumber,
      year,
      make,
      model,
      price,
      imgURL,
    };
    //Adding the new airplane to the airplane array
    airplanes.push(newAirplane);
    res.status(200).send(airplanes);
    //Incrementing the airplane ID for the next airplane
    globalID++;
  },

  //Method to delete an airplane
  deleteAirplane: (req, res) => {
    //Extract the airplane ID from the request parameters
    let index = airplanes.findIndex((elem) => elem.id === +req.parms.id);
    //Removing the airplane from the airplane array using the index
    airplanes.splice(index, 1);
    //Send the airplane array as the response
    res.status(200).send(airplanes);
  },
};

//Method to update an airplane price
//Extract the airplane ID from the request parameters
//Extract the updated airplane data from the request body
//Find the index of the airplane with the given ID
//Update the airplane price with the new price
//Send the updated airplane as the response
