/* Global Varibales */

const width = 13;
const height = 10;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();

const dropZone = document.getElementById("drop-zone");

class figure{
    constructor(){
    }

    draw() {
        img.addEventListener('load', () =>{
            ctx.fillStyle = 'red';
            ctx.fillRect(40,0,40,40);
            ctx.fillRect(0,40,120,40);
            ctx.fillRect(40,80,40,40);
        });
        img.src = 'img/rojo.png';             
    }
}

function drawDropZone(){
    for(let i=0; i<width*height; i++){
        dropZone.appendChild(document.createElement("div"));
    }
/*     ['dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach( (e) => {
        img.addEventListener(event, (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
    }); */
    const cruz = new figure()
    cruz.draw();
}

function drag(e) {
    console.log(e);
}

function drop(e){
}

function hola(){
    img.addEventListener('dragstart', drag, false);
    img.addEventListener('drop', drop, false);
}

function init(){
    drawDropZone();
    const cuadro = document.getElementById("cuadro");
    cuadro.addEventListener('dragstart', (e) =>{ console.log(e)});
}

document.addEventListener('DOMContentLoaded', init);