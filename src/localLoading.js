import { extractObjectFromArray } from "./objectCreator.js";
import { extractCategoryFromArray } from "./category";

let storageArray = [];
let categoryArray = [];

//category loading
export function addCategoryToLocalStorage(category) {
  categoryArray.push(category);
  localStorage.setItem("categoryArray", JSON.stringify(categoryArray));
}

export function getCategoryFromLocalStorage() {
  categoryArray = JSON.parse(localStorage.getItem("categoryArray"));
  if (categoryArray === null) {
    categoryArray = [];
  }
  extractCategoryFromArray(categoryArray);
}

export function removeCategoryFromLocalStorage(category) {
  categoryArray = categoryArray.filter((e) => e !== category);

  // Find all objects withing category and remove them
  let objects = getAllObjectsWithingCategory(category);

  for (let i = 0; i < objects.length; i++) {
    removeItemFromLocalStorage(objects[i]);
  }

  localStorage.setItem("categoryArray", JSON.stringify(categoryArray));
}

//object loading
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

export function getAllObjectsWithingCategory(category) {
  return storageArray.filter((e) => e.ownArray === category);
}

export function removeItemFromLocalStorage(object) {
  storageArray = storageArray.filter((item) => item !== object);

  localStorage.setItem("storageArray", JSON.stringify(storageArray));
}
