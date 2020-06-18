let container = document.querySelector(".grid-container");

let num = prompt("How many rows and columns would you like?");

function grid(num) {
 container.style.setProperty("--grid-rows", num);
 container.style.setProperty("--grid-cols", num);

 for (i = 0; i < (num * num); i++) {
  let cell = document.createElement("div");
  container.appendChild(cell).className = "grid-box";
 };
 
 let gridBox = document.querySelectorAll(".grid-box");
 
 gridBox.forEach(gridBox => {
  gridBox.addEventListener("mouseover", function() {
   gridBox.classList.add("hovered");
  })
 })

 let btn = document.querySelector(".btn");
 btn.addEventListener("click", function() {
   gridBox.forEach(gridBox => {
    gridBox.classList.remove("hovered");
   })
  })

};

grid(num);



