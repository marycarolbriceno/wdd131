const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

currentyear.innerHTML = `&copy;${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

// Store the selected elements 
const mainnav = document.querySelector('#navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listener 
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});