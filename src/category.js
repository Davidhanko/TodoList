import { BTNCategory, listing } from "./Element";
import {
  removeCategoryFromLocalStorage,
  addCategoryToLocalStorage,
} from "./localLoading";

BTNCategory.addEventListener("click", () => {
  createCategory();
});

function createCategory() {
  let category = document.createElement("div");
  category.classList.add("category");
  let categoryName = document.createElement("div");
  categoryName.innerText = prompt("Category name:");
  addCategoryToLocalStorage(categoryName.innerText);

  let removeCategory = document.createElement("button");
  removeCategory.innerText = "X";
  removeCategory.addEventListener("click", () => {
    removeCategoryFromLocalStorage(categoryName.innerText);
    category.remove();
  });
  category.id = categoryName.innerText;
  listing.appendChild(category);
  category.appendChild(categoryName);
  category.appendChild(removeCategory);
}

function createCategoryFromArray(category) {
  let categoryA = document.createElement("div");
  categoryA.classList.add("category");
  let categoryAName = document.createElement("div");
  categoryAName.innerText = category;
  let removeCategoryA = document.createElement("button");
  removeCategoryA.innerText = "X";
  removeCategoryA.addEventListener("click", () => {
    removeCategoryFromLocalStorage(categoryAName.innerText);
    categoryA.remove();
  });
  categoryA.id = categoryAName.innerText;
  categoryA.appendChild(categoryAName);
  categoryA.appendChild(removeCategoryA);
  listing.appendChild(categoryA);
}

// get from local storage
export function extractCategoryFromArray(array) {
  for (let i = 0; i < array.length; i++) {
    createCategoryFromArray(array[i]);
  }
}
