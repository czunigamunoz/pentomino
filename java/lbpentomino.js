const width = 13;
const height = 10;



function drawDropZone(){
    let dropZone = document.getElementById("drop-zone");
    for(let i=0; i<width*height; i++){
        dropZone.appendChild(document.createElement("div"));
    }
}

function draw(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
        ctx.fillStyle = 'red';
        ctx.fillRect(0,50,150,50);
        ctx.fillRect(50,0,50,50);
        ctx.fillRect(50,100,50,50);
    }
    img.src = 'img/rojo.png';
}

function hola(){
    console.log(img);
/*     ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach( (e) => {
        img.addEventListener(event, (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
    }); */
    img.addEventListener('dragstart', drag, false);
    img.addEventListener('drop', drop, false);
    console.log("hola");
}


function drag(e) {
    e.preventDefault();
    console.log(e);
}

function drop(e){
}

function init(){
    drawDropZone();
    draw();
/*     hola(); */
}

document.addEventListener('DOMContentLoaded', init);