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