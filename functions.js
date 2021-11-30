//jQuery???
const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//const variables. grabbing a bunch of shit from the dom via id
const darkMode = document.getElementById("dark-mode")
const darkState = document.getElementById("dark-state")
const body = document.getElementById("body")
const mobileMenuButton = document.getElementById("mobilemenu")
const mainMenu = document.getElementById("mainmenu")
const artLink = document.getElementById("art-content")
const homeLink = document.getElementById("home-content")
const bodyContent = document.getElementById("body-content")


//dark mode function
darkMode.addEventListener("click", function() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode")
    darkMode.innerHTML = "dark mode"
  } else {
    body.classList.add("dark-mode")
    darkMode.innerHTML = "light mode"
  }
})

// mobile menu + jquery smooth scroll
mobileMenuButton.addEventListener("click", function() {
  if (mainMenu.style.display !== "flex") {
    mainMenu.style.display = "flex";
  } else {
    mainMenu.style.display = "none";
  }
});

// body content replacement with links
artLink.addEventListener("click", function() {
    bodyContent.innerHTML =`
    <div class="content-wrap portfolio-wrap">
          <h2>here is some of my art</h2>
          <img src="celo.gif" alt="portfolio item" class="portfolio-item" width="100%" height="100%">
          <img src="Colors.gif" alt="portfolio item" class="portfolio-item" width="100%" height="100%">
          <img src="Fixed-smoke.gif" alt="portfolio item" class="portfolio-item" width="100%" height="100%">
          <img src="Gladiator-Fixed.gif" alt="portfolio item" class="portfolio-item" width="100%" height="100%">
          <img src="mf-doom-smaller.gif" alt="portfolio item" class="portfolio-item" width="100%" height="100%">
          <img src="Poggers-Bee.gif" alt="portfolio item" class="portfolio-item" width="100%" height="100%">
          <img src="Gcoin-final.gif" alt="portfolio item" class="portfolio-item" width="100%" height="100%">
          <img src="hat-2compound-final.gif" alt="portfolio item" class="portfolio-item" width="100%" height="100%">
          <img src="Ubiq-Coin-Fixed.gif" alt="portfolio item" class="portfolio-item" width="100%" height="100%">
          <img src="Plant-cropped.png" alt="portfolio item" class="portfolio-item" width="100%" height="100%">
          <img src="rainbow-skull.gif" alt="portfolio item" class="portfolio-item" width="100%" height="100%">
          <img src="sorry-bunny2.gif" alt="portfolio item" class="portfolio-item" width="100%" height="100%">
          </div>
    `
});

homeLink.addEventListener("click", function() {
  bodyContent.innerHTML =`
  <h2>welcome to my website</h2>
  <p>high profile crypto investor, nft aficionado, wild web developer, aspiring solidity expert, <a href="https://rainbow.me" target="_blank" id="rainbow">rainbow (tm)</a> customer support agent, world renowned designer </p>
  <p>feel free to contact me at the email link above or the social media links below</p>
  `
});

//yeah i should probably refactor some shit. dont @ me.
