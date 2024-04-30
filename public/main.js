//Select the element with the ID airplane_container
const airplaneContainer = document.getElementById("airplane-container");

// Select the form element
const form = document.getElementById("addAirplane-form");

//Set the base URL for the API
const baseURL = "http://localhost:4001/api/airplanes";

//Function to use axios and fetch airplanes from the API
const getAllAirplanes = () =>
  axios.get(baseURL).then(airplaneCallback).catch(errCallback);

//Function to create a new airplane
const createAirplane = (body) =>
  axios.post(baseURL, body).then(airplaneCallback).catch(errCallback);

//Callback function to handle successful response for fetching airplanes
const airplaneCallback = ({ data: airplanes }) => {
  displayAirplanes(airplanes);
};

//Callback function to handle errors
const errCallback = (err) => console.log(err);

//Function to delete an airplane
const deleteAirplane = (id) =>
  axios.delete(`${baseURL}/${id}`).then(airplaneCallback).catch(errCallback);
//Function to update an airplane
const updateAirplane = (id, type) =>
  axios
    .put(`${baseURL}/${id}`, { type })
    .then(airplaneCallback)
    .catch(errCallback);

//Event handler for form submission
function submitHandler(event) {
  event.preventDefault();
  //access the input fields
  let nNumber = document.getElementById("nNumber");
  let year = document.getElementById("airplane-year");
  let make = document.getElementById("airplane-make");
  let model = document.getElementById("airplane-model");
  let price = document.getElementById("airplane-price");
  let imgURL = document.getElementById("airplane-imgURL");
  //creating an object with the input values
  let bodyObj = {
    nNumber: nNumber.value,
    year: year.value,
    make: make.value,
    model: model.value,
    price: price.value,
    imgURL: imgURL.value,
  };

  //creating a new airplane with the input values
  createAirplane(bodyObj);

  //reset the form/input fields
  nNumber.value = "";
  year.value = "";
  make.value = "";
  model.value = "";
  price.value = "";
  imgURL.value = "";
}

//Function to create an airplane card and append it to the airplane container
function createAirplaneCard(airplane) {
  //create a new div element for the card
  const airplaneCard = document.createElement("div");
  airplaneCard.classList.add("airplane-card");
  //set the html content of the house card element unsing teplate literals

  // Add the nNumber as a data attribute to the card
  airplaneCard.dataset.nNumber = airplane.number;
  airplaneCard.innerHTML = `
    <img alt="photo of airplane" src=${airplane.airplaneimageurl} class="airplane-cover-img" onclick="openModal('${airplane.nnumber}')" data-nNumber=${airplane.nNumber} />
    <p class="nNumber">${airplane.nnumber}</p>
    <p class="airplane-year">${airplane.airplaneyear}</p>
    <p class="airplane-make">${airplane.airplanemake}</p>
    <p class="airplane-model">${airplane.airplanemodel}</p>
    <p class="airplane-price">${airplane.airplaneprice}</p>
    <div class="container-btns">
      <button class="delete-btn" onclick="deleteAirplane(${airplane.id})"> Delete </button>
    </div>
  `;
  //appending the airplane card to the airplane container
  airplaneContainer.appendChild(airplaneCard);
}

function openModal(nNumber) {
  window.location.href = `http://localhost:4001/airplane/?nNumber=${nNumber}`;
}

const displayAirplanes = (arr) => {
  //clear the airplane container
  airplaneContainer.innerHTML = ``;
  //iterate over the array of airplanes
  for (let i = 0; i < arr.length; i++) {
    //create an airplane card for each airplane
    createAirplaneCard(arr[i]);
  }
};

//Add event listeners to the update buttons
// updateAirplaneBtn.addEventListener("click", updateAirplane);

const deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const id = this.parentElement.parentElement.dataset.id;
    deleteAirplane(id);
  });
});

//Add event listener to the form for form submission
form.addEventListener("submit", submitHandler);

//Fetch airplanes from the API and display them on page load
getAllAirplanes();
