import "./style.css";
import { togglePopup } from "./form";
import { default as classCreator } from "./objectCreator";
import { BTNForm, BTNPopup } from "./Element";
import { getArrayFromLocalStorage } from "./localLoading";

BTNForm.addEventListener("click", () => {
  classCreator();
  togglePopup();
});

BTNPopup.addEventListener("click", () => {
  togglePopup();
});

window.onload = function () {
  getArrayFromLocalStorage();
};
