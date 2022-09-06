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
const contentArray = document.getElementsByClassName('content');
const contentVideo = document.querySelector('video');

// Capturando altura do content geral de conteúdo

const contentHeight = content.getBoundingClientRect().height;

// Capturando elementos de texto a serem redimensionados

const menuButton = document.getElementsByClassName('val-menu-button');
const font17 = document.getElementsByClassName('font17');
const fontTitle = document.getElementsByClassName('fontTitle');
const nome_agents = document.querySelector('.nome-agent');
const torneiosText = document.querySelector('.torneios-text');
const footerText = document.querySelector('.footer-text');

// Capturando tamanho da fonte máximo

var font17Max = window.getComputedStyle(font17[0], null);
var fontTitleMax = window.getComputedStyle(fontTitle[0], null);
var fontAgentsMax = window.getComputedStyle(nome_agents, null);
var fontFooterMax = window.getComputedStyle(footerText, null);
var fontTorneiosMax = window.getComputedStyle(torneiosText, null);
var fontMenuButtonMax = window.getComputedStyle(menuButton[0], null);

resizer();

var font17Text = parseInt(font17Max.getPropertyValue('font-size'));
var fontTitleText = parseInt(fontTitleMax.getPropertyValue('font-size'));
var fontAgent = parseInt(fontAgentsMax.getPropertyValue('font-size'));
var fontFooter = parseInt(fontFooterMax.getPropertyValue('font-size'));
var fontTorneios = parseInt(fontTorneiosMax.getPropertyValue('font-size'));
var fontMenuButton = parseInt(fontMenuButtonMax.getPropertyValue('font-size'));

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

   for (var i = 0; i < contentArray.length; i++) {

      contentArray[i].style.height = `${newContentHeight}px`;

      if (i == contentArray - 1) {
         i = 6
      }

   }
}

function fontResizer() {

   // Capturando tamanho da janela

   var windowWidth = window.innerWidth;

   // Tirando porcentagem do tamanho máximo para o tamanho atual

   var porcentWindowResizerdown = (windowWidth * 100) / windowWidthMax - 100;

   // Tornando esse valor positivo

   var porcentWindowResizer = porcentWindowResizerdown * -1;

   // Calculando o valor equivalente a porcentagem tirada a cima, da fonte dos elementos

   var calcFontSize17 = font17Text * porcentWindowResizer / 100;
   var calcFontSizeTitle = fontTitleText * porcentWindowResizer / 100;
   var calcFontSize_Agent = fontAgent * porcentWindowResizer / 100;
   var calcFontSize_Footer = fontFooter * porcentWindowResizer / 100;
   var calcFontSize_Torneios = fontTorneios * porcentWindowResizer / 100;
   var calcFontSize_Button = fontMenuButton * porcentWindowResizer / 100;

   // Retirando casas decimais dos valores

   var descartDecimal17 = Math.trunc(calcFontSize17);
   var descartDecimalTitle = Math.trunc(calcFontSizeTitle);
   var descartDecimal_Agent = Math.trunc(calcFontSize_Agent);
   var descartDecimal_Footer = Math.trunc(calcFontSize_Footer);
   var descartDecimal_Torneios = Math.trunc(calcFontSize_Torneios);
   var descartDecimal_Button = Math.trunc(calcFontSize_Button);

   // Calculando o novo valor de fonte a ser atribuido

   var newFontSize17 = font17Text - descartDecimal17;
   var newFontSizeTitle = fontTitleText - descartDecimalTitle;
   var newFontSize_Agent = fontAgent - descartDecimal_Agent;
   var newFontSize_Footer = fontFooter - descartDecimal_Footer;
   var newFontSize_Torneios = fontTorneios - descartDecimal_Torneios;
   var newFontSize_Button = fontMenuButton - descartDecimal_Button;

   // Atribuindo novo valor de fonte aos elementos

   for (var i = 0; i < menuButton.length; i++) {
      menuButton[i].style.fontSize = `${newFontSize_Button}px`;

      if (i == menuButton - 1) {
         i = 6
      }

   }

   for (var i = 0; i < font17.length; i++) {

      font17[i].style.fontSize = `${newFontSize17}px`;
      fontTitle[i].style.fontSize = `${newFontSizeTitle}px`;

      if (i == font17.length - 1) {
         i = 6
      }

   }

   nome_agents.style.fontSize = `${newFontSize_Agent}px`;
   footerText.style.fontSize = `${newFontSize_Footer}px`;
   torneiosText.style.fontSize = `${newFontSize_Torneios}px`;


}

// Evento para toda vez que a tela for redmensionada a rotina ser executada

window.addEventListener('resize', function () {

   resizer();
   fontResizer();

});