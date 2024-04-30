//Import the necessary modules
const express = require("express"); //Import express
const cors = require("cors"); //Import cors
const path = require("path"); //Import path
const app = express();

//Import functions from the controller
const {
  getAllAirplanes,
  createAirplane,
  deleteAirplane,
  getAirplane,
} = require("./airplaneController.js");

//Define the middleware
app.use(express.json()); //Parse JSON
app.use(cors()); //Enable CORS

// Start with static files
// app.use(express.static(path.join(__dirname, "../public"))); //Serve static files

//Define the route to get all airplanes - working
app.get(`/api/airplanes`, getAllAirplanes);

// //Define the route to create a new airplane
app.post("/api/airplanes", createAirplane);

// //Define the route to delete an airplane
app.delete("/api/airplanes/:id", deleteAirplane);

//define the route to get a single airplane by nNumber
app.get(`/api/airplanes/:nNumber`, getAirplane);

app.get("/", (req, res) => {
  //Send the airplane.html file
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

app.get("/main.js", (req, res) => {
  //Send the airplane.html file
  res.sendFile(path.join(__dirname, "/../public/main.js"));
});

app.get("/styles.css", (req, res) => {
  //Send the airplane.html file
  res.sendFile(path.join(__dirname, "/../public/styles.css"));
});

app.get("/airplane", (req, res) => {
  //Send the airplane.html file
  res.sendFile(path.join(__dirname, "/../public/airplane.html"));
});

app.get("/airplaneImageModaljs", (req, res) => {
  //Send the airplane.html file
  res.sendFile(path.join(__dirname, "/../public/airplaneImageModal.js"));
});

app.get("/resources/N25GR.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/resources/N25GR.jpeg"));
});

app.get("/resources/N128JP.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/resources/N128JP.jpeg"));
});

app.get("/resources/N26EM.webp", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/resources/N26EM.webp"));
});

app.get("/resources/N509JJ.webp", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/resources/N509JJ.webp"));
});

//
app.get("/resources/N34RF.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/resources/N34RF.jpeg"));
});

//Define the route to server the airplane image
app.get("/airplane/resources/N25GR.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/resources/N25GR.jpeg"));
});

//Define the route to server the airplane image
app.get("/airplane/resources/N128JP.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/resources/N128JP.jpeg"));
});

//Define the route to server the airplane image
app.get("/airplane/resources/N26EM.webp", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/resources/N26EM.webp"));
});

//Define the route to server the airplane image
app.get("/airplane/resources/N509JJ.webp", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/resources/N509JJ.webp"));
});

//Define the route to server the airplane image
app.get("/airplane/resources/N34RF.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/resources/N34RF.jpeg"));
});

//Start the server
app.listen(process.env.PORT || 4001, () => {
  console.log(`Server is running on port ${process.env.PORT || 4001}`);
});
