var vecBt, vecBt_niveles, vecImg, vecImg_fig, numi; 
var vecniveles = [
    [0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0]
];

function niveles(f){
    var i, ni;
    ni = parseInt(f.target.id);
    for(i=0; i<vecImg.length; i++){
        if(vecniveles[ni][i] == 0){
            vecImg[i].src = "img/blanco.png";
        }else{
            vecImg[i].src = "img/gris.png";
        }
    }
}

var fig1 = [
    [//N
        0,1,0,0,0,
        0,1,0,0,0,
        1,1,0,0,0,
        1,0,0,0,0,
        0,0,0,0,0
    ],
    [//U
        3,3,3,0,0,
        3,0,3,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0
    ],
    [//L
        10,10,10,10,0,
        0,0,0,10,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0
    ],
    [//Z
        0,2,2,0,0,
        0,2,0,0,0,
        2,2,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0
    ],
    [//Y
        0,11,0,0,0,
        11,11,11,11,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0
    ],
    [//T
        4,4,4,0,0,
        0,4,0,0,0,
        0,4,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0
    ],
    [//V
        7,0,0,0,0,
        7,0,0,0,0,
        7,7,7,0,0,
        0,0,0,0,0,
        0,0,0,0,0
    ],
    [//X
        0,12,0,0,0,
        12,12,12,0,0,
        0,12,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0
    ],
    [//P
        5,5,0,0,0,
        5,5,5,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0
    ],
    [//W
        0,0,6,0,0,
        0,6,6,0,0,
        6,6,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0
    ],
    [//F
        0,0,9,0,0,
        9,9,9,0,0,
        0,9,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0
    ],
    [//I
        8,8,8,8,8,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0
    ]
];

function colorear(f){
    var index = parseInt(f.target.id);
    for(let i=0; i<vecImg_fig.length; i++){
        switch(fig1[index][i]){
            case 1:
                vecImg_fig[i].src = "img/rojo.png";
                break;
            case 2:
                vecImg_fig[i].src = "img/azul_neon.jpg";
                break;
            case 3:
                vecImg_fig[i].src = "img/amarillo.png";
                break;
            case 4:
                vecImg_fig[i].src = "img/azul_cielo.png";
                break;
            case 5:
                vecImg_fig[i].src = "img/cafe.png";
                break;
            case 6:
                vecImg_fig[i].src = "img/verde.jpg";
                break;
            case 7:
                vecImg_fig[i].src = "img/morado.png";
                break;
            case 8:
                vecImg_fig[i].src = "img/rosado.png";
                break;
            case 9:
                vecImg_fig[i].src = "img/azul.png";
                break;
            case 10:
                vecImg_fig[i].src = "img/naranja.png";
                break;
            case 11:
                vecImg_fig[i].src = "img/lima.png";
                break;
            case 12:
                vecImg_fig[i].src = "img/negro.png";
                break;
            default:
                vecImg_fig[i].src = "img/blanco.png";
        }
    }
}


