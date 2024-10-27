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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-thumb.jpg"
  },
  {
    templeName: "Adelaide Australia",
    location: "Adelaide, Australia",
    dedicated: "2000, June, 15",
    area: 10700,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4361-thumb.jpg"
  },
  {
    templeName: "Albuquerque New Mexico",
    location: "Albuquerque, United States",
    dedicated: "2000, March, 5",
    area: 34245,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-13838-thumb.jpg"
  }

];

createdTemplateCard(temples)

const homeLink = document.querySelector("#home")
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

oldLink.addEventListener("click", () => {
  createdTemplateCard(temples.filter(temple => temple.dedicated.split(",")[0].trim() <= 1900));
});

newLink.addEventListener("click", () => {
  createdTemplateCard(temples.filter(temple => temple.dedicated.split(",")[0].trim() >= 2000));
});

largeLink.addEventListener("click", () => {
  createdTemplateCard(temples.filter(temple => temple.area >= 90000));
});

smallLink.addEventListener("click", () => {
  createdTemplateCard(temples.filter(temple => temple.area <= 10000));
});

homeLink.addEventListener("click", () => {
  createdTemplateCard(temples);
});

function createdTemplateCard(filteredTemples) {
  document.querySelector("#temple-container").innerHTML = " ";
  filteredTemples.forEach(temple => {
    let card = document.createElement("div");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    dedication.innerHTML = `<strong>Dedication:</strong> ${temple.dedicated}`;
    area.innerHTML = `<strong>Area:</strong> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("height", "300px");
    img.setAttribute("width", "450px")
    img.setAttribute("loading", "lazy");


    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector("#temple-container").appendChild(card);
  });
}
