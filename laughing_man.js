const SQUARE_COUNT=3;

document.addEventListener("DOMContentLoaded", () =>{
document.querySelector("#square").adddEventListener("click", () => {
  alert("OMG YOU CLICKED ME");
})

for (let i=0; i<SQUARE_COUNT; i++){
  let square = document.createElement('div');
  square.src = "laughingman.jpg";
  square.alt = "Catch the Laughing Man!";
  square.className="square";
  box.appendChild(square);
}
});