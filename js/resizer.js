// Script que redimensiona os contents de acordo com o tamanho da janela do navegador

// Author: Hynaell Alves
// Github: https://github.com/HynaellAlves

/* 
 A lógica consiste em pegar o tamanho total da janela e obter a porcentagem, em que ela foi reduzida 
 do tamanho máximo da tela, que neste caso é 1325x768 (mas estamos utilizando somente a largura na lógica 1325), e depois reduzir 
 o tamanho dos elementos na mesma porcentagem tirada.
 */

// Capturando os elementos do site a serem redimensionados

const content = document.querySelector('.content');
const contentAlpha = document.querySelector('.content-alpha');
const contentBravo = document.querySelector('.content-bravo');
const contentDelta = document.querySelector('.content-delta');
const contentVideo = document.querySelector('video')

// Capturando altura do content geral de conteúdo

const contentHeight = content.getBoundingClientRect().height;

// Executando a função assim que o script é carregado

resizer();

// ----------------------------------------------------------------------------------- //


// Respectiva função para redimensionar os contents

function resizer() {

   // Capturando tamanho da janela do navegador

   var windowWidth = window.innerWidth;

   // Lógica para redimensionar os contents

   // Pega o tamanho atual da janela, multiplica por 100% e dividi pelo tamanho máximo que nesse caso é 1325 
   // assim obtendo a porcentagem atual em que se encontra a janela
   // depois subtrai de 100% para obter a porcentagem que foi reduzida

   // Para ajudar a entender abra o console do navegador, leia o que será printado e siga ajustando a janela;

   var porcentWindowResizerdown_teste = (windowWidth * 100) / 1325;

   console.log('Esta é a porcentagem em que a janela se encontra em relação ao tamanho total: ' + porcentWindowResizerdown_teste + '%');

   var porcentWindowResizerdown = (windowWidth * 100) / 1325 - 100;

   console.log('Essa é a porcentagem em que foi reduzida a janela do tamanho total: ' + porcentWindowResizerdown + '%');

   // Essa parte serve somente para transformar o número negativo em positivo sem alterar seu valor se for diferente de zero

   var porcentWindowResizer = porcentWindowResizerdown * -1;

   console.log('Valor de cima porém positivo: ' + porcentWindowResizer + '%');

   // Descobrindo quantos pixels dos elementos equivale a porcentagem tirada no código de cima
   // depois subtraindo deles este valor

   var calcContentHeight = contentHeight * porcentWindowResizer / 100;

   // Apenas formatação (Transformando de string para number)

   var formatContent = Math.trunc(calcContentHeight);

   // Subtraindo o valor nos elementos

   var newContentHeight = contentHeight - formatContent;

   // Atribuindo novo tamanho dos contents de acordo com a lógica

   contentAlpha.style.height = `${newContentHeight}px`;
   contentBravo.style.height = `${newContentHeight}px`;
   contentDelta.style.height = `${newContentHeight}px`;

}

// Evento para toda vez que a tela for redmensionada a função ser executada

window.addEventListener('resize', function () {

   resizer();

});