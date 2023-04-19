import { extractObjectFromArray } from "./objectCreator.js";
let storageArray = [];

export default function addObjectToLocalStorage(object) {
  storageArray.push(object);
  localStorage.setItem("storageArray", JSON.stringify(storageArray));
}

export function getArrayFromLocalStorage() {
  storageArray = JSON.parse(localStorage.getItem("storageArray"));
  if (storageArray === null) {
    storageArray = [];
  }
  extractObjectFromArray(storageArray);
}

export function removeItemFromLocalStorage(object) {
  storageArray = storageArray.filter((item) => item !== object);
  localStorage.setItem("storageArray", JSON.stringify(storageArray));
}
