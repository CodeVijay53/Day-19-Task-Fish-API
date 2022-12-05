//API Call
const API_URL = "https://www.fishwatch.gov/api/species";
const result = document.getElementById("photo-area");
// Function to load photos
async function loadphotos() {
  try {
    const res = await fetch(API_URL);
    const jsonres = await res.json();
    console.log(jsonres);
    jsonres.map((data) => {
      //Here the photos will be appended
      result.innerHTML += `<div id="card" class="card" style="width: 18rem;">
      <img src="${data["Species Illustration Photo"].src}" class="card-img-top" alt="photography">
      <div class="card-body">
          <p class="card-body"> <strong>Name</strong>: ${data["Species Name"]}</p>
          <p class="card-body"> <strong>Calories</strong>: ${data["Calories"]}</p>
      </div>
  </div>`;
    });
  } catch (err) {
    console.log(err);
  }
}