var vecfig =[
    [0,1,3,3,3,0,0,0,1,3,0,3,0,0,1,1,10,10,10,10,0,1,2,2,0,0,10,0,0,2,0,11,0,0,0,2,2,11,11,11,11,0,4,4,4,0,0,0,0,0,4,7,0,0,12,0,0,4,7,0,12,12,12,5,5,7,7,7,12,0,5,5,5,0,0,9,0,0,0,6,9,9,9,0,0,6,6,0,9,0,0,6,6,8,8,8,8,8],
    [8,0,1,10,0,0,0,8,0,1,10,10,10,10,8,1,1,0,7,7,7,8,1,0,0,9,0,7,8,3,3,9,9,0,7,0,0,3,6,9,9,0,4,3,3,6,6,0,0,4,4,4,12,6,6,0,4,0,12,12,12,0,0,0,0,0,12,2,2,0,11,11,11,11,0,2,0,0,11,0,0,0,2,2,0,0,5,5,0,0,0,0,5,5,5,0,0,0],
    [0,5,5,7,7,7,0,5,5,5,7,0,9,0,0,0,6,7,9,9,9,0,6,6,1,9,0,0,6,6,8,1,1,1,0,11,0,8,0,0,1,0,11,11,8,3,3,3,0,11,0,8,3,0,3,0,11,12,8,0,0,2,2,12,12,12,2,2,2,0,0,12,4,10,0,0,0,4,4,4,10,10,10,10,0,0,4,0,0,0,0,0,0,0,0,0,0,0],
    [5,5,8,0,3,7,7,5,5,8,3,3,7,7,0,5,8,3,0,9,0,0,11,8,6,6,9,0,11,11,1,1,6,0,0,0,11,0,1,1,0,12,4,11,0,0,0,0,12,4,4,2,2,2,0,0,4,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

function figuras(f){
    var i, ni;
    ni = parseInt(f.target.id);
    for(i=0; i<vecImg_fig.length; i++){
        if(vecfig[ni][i] == 1){
            vecImg_fig[i].src = "img/rojo.png";
        }else if(vecfig[ni][i] == 2){
            vecImg_fig[i].src = "img/azul_neon.jpg";
        }else if(vecfig[ni][i] == 3){
            vecImg_fig[i].src = "img/amarillo.png";
        }else if(vecfig[ni][i] == 4){
            vecImg_fig[i].src = "img/azul_cielo.png";
        }else if(vecfig[ni][i] == 5){
            vecImg_fig[i].src = "img/cafe.png";
        }else if(vecfig[ni][i] == 6){
            vecImg_fig[i].src = "img/verde.jpg";
        }else if(vecfig[ni][i] == 7){
            vecImg_fig[i].src = "img/morado.png";
        }else if(vecfig[ni][i] == 8){
            vecImg_fig[i].src = "img/rosado.png";
        }else if(vecfig[ni][i] == 9){
            vecImg_fig[i].src = "img/azul.png";
        }else if(vecfig[ni][i] == 10){
            vecImg_fig[i].src = "img/naranja.png";
        }else if(vecfig[ni][i] == 11){
            vecImg_fig[i].src = "img/lima.png";
        }else if(vecfig[ni][i] == 12){
            vecImg_fig[i].src = "img/negro.png";
        }else{
            vecImg_fig[i].src = "img/blanco.png";
        }
    }
}

function ImgMousedown(f){
    //var cuadro = f.target.getBoundingClientRect();
    //document.getElementById("figuras img").innerHTML = cuadro.top;
    //cuadro.top += 10;
}

function ImgMouseup(f){
    
}

function arrastrar(f){
    numi = f.target.alt;
}

function arrastrar1(evento){
}

function arrastrando(){

}

function soltar(e){
    e.target.src = vecImg_fig[numi].src;
}

function inicio(){
    var f;
    vecImg = document.querySelectorAll("#tablero img");
    for(f=0; f<vecImg.length; f++){
        vecImg[f].addEventListener('mousedown', ImgMousedown, false);
        vecImg[f].addEventListener('mouseup', ImgMouseup, false);
        vecImg[f].addEventListener('dragenter', function(e){e.preventDefault();}, false);
        vecImg[f].addEventListener('dragover', function(e){e.preventDefault();}, false);
        vecImg[f].addEventListener('drop', soltar, false);
    }

    vecBt_niveles = document.querySelectorAll("#bt_niveles button");
    for(f=0; f<vecBt_niveles.length; f++){
        vecBt_niveles[f].addEventListener('click', niveles, false);
        vecBt_niveles[f].addEventListener('click', colorear, false);
    }

    vecImg_fig = document.querySelectorAll("#figuras img");


    for(f=0; f<vecImg_fig.length; f++){
        vecImg_fig[f].alt = f;
        vecImg_fig[f].addEventListener('dragstart', arrastrar, false);
        vecImg_fig[f].addEventListener('drag', arrastrando, false);
        vecImg_fig[f].addEventListener('dragend', arrastrando, false);
    }
}

window.onload=inicio;