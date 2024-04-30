// This is the code for airplane image modal window.
const params = new URLSearchParams(window.location.search);
const param = params.get("nNumber");

axios.get(`http://localhost:4001/api/airplanes/${param}`).then((response) => {
  const airplane = response.data;

  const airplaneContainer = document.getElementById("airplane-container");

  const airplaneElement = document.createElement("div");
  airplaneElement.classList.add("airplane");

  const imageElement = document.createElement("img");
  imageElement.src = airplane.airplaneimageurl;
  imageElement.alt = `Photo of ${airplane.nNumber}`;
  airplaneContainer.appendChild(airplaneElement);
  airplaneElement.appendChild(imageElement);
});
