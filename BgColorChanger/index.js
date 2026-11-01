
const bg = document.querySelector('.bg');

const bE = document.querySelector('#blueC');
const rE = document.querySelector('#RedC');
const gE = document.querySelector('#greenC');
const yE = document.querySelector('#yellowC');

// // Blue background
// function blue() {
//     bg.style.backgroundColor = "blue";
// }

// // Red background
// function red() {
//     bg.style.backgroundColor = "red";
// }

// // Green background
// function green() {
//     bg.style.backgroundColor = "green";
// }

// // Yellow background
// function yellow() {
//     bg.style.backgroundColor = "yellow";
// }

// // Event Listeners
// bE.addEventListener("click", blue);
// rE.addEventListener("click", red);
// gE.addEventListener("click", green);
// yE.addEventListener("click", yellow);

function changeColor(color) {
     bg.style.backgroundColor = color;  
}

bE.addEventListener("click" ,() =>changeColor('blue'));
rE.addEventListener("click" ,() =>changeColor('red'));
gE.addEventListener("click" ,() =>changeColor('green'));
yE.addEventListener("click" ,() =>changeColor('yellow'));