const agent = document.querySelector('.agent');
var n_agent = 1;

const transition_loop = setInterval(() => {

   if (n_agent == 1) {

      agent.classList.add('transition');
      n_agent = 2;

      setTimeout(() => {

         agent.src = './Elementos/Val-yoru-Elemento.png';
         agent.classList.remove('transition');

      }, 800)

   } else if (n_agent == 2) {

      agent.classList.add('transition');
      n_agent = 3;

      setTimeout(() => {

         agent.src = './Elementos/Val-Omen-Elemento.png';
         agent.classList.remove('transition');
         
      }, 800)

   } else if (n_agent == 3) {

      agent.classList.add('transition');
      n_agent = 4;

      setTimeout(() => {

         agent.src = './Elementos/Val-Reyna-Elemento.png';
         agent.classList.remove('transition');
         
      }, 800)

   } else if (n_agent == 4) {


      agent.classList.add('transition');
      n_agent = 5;

      setTimeout(() => {

         agent.src = './Elementos/Val-Sage-Elemento.png';
         agent.classList.remove('transition');
      
      }, 800)

   } else if (n_agent == 5) {
      agent.classList.add('transition');
      n_agent = 1;

      setTimeout(() => {

         agent.src = './Elementos/Val-Raze-Elemento.png';
         agent.classList.remove('transition');

      }, 800)

   }


}, 4000)