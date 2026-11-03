// Get date . JS
document.getElementById("lastModified").textContent = document.lastModified;

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
// Get date . JS

//the Menu Hambergur Button
const mainNavUl = document.querySelector(".ul-navigation");
const hambergurButton = document.querySelector("#menu");

hambergurButton.addEventListener('click', () => {
	mainNavUl.classList.toggle('show');
	hambergurButton.classList.toggle('show');
});
//the Menu Hambergur Button