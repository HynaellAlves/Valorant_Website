// Script que redimensiona os contents de acordo com o tamanho da janela do navegador

// Author: Hynaell Alves
// Github: https://github.com/HynaellAlves

/* 
 A lógica consiste em pegar o tamanho total da janela e obter a porcentagem, em que ela foi reduzida 
 do tamanho máximo da tela, que neste caso é 1325x768 (mas estamos utilizando somente a largura na lógica 1325), e depois reduzir 
 o tamanho dos elementos na mesma porcentagem tirada. Desse modo não é necessário alterar o layout exclusivo do site
 */

// Capturando tamanho máximo da janela

const windowWidthMax = 1325;
console.log('Tamanho da janela: ' + windowWidthMax);

// Capturando os elementos do site a serem redimensionados

const content = document.querySelector('.content');
const contentAlpha = document.querySelector('.content-alpha');
const contentBravo = document.querySelector('.content-bravo');
const contentDelta = document.querySelector('.content-delta');
const contentEcho = document.querySelector('.content-echo');
const contentVideo = document.querySelector('video');

// Capturando altura do content geral de conteúdo

const contentHeight = content.getBoundingClientRect().height;

// Capturando elementos de texto a serem redimensionados

const fontGifs = document.querySelector('.gifs-1-text');
const enfaseGifs = document.querySelector('.enfase');
const enfase2Gifs = document.querySelector('.enfase2');
const fontAgents = document.querySelector('.val-agents-text');
const fontMaps = document.querySelector('.val-maps-text');
const enfaseMaps = document.querySelector('.enfaseMaps');
const enfase2Maps = document.querySelector('.enfase2Maps');
const enfase3Maps = document.querySelector('.enfase3Maps');
const nome_agents = document.querySelector('.nome-agent');
const comunidadeText = document.querySelector('.comunidade-text');

// Capturando tamanho da fonte máximo

var fontTextMax = window.getComputedStyle(fontGifs, null);
var fontEnfaseMax = window.getComputedStyle(enfaseGifs, null);
var fontAgentsMax = window.getComputedStyle(nome_agents, null);

resizer();

var fontText = parseInt(fontTextMax.getPropertyValue('font-size'));
var fontEnfase = parseInt(fontEnfaseMax.getPropertyValue('font-size'));
var fontAgent = parseInt(fontAgentsMax.getPropertyValue('font-size'));

fontResizer();

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

   var porcentWindowResizerdown_teste = (windowWidth * 100) / windowWidthMax;

   console.log('Esta é a porcentagem em que a janela se encontra em relação ao tamanho total: ' + porcentWindowResizerdown_teste + '%');

   var porcentWindowResizerdown = (windowWidth * 100) / windowWidthMax - 100;

   console.log('Essa é a porcentagem em que foi reduzida a janela do tamanho total: ' + porcentWindowResizerdown + '%');

   // Essa parte serve somente para transformar o número negativo em positivo sem alterar seu valor se for diferente de zero

   var porcentWindowResizer = porcentWindowResizerdown * -1;

   console.log('Valor de cima porém positivo: ' + porcentWindowResizer + '%');

   // Descobrindo quantos pixels dos elementos equivale a porcentagem tirada no código de cima
   // depois subtraindo deles este valor

   var calcContentHeight = contentHeight * porcentWindowResizer / 100;

   // Apenas formatação (Transformando de número com ponto flutuante para inteiro)

   var formatContent = Math.trunc(calcContentHeight);

   // Subtraindo o valor nos elementos

   var newContentHeight = contentHeight - formatContent;

   // Atribuindo novo tamanho dos contents de acordo com a lógica

   contentAlpha.style.height = `${newContentHeight}px`;
   contentBravo.style.height = `${newContentHeight}px`;
   contentDelta.style.height = `${newContentHeight}px`;
   contentEcho.style.height = `${newContentHeight}px`;

}

function fontResizer() {

   // Capturando tamanho da janela

   var windowWidth = window.innerWidth;

   // Tirando porcentagem do tamanho máximo para o tamanho atual

   var porcentWindowResizerdown = (windowWidth * 100) / windowWidthMax - 100;

   // Tornando esse valor positivo

   var porcentWindowResizer = porcentWindowResizerdown * -1;

   // Calculando o valor equivalente a porcentagem tirada a cima, da fonte dos elementos

   var calcFontSize = fontText * porcentWindowResizer / 100;
   var calcFontSize_Enfase = fontEnfase * porcentWindowResizer / 100;
   var calcFontSize_Agent = fontAgent * porcentWindowResizer / 100;

   // Retirando casas decimais dos valores

   var descartDecimal = Math.trunc(calcFontSize);
   var descartDecimal_Enfase = Math.trunc(calcFontSize_Enfase);
   var descartDecimal_Agent = Math.trunc(calcFontSize_Agent);

   // Calculando o novo valor de fonte a ser atribuido

   var newFontSize = fontText - descartDecimal;
   var newFontSize_Enfase = fontEnfase - descartDecimal_Enfase;
   var newFontSize_Agent = fontAgent - descartDecimal_Agent;

   // Atribuindo novo valor de fonte aos elementos

   fontGifs.style.fontSize = `${newFontSize}px`;
   enfaseGifs.style.fontSize = `${newFontSize_Enfase}px`;
   enfase2Gifs.style.fontSize = `${newFontSize_Enfase}px`;
   fontAgents.style.fontSize = `${newFontSize}px`;
   fontMaps.style.fontSize = `${newFontSize}px`;
   enfaseMaps.style.fontSize = `${newFontSize_Enfase}px`;
   enfase2Maps.style.fontSize = `${newFontSize_Enfase}px`;
   enfase3Maps.style.fontSize = `${newFontSize}px`;
   nome_agents.style.fontSize = `${newFontSize_Agent}px`;
   comunidadeText.style.fontSize = `${newFontSize}px`;


}

// Evento para toda vez que a tela for redmensionada a rotina ser executada

window.addEventListener('resize', function () {

   resizer();
   fontResizer();

});