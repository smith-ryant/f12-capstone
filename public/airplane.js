// console.log("hello");
const params = new URLSearchParams(window.location.search);
const param = params.get("nNumber");
console.log(param);

axios.get(`http://localhost:4000/api/airplanes/${param}`).then((response) => {
  const airplane = response.data;

  const airplaneContainer = document.getElementById("airplane-container");

  const airplaneElement = document.createElement("div");
  airplaneElement.classList.add("airplane");

  const imageElement = document.createElement("img");
  imageElement.src = airplane.imgURL;
  imageElement.alt = `Photo of ${airplane.nNumber}`;
  airplaneContainer.appendChild(airplaneElement);
  airplaneElement.appendChild(imageElement);
});
