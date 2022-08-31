const content = document.querySelector('.content');
const contentAlpha = document.querySelector('.content-alpha');
const contentBravo = document.querySelector('.content-bravo');
const contentDelta = document.querySelector('.content-delta');
const contentVideo = document.querySelector('video')
const contentHeight = content.getBoundingClientRect().height;

resizer();

function resizer() {

   var windowWidth = window.innerWidth;

   var porcentWindowResizerdown = (windowWidth * 100) / 1325 - 100;

   var porcentWindowResizer = porcentWindowResizerdown * -1;

   var calcContentHeight = contentHeight * porcentWindowResizer / 100;

   var formatContent = Math.trunc(calcContentHeight);

   var newContentHeight = contentHeight - formatContent;


   contentAlpha.style.height = `${newContentHeight}px`;
   contentBravo.style.height = `${newContentHeight}px`;
   contentDelta.style.height = `${newContentHeight}px`;

}


window.addEventListener('resize', function () {

   resizer();

});