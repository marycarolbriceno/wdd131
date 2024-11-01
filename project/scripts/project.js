const nav = document.querySelector('#nav');
const hambutton = document.querySelector('#menu');

// Add a click event listener 
hambutton.addEventListener('click', () => {
    nav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }
    } else {
        console.error('Header element not found');
    }
});

const pets = [
    {
        pet: "cat",

        food: "A balanced diet is crucial for your cat's health. Provide high-quality cat food, and avoid giving them too many treats. Fresh water is a must.",

        rest: "Cats need about 16 hours of sleep per day. Ensure they have cozy, quiet spots to rest, away from the hustle and bustle of the home.",

        play: "Regular playtime helps keep your cat active and engaged. Interactive toys, such as feather wands or laser pointers, can be great. Keep their minds stimulated with puzzles or treat-dispensing toys.",

        attention: "Social interaction is essential. Spend quality time petting, grooming, and just being with your cat. They can be quite social creatures and thrive on companionship.",

        hygiene: "Regular grooming sessions help reduce shedding and prevent mats. Brush them according to their coat type, and keep their litter box clean to avoid health issues.",

        health: "Regular vet check-ups, vaccinations, and parasite control are essential to keep your cat healthy.",

        environment: "Cats love to climb and explore. Provide scratching posts and perches. Create a safe and stimulating environment with plenty of hiding spots and lookout points.",

        imgAddress: "images/cat.webp"
    },
    {
        pet: "dog",

        food: "Dog's diet is crucial to their well-being. Provide high-quality dog food suitable for their age, size, and activity level. Fresh water should always be available. Avoid human food, which can be harmful.",

        rest: "Dogs need a comfy and quiet place to rest. Puppies and seniors may need extra sleep. A cozy bed in a calm area will ensure they get the rest they need.",

        play: "Dogs thrive on playtime and exercise. Regular walks, fetch, and interactive toys keep them physically and mentally stimulated. Socializing with other dogs is also beneficial.",

        attention: "Dogs are social animals and crave companionship. Spend quality time with your dog, including grooming, training, and simply hanging out. They need your love and presence to stay happy.",

        hygiene: "Grooming needs depend on your dog's breed. Regular brushing, nail trimming, and ear cleaning are necessary. Bathing should be done occasionally with dog-specific shampoo to maintain a clean and healthy coat.",

        health: "Routine vet check-ups, vaccinations, and parasite control are essential. Always monitor your dog for signs of illness and seek veterinary advice when needed.",

        environment: "Create a safe and stimulating environment for your dog. Provide plenty of space for them to explore and play, both indoors and outdoors. Ensure your yard is secure to prevent escapes.",

        imgAddress: "images/dog.webp"
    }
];

const allLink = document.querySelector("#all");
const catsLink = document.querySelector("#cats");
const dogsLink = document.querySelector("#dogs");

allLink.addEventListener("click", () => {
    showInfo(pets);
});

catsLink.addEventListener("click", () => {
    showInfo(pets.filter(pet => pet.pet == "cat"));
});

dogsLink.addEventListener("click", () => {
    showInfo(pets.filter(pet => pet.pet == "dog"));
});


function showInfo(filter) {
    const infoContainer = document.querySelector("#info-container"); infoContainer.innerHTML = "";

    filter.forEach(pet => {
        let infoList = document.createElement("ul");
        let food = document.createElement("li");
        let rest = document.createElement("li");
        let play = document.createElement("li");
        let attention = document.createElement("li");
        let hygiene = document.createElement("li");
        let health = document.createElement("li");
        let environment = document.createElement("li");
        let img = document.createElement("img");

        food.innerHTML = `<strong>Food:</strong> ${pet.food}`;
        rest.innerHTML = `<strong>Rest:</strong> ${pet.rest}`;
        play.innerHTML = `<strong>Play:</strong> ${pet.play}`;
        attention.innerHTML = `<strong>Attention:</strong> ${pet.attention}`;
        hygiene.innerHTML = `<strong>Hygiene:</strong> ${pet.hygiene}`;
        health.innerHTML = `<strong>Health:</strong> ${pet.health}`;
        environment.innerHTML = `<strong>Environment:</strong> ${pet.environment}`;

        img.setAttribute("src", pet.imgAddress);
        img.setAttribute("alt", pet.pet);
        img.setAttribute("height", "300px");
        img.setAttribute("width", "600px");
        img.setAttribute("loading", "lazy");

        infoList.appendChild(img);
        infoList.appendChild(food);
        infoList.appendChild(rest);
        infoList.appendChild(play);
        infoList.appendChild(attention);
        infoList.appendChild(hygiene);
        infoList.appendChild(health);
        infoList.appendChild(environment);

        document.querySelector("#info-container").appendChild(infoList);
    });
}