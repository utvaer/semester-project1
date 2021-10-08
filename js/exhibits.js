import { exhibitsArray } from "components/exhibitsList.js";
const exhibitsContainer = document.querySelector(".exhibits-container");


function exhibitsOverview () {
    for(let i = 0; i < exhibitsArray.length; i++)
    exhibitsContainer.innerHTML = 
    `<h2>${exhibitsArray.name}`
}

exhibitsOverview();