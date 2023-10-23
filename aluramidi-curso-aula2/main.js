function tocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const  listadeTeclas = document.querySelectorAll('.tecla'),let contador = 0 ;

while  (contador<listadeTeclas.lenght) {
    const teclas = listadeTeclas[contador];

    const instrumento = teclas.classList[1];
    const idAudio =`#som_ ${instrumento}`;
      console.log(idAudio);
     Teclas[contador].onclick = function () {
        tocaSom(idAudio);
    };
    contador = contador +1;
}
