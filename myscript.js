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
        const divGrid = containerDiv.appendChild(document.createElement("div"));
        divGrid.classList.add("grid", "row");

        for(let k = 0; k < number; k++){
        const parentGrid = document.querySelectorAll(".row");
        let last = parentGrid[parentGrid.length-1];
        const rowGrid = last.appendChild(document.createElement("div"));
        rowGrid.classList.add("grid");
        rowGrid.addEventListener("mouseover", () =>{
            rowGrid.classList.add("hovered");
        });
        }

        
        divArray.push(divGrid);

        divArray[i].addEventListener("mouseover", () =>{
            divArray[i].classList.add("hovered");
        });

        
    };

    // for (let k = 0; k < number; k++){
    //     const rowGrid = containerDiv.appendChild(document.createElement("div"));
    //     divGrid.classList.add("grid", "row");


        
    //     divArray.push(divGrid);

    //     divArray[i].addEventListener("mouseover", () =>{
    //         divArray[i].classList.add("hovered");
    // }

    
}




// let width = 100 / number;

//         document.querySelector(".row").style.flexBasis = `${width}%`;

// for(let k = 0; i < number; k++){
//     const rowGrid = divGrid.appendChild(document.createElement("div"));
//     rowGrid.classList.add("grid");
// }