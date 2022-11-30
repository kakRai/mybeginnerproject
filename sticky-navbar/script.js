const navBar = document.querySelector(".nav_bar"),
	  botContainer = document.querySelector(".bottom_container");

window.addEventListener("scroll", ()=>{
	if (window.scrollY > botContainer.offsetTop - navBar.offsetHeight) {
		navBar.classList.add("active");
	} else {
		navBar.classList.remove("active");
	}
})