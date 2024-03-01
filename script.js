function toggleMode() {
  const html = document.documentElement
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}
  html.classList.toggle("light")
}

function openForm() {
  var modal = document.getElementById("form-modal")
  modal.style.display = "block"
}

function closeForm() {
  var modal = document.getElementById("form-modal")
  modal.style.display = "none"
}