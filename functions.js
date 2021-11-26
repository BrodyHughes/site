//jQuery???
const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

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
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode")
  } else if (body.classList.contains("bad-contrast")) {
    body.classList.remove("bad-contrast")
    body.classList.add("dark-mode")
  } else {
    body.classList.add("dark-mode")
  }
})

//low contrast mode function
badMode.addEventListener("click", function() {
  if (body.classList.contains("bad-contrast")) {
    body.classList.remove("bad-contrast")
  } else if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode")
    body.classList.add("bad-contrast")
  } else {
    body.classList.add("bad-contrast")
  }
})

mobileMenuButton.addEventListener("click", function() {
  if (mainMenu.style.display !== "flex") {
    $(mainMenu).slideToggle(400)
    mainMenu.style.display = "flex";
  } else {
    $(mainMenu).slideUp(400)
    mainMenu.style.display = "none";
  }
});

//yeah i should probably refactor some shit. dont @ me.
