function toggleState(popup) {
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
}

export function togglePopup() {
  let popup = document.getElementById("popupForm");
  toggleState(popup);
}
