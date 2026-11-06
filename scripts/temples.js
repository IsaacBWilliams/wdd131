// Get date . JS
document.getElementById("lastModified").textContent = document.lastModified;

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
// Get date . JS

//the Menu Hambergur Button
const mainNavUl = document.querySelector(".ul-navigation");
const hambergurButton = document.querySelector("#menu");

// hambergurButton.addEventListener('click', () => {
// 	mainNavUl.classList.toggle('show');
// 	hambergurButton.classList.toggle('show');
// });
//the Menu Hambergur Button
// The new listner
hambergurButton.addEventListener('click', (event) => {
    event.preventDefault();

    const isOpen = hambergurButton.getAttribute('aria-expanded') === 'true';

    mainNavUl.classList.toggle('show', !isOpen);
    hambergurButton.classList.toggle('show', !isOpen);

    hambergurButton.setAttribute('aria-expanded', String(!isOpen));

    hambergurButton.setAttribute(
        'aria-label',
        isOpen ? 'Open navigation menu' : 'Close navigation menu'
    );
});