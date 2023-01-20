function setCanvasSize(){
    var height = window.innerHeight;
    var width = window.innerWidth;
    document.getElementById('canvas').style.height = height + "px";
    document.getElementById('canvas').style.width = width + "px";

    console.log(document.getElementById('canvas').style.height,
    document.getElementById('canvas').style.width);
}

window.addEventListener("resize",setWindowHeight,false);