function draw(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    img = new Image();
    img.onload = () => {
        ctx.fillStyle = 'red';
        ctx.fillRect(10,10,70,50);
        ctx.fillRect(40,60,70, 60);
    }
    img.src = 'img/rojo.png';
    console.log(img);
}

function drag(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.setDragImage(img, 100, 100);  
}

function drop(e){
    var imgDrop = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(imgDrop));
}

function inicio(){
    draw();
    ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach( (e) => {
        img.addEventListener(event, (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
    });
    img.addEventListener('drop', drop, false);
    img.addEventListener('dragstart', drag, false);
}

window.onload=inicio;