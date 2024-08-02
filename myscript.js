const containerDiv = document.querySelector(".container");
let divArray = [];


const createBtn = document.querySelector("button");

createBtn.addEventListener("click", () => {
    
    let gridNumber;
    do{
        gridNumber = prompt("Enter number of squares x squares:");
    }
    while (gridNumber >= 100);
    
    createGrid(gridNumber);
});

function createGrid(number){
    divArray = [];
    containerDiv.replaceChildren();
    for (let i = 0; i < number; i++){
        const rowDiv = containerDiv.appendChild(document.createElement("div"));
        rowDiv.classList.add("row");
        let width = 100 / number;

        for(let k = 0; k < number; k++){
            const parentGrid = document.querySelectorAll(".row");
            let last = parentGrid[parentGrid.length-1];
            const square = last.appendChild(document.createElement("div"));
            square.classList.add("grid");

            square.style.flexBasis = `${width}%`;
            square.style.height = `${width}%`;

            square.addEventListener("mouseenter", () =>{
                square.classList.add("hovered");

                let currentOpacity = square.style.opacity;

                if(currentOpacity <= 0.9){
                    square.style.opacity = +square.style.opacity + 0.1;
                }

                let colors = ["#73d1c9", "#7FFFD4", "#71abd1", "#738ed1"];
                let random_color = colors[Math.floor(Math.random()*colors.length)];
                square.style.backgroundColor = random_color;
  
            });
        }
        divArray.push(rowDiv);

        divArray[i].style.flexBasis = `${width}%`; 
    };    
}