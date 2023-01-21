let height = 0;
let width = 0;

const canvas = document.querySelector('canvas')
canvas.style.backgroundColor="blue";

const ctx = canvas.getContext('2d');

const canvasX = canvas.width;
const canvasY = canvas.height;

function setCanvasSize(){

    height = window.innerHeight;
    width = window.innerWidth;

    document.getElementById('canvas').style.height = height + "px";
    document.getElementById('canvas').style.width = width + "px";

    console.log(document.getElementById('canvas').style.height,
    document.getElementById('canvas').style.width);
}

window.onload = () => {

    setCanvasSize()
 
    window.addEventListener("resize",setCanvasSize,false);
}