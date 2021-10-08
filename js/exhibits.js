import { exhibitsArray } from "./constants/exhibitsList.js";

const exhibitsContainer = document.querySelector(".exhibits-container");


function exhibitsOverview () {

    for(let i = 0; i < exhibitsArray.length; i++)
    exhibitsContainer.innerHTML = 
    `<h2>${exhibitsArray.name}</h2>`;
}

exhibitsOverview();