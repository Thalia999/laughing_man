const SQUARE_COUNT=50;
const TIMER_SPEED=16.6;
const SPEED =5;
document.addEventListener("DOMContentLoaded", () =>{
document.querySelector("#square").addEventListener("click", () => {
  alert("OMG YOU CLICKED ME");
});
let squareDiv = document.querySelector("#square");
    squareDiv.addEventListener("mouseover", () => {
        squareDiv.style.backgroundColor = newColor();
    });
    squareDiv.addEventListener("mouseout", () => {
        squareDiv.style.backgroundColor = "red";
    });
    
let box=document.querySelector("#box");

for (let i=0; i<SQUARE_COUNT; i++){
  let square = document.createElement('img');
  square.src = "laughingman.jpg";
  square.alt = "Catch the Laughing Man!";
  square.className="square";
  box.appendChild(square);
}

Array.from(box.children).forEach((element)=>{
const parent =element.parentElement;
const maxX = parent.clientWidth - element.clientWidth;
const maxY = parent.clientHeight - element.clientHeight;

  let dx = SPEED * (Math.random() * 2 - 1 || 1);
  let dy = SPEED * (Math.random() * 2 - 1 || 1);

    if (dx === 0) dx = SPEED;
    if (dy === 0) dy = SPEED;


  let x = parseInt(element.style.left) || 225;
  let y = parseInt(element.style.top) || 175;

   if (element.tagName === "IMG") {
            element.addEventListener("mouseover", () => {
                element.src = "orochimaru.jpg";
            });
            element.addEventListener("mouseout", () => {
                element.src = "laughingman.jpg";
            });
        }


  setInterval(()=>{
if (x <= 0 || x >= maxX) {
  dx*=-1;
  element.style.borderColor = newColor();
}
if (y <= 0 || y >= maxY) {
  dy*=-1;
  element.style.borderColor = newColor();
} 

    x+=dx; 
    y+=dy;

    element.style.left = x + "px";
    element.style.top = y + "px";
  }, TIMER_SPEED)
});

});

function newColor(){
  let r=Math.floor(Math.random()*256);
  let g=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`;
}