//const variables. grabbing a bunch of shit from the dom via id
const darkMode = document.getElementById("dark-mode")
const darkState = document.getElementById("dark-state")
const badState = document.getElementById("bad-state")
const badMode = document.getElementById("bad-mode")
const body = document.getElementById("body")
const mobileMenuButton = document.getElementById("mobilemenu")
const mainMenu = document.getElementById("mainmenu")

//dark mode function
darkMode.addEventListener("click", function() {
  if (body.classList.contains("dark-mode")){
      body.classList.remove("dark-mode")
  } else if (body.classList.contains("bad-contrast")){
      body.classList.remove("bad-contrast")
      body.classList.add("dark-mode")
  } else {
    body.classList.add("dark-mode")
  }
})

//low contrast mode function
badMode.addEventListener("click", function() {
  if (body.classList.contains("bad-contrast")){
    body.classList.remove("bad-contrast")
} else if (body.classList.contains("dark-mode")){
    body.classList.remove("dark-mode")
    body.classList.add("bad-contrast")
} else {
  body.classList.add("bad-contrast")
}
})

//show / hide menu on mobile
mobileMenuButton.addEventListener("click",function() {
  if (mainMenu.classList.contains("main-menu-on")) {
    mainMenu.classList.remove("main-menu-on")
  } else {
    mainMenu.classList.add("main-menu-on")
  }
})

//yeah i should probably refactor some shit. dont @ me.
