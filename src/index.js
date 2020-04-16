import "./styles.css";
import { PetApi } from "./api";

function callApi() {
  new PetApi().getPetById(1);
}

document.getElementById('myBtn').addEventListener("click", callApi);


// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use Parcel to bundle this sandbox, you can find more info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
