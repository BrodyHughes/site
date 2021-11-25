
const darkMode = document.getElementById("dark-mode")
const darkState = document.getElementById("dark-state")
const badState = document.getElementById("bad-state")
const badMode = document.getElementById("bad-mode")
const body = document.getElementById("body")

darkMode.addEventListener("click", function() {

  if (body.classList.contains("dark-mode")){
      body.classList.remove("dark-mode")
      darkState.textContent = "off"
  } else if (body.classList.contains("bad-contrast")){
      body.classList.remove("bad-contrast")
      body.classList.add("dark-mode")
      badState.textContent = "off"
      darkState.textContent = "on"
  } else {
    body.classList.add("dark-mode")
    darkState.textContent = "on"
  }
})

badMode.addEventListener("click", function() {

  if (body.classList.contains("bad-contrast")){
    body.classList.remove("bad-contrast")
    badState.textContent = "off"
} else if (body.classList.contains("dark-mode")){
    body.classList.remove("dark-mode")
    body.classList.add("bad-contrast")
    darkState.textContent = "off"
    badState.textContent = "on"
} else {
  body.classList.add("bad-contrast")
  badState.textContent = "on"
}
})
