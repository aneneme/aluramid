function tocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listadeTeclas = document.querySelectorAll('.tecla'),let contador = 0 ;

while  (contador<listadeTeclas.lenght) {
    listaDeTeclas[contador].classList[1];
    listadeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_splash');
    };
    contador = contador +1;
}
