// Script para funcionamento do carrossel

/* 
Importando arquivo com os objetos de agentes (Link do arquivo do agente e nome, 
qualquer outra propriedade pode ser adicionada diretamente no arquivo de agentes) 
*/

import agents from "./agents-data.js";

// Capturando elementos do carrossel

const agent = document.querySelector('.agent');
const nome_agent = document.querySelector('.nome-agent');

// Variáveis de lógica do carrossel

var nome, formatarCaminho, src;
var i = 0;

// Loop para troca de agentes do carrossel

const loop = setInterval(() => {

   // Recebendo valor dos objetos no arquivo de agentes de acordo com a posição da variável 'i'

   // Nome do agente na posição 'i'

   nome = agents[i].nome;

   // Caminho do agente na posição 'i'

   formatarCaminho = agents[i].src;

   // Formatando caminho para que a propriedade css aceite o que será passado

   src = formatarCaminho.replace(formatarCaminho, '../Elementos/' + formatarCaminho);

   // Animações de transição

   // Agente

   agent.classList.add('transition');

   // Etiqueta do nome

   nome_agent.classList.add('transition');

   // Tempo de espera para trocar o agente e o nome

   setTimeout(() => {

      agent.src = src;
      nome_agent.innerHTML = nome;

      // Especificações particulares que alguns agentes necessitam para fins de estilo e posicionamento
      // Foi necessário pois, esses agentes fugiram do padrão de imagem dos outros

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

   // Intervalo para remover as classes de transição 
   // que serão adicionadas novamente cada vez que o loop retornar ao início

   setTimeout(() => {

      agent.classList.remove('transition');
      nome_agent.classList.remove('transition');

   }, 2800);

   // Alterando a posição da variável 'i' para a troca de agente

   i++

   // Reiniciando o loop quando o contador, no caso o 'i' chegar ao último agente da lista


   if (i == agents.length) {
      i = 0;
   };

}, 5000)