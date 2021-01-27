//HAMBURGER
const menuBtn = document.querySelector(".menu-btn");
let showNavMenu = document.querySelector(".nav-menu");
let menuClose = document.querySelectorAll(".nav-menu-li");


function togglehamburger() {
  menuBtn.classList.toggle("open"); //to toggle menu button animation
  showNavMenu.classList.toggle("show"); // to show nav
}
menuBtn.addEventListener("click", () => {
  togglehamburger();
});


//if screen width is bigger than 768px close hamburger
var viewportWidth;

var setViewportWidth = function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}

var logWidth = function () {
	if (viewportWidth > 770) {
    console.log('Wide viewport');
    menuBtn.classList.remove("open"); //to toggle menu button animation
    showNavMenu.classList.remove("show"); // to show nav
	} 
}
// Set our initial width and log it
setViewportWidth();
logWidth();

// On resize events, recalculate and log
window.addEventListener('resize', function () {
	setViewportWidth();
	logWidth();
}, false);


// Init AOS
function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    loop:true,
    mirror: false
  });
}
aos_init();



