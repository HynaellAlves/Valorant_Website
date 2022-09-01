// Script para funcionamento do carrossel

// Importando arquivo com os objetos de agentes (Link do arquivo do agente e nome)

import agents from "./agents-data.js";

// Capturando elementos do carrossel
const agent = document.querySelector('.agent');
const nome_agent = document.querySelector('.nome-agent');

// Variáveis de lógica do carrossel

var nome, formatarCaminho, src;
var i = 0;

// Loop para troca de agentes do carrossel

const loop = setInterval(() => {

   nome = agents[i].nome;
   formatarCaminho = agents[i].src;
   src = formatarCaminho.replace(formatarCaminho, '../Elementos/' + formatarCaminho);

   //console.log(nome)
   //console.log(src);

   agent.classList.add('transition');
   nome_agent.classList.add('transition');

   setTimeout(() => {

      agent.src = src;
      nome_agent.innerHTML = nome;

      if (nome == 'Chamber') {

         agent.style.top = '4%';
         agent.style.width = '18%';

      } else if (nome == 'Reyna') {

         agent.style.top = '-6%';
         agent.style.width = '21%';
      } else {
         agent.style.top = '7%';
         agent.style.width = '23%';
      }


   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');
      nome_agent.classList.remove('transition');

   }, 2800);




   i++


   if (i == agents.length) {
      i = 0;
   };

}, 5000)

// Script antigo apara fazer a troca de agentes
// Uma ótima maneira de enxugar um scripts desses é ultilizando ARRAY como fiz acima


/* if (n_agent == 1) {

   agent.classList.add('transition');

   const n = setTimeout(() => {

      agent.style.opacity = 0;
      agent.src = '../Elementos/Val-Raze-Elemento.png'
      agent.style.opacity = 1;

   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');

   }, 2900);

   n_agent = 2;

} else if (n_agent == 2) {

   agent.classList.add('transition');

   const n = setTimeout(() => {

      agent.style.opacity = 0;
      agent.src = '../Elementos/Val-Skye-Elemento.png'
      agent.style.opacity = 1;

   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');

   }, 2900);

   n_agent = 3;

} else if (n_agent == 3) {

   agent.classList.add('transition');

   const n = setTimeout(() => {

      agent.style.opacity = 0;
      agent.src = '../Elementos/Val-Jett-Elemento.png'
      agent.style.opacity = 1;

   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');

   }, 2900);

   n_agent = 4;

} else if (n_agent == 4) {

   agent.classList.add('transition');

   const n = setTimeout(() => {

      agent.style.opacity = 0;
      agent.src = '../Elementos/Val-Omen-Elemento.png'
      agent.style.opacity = 1;

   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');

   }, 2900);

   n_agent = 5;

} else if (n_agent == 5) {

   agent.classList.add('transition');

   const n = setTimeout(() => {

      agent.style.opacity = 0;
      agent.src = '../Elementos/Val-Sage-Elemento.png'
      agent.style.opacity = 1;

   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');

   }, 2900);

   n_agent = 6;

} else if (n_agent == 6) {

   agent.classList.add('transition');

   const n = setTimeout(() => {

      agent.style.opacity = 0;
      agent.src = '../Elementos/Val-Sova-Elemento.png'
      agent.style.opacity = 1;

   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');

   }, 2900);

   n_agent = 7;

} else if (n_agent == 7) {

   agent.classList.add('transition');

   const n = setTimeout(() => {

      agent.style.opacity = 0;
      agent.src = '../Elementos/Val-Cypher-Elemento.png'
      agent.style.opacity = 1;

   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');

   }, 2900);

   n_agent = 8;

} else if (n_agent == 8) {

   agent.classList.add('transition');

   const n = setTimeout(() => {

      agent.style.opacity = 0;
      agent.src = '../Elementos/Val-Breach-Elemento.png'
      agent.style.opacity = 1;

   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');

   }, 2900);

   n_agent = 9;

} else if (n_agent == 9) {

   agent.classList.add('transition');

   const n = setTimeout(() => {

      agent.style.opacity = 0;
      agent.src = '../Elementos/Val-Kayo-Elemento.png'
      agent.style.opacity = 1;

   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');

   }, 2900);

   n_agent = 10;

} else if (n_agent == 10) {

   agent.classList.add('transition');

   const n = setTimeout(() => {

      agent.style.opacity = 0;
      agent.src = '../Elementos/Val-Yoru-Elemento.png'
      agent.style.opacity = 1;

   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');

   }, 2900);

   n_agent = 11;

} else if (n_agent == 11) {

   agent.classList.add('transition');

   const n = setTimeout(() => {

      agent.style.opacity = 0;
      agent.src = '../Elementos/Val-Phoenix-Elemento.png'
      agent.style.opacity = 1;

   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');

   }, 2900);

   n_agent = 12;

} else if (n_agent == 12) {

   agent.classList.add('transition');

   const n = setTimeout(() => {

      agent.style.opacity = 0;
      agent.src = '../Elementos/Val-Reyna-Elemento.png'
      agent.style.top = '-10%';
      agent.style.width = '21%';
      agent.style.opacity = 1;

   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');

   }, 2900);

   n_agent = 13;

} else if (n_agent == 13) {

   agent.classList.add('transition');

   const n = setTimeout(() => {

      agent.style.top = '5%';
      agent.style.width = '23%';
      agent.style.opacity = 0;
      agent.src = '../Elementos/Val-Viper-Elemento.webp'
      agent.style.opacity = 1;

   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');

   }, 2900);

   n_agent = 14;

} else if (n_agent == 14) {

   agent.classList.add('transition');

   const n = setTimeout(() => {

      agent.style.opacity = 0;
      agent.src = '../Elementos/Val-chamber-Elemento.webp'
      agent.style.top = '2%';
      agent.style.width = '18%';
      agent.style.opacity = 1;

   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');

   }, 2900);

   n_agent = 15;

} else if (n_agent == 15) {

   agent.classList.add('transition');

   const n = setTimeout(() => {
      agent.style.top = '5%';
      agent.style.width = '23%';
      agent.style.opacity = 0;
      agent.src = '../Elementos/Val-Brimstone-Elemento.png'
      agent.style.opacity = 1;

   }, 2600)

   setTimeout(() => {

      agent.classList.remove('transition');

   }, 2900);

   n_agent = 1;

} */
