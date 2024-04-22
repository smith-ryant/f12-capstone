// function openModal(src) {
//   console.log(src);
//   //Get the modal
//   const modal = document.getElementById("modal");

//   //Get the image and insert it inside the modal - use its "alt" text as a caption
//   const img = document.getElementById("img01");
//   img.src = src;

//   //Get the <span> element that closes the modal
//   const span = document.getElementsByClassName("close")[0];

//   //Show the modal
//   modal.style.display = "block";

//   //When the user clicks on <span> (x), close the modal
//   span.onclick = function () {
//     modal.style.display = "none";
//   };
// }

// document.addEventListener("DOMContentLoaded", (event) => {
//   const imgs = document.querySelectorAll(".airplane_imgURL");
//   const captionText = document.getElementById("caption");

//   imgs.forEach((img) => {
//     img.onclick = function (event) {
//       event.preventDefault(); // Prevent the default action

//       // Get the nNumber value from the clicked image
//       const nNumber = img.getAttribute("data-nNumber");

//       // Construct the image source based on the nNumber value
//       const src = `resources/${nNumber}.jpeg`;

//       //Open the modal with the constructed image source
//       openModal(src);

//       captionText.innerHTML = img.alt;
//     };
//   });
// });
