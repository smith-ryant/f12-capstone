//Import the necessary modules
const express = require("express"); //Import express
const cors = require("cors"); //Import cors
const path = require("path"); //Import path
const app = express();

//Import functions from the controller
const {
  getAirplanes,
  getAirplane,
  createAirplane,
  updateAirplane,
  deleteAirplane,
} = require("./controller.js");

//Define the middle
app.use(express.json()); //Parse JSON
app.use(cors()); //Enable CORS

//Define the route to get all airplanes
app.get(`/api/airplanes`, getAirplanes);

//Start with static files
app.use(express.static(path.join(__dirname, "../public"))); //Serve static files

//Define the route to the home page
app.get("/", (req, res) => {
  //Send the index.html file
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/airplane", (req, res) => {
  //Send the airplane.html file
  res.sendFile(path.join(__dirname, "/../public/airplane.html"));
});

app.get("/airplane/airplane.js", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/airplane.js"));
});

//define the route to get a single airplane by nNumber
app.get(`/api/airplanes/:nNumber`, getAirplane);

app.get(`/airplane/resources/:filename`, (req, res) => {
  const { filename } = req.params;
  res.sendFile(path.join(__dirname, `/../public/resources/${filename}`));
});

// //Define the route to create a new airplane
app.post("/api/airplanes", createAirplane);

// //Define the route to delete an airplane
app.delete("/api/airplanes/:id", deleteAirplane);

// //Define the route to update an airplane
// app.put("/api/airplanes/id", updateAirplane);

//Run the server on port and listen for requests
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
