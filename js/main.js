const gif = document.getElementById('gifs-1')
var gifAtual = 1;

const loop = setInterval(() => {

   if (gifAtual == 1) {

      gif.src = './img/Val-jogada2.gif';
      gifAtual = 2;

   } else if (gifAtual == 2) {

      gif.src = './img/Val-jogada3.gif';
      gifAtual = 3;

   } else if (gifAtual == 3) {

      gif.src = './img/Val-jogada4.gif';
      gifAtual = 4;

   } else if (gifAtual == 4) {

      gif.src = './img/Val-jogada5.gif';
      gifAtual = 5;

   } else {

      gif.src = './img/Val-jogada1.gif';
      gifAtual = 1;

   }
}, 4500);