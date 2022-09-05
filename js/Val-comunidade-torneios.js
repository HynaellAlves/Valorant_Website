const comunidadeContent = document.querySelector('.val-comunidade-div');
const torneiosContent = document.querySelector('.val-torneios-div');
const buttonTransition = document.querySelector('.button-comunidade-torneios');

var exebition = 'comunidade';

const transition = () => {

   buttonTransition.disabled = true

   if (exebition == 'comunidade') {
      comunidadeContent.classList.add('transitionOut');
      torneiosContent.classList.add('transitionOn');

      setTimeout(() => {

         comunidadeContent.style.right = '100%';
         torneiosContent.style.right = '0%';

      }, 2000)

      exebition = 'torneios';

   } else {

      comunidadeContent.classList.add('transitionOn');
      torneiosContent.classList.add('transitionOut');

      setTimeout(() => {
         comunidadeContent.style.right = '0%';
         torneiosContent.style.right = '100%';
  

      }, 2000)

      exebition = 'comunidade';

   }

   setTimeout(() => {

      buttonTransition.disabled = false
      comunidadeContent.classList.remove('transitionOut');
      comunidadeContent.classList.remove('transitionOn');
      torneiosContent.classList.remove('transitionOn');
      torneiosContent.classList.remove('transitionOut');

   }, 2100)

}

buttonTransition.addEventListener('click', transition)