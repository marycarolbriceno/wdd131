const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

currentyear.innerHTML = `&copy;${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;