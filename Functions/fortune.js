// This file contains the logic to get a random message to predict your fortune

'use strict';

const { getRandomNumber } = require('../Utils/getRandomNumber');

const dailyFortune = [
  'Hoy no es tu día de suerte, pero al menos puedes contar chistes malos para alegrarte el día',
  'Tendrás un día lleno de sorpresas y emociones... pero no te emociones demasiado, la mayoría de ellas serán inconvenientes',
  'Tu paciencia será recompensada... en algún momento... tal vez...',
  'El universo conspira a tu favor hoy... o al menos eso es lo que dicen los astros, no te hacemos responsables si las cosas no salen según lo planeado',
  'Tu fortuna te espera detrás de la puerta número tres... o puede que sea la número cinco... o quizás mejor sigues intentando',
  'A veces la mejor solución a un problema es simplemente dejarlo ir y seguir adelante',
  'Si la vida te da limones, haz limonada... o simplemente ponlos en un gin-tonic.',
  'No confíes en una galleta de la fortuna para tomar decisiones importantes.',
  'Nunca subestimes el poder de una buena siesta en la tarde.',

];
const shellFortune = [
  'La respuesta está en tu corazón', 
  'Sí', 
  'No', 
  'Tal vez', 
  'No cuentes con ello', 
  'Preguntamelo más tarde', 
  'No lo sé, pregúntamelo de nuevo',
  'No responderé a eso',
  'Todo apunta a que sí',
  'Siiiuuuuuu',
  'Es posible, pero no seguro',
  'Mis fuentes dicen que no',
  'No lo creo',
  'Sí, definitivamente',
  'No puedo predecirlo ahora mismo',
  'No hay duda al respecto',
  'No lo veo muy probable'
];

/**
 * This function gets a random message from an array and ir returns it to you
 * 
 * @param {string} arrayName You can choose from the dailyFortune and shellFortune to get a answer,
 * the default option is dailyFortune
 * @returns A string with your fortune
 */
const getFortune = (arrayName) => {
  let max = dailyFortune.length - 1;
  let array = dailyFortune

  if(arrayName == 'shellFortune') {
    max = shellFortune.length - 1;
    array = shellFortune;
  } 
  
  let index = getRandomNumber(0, max);
  
  return array[index];
}

module.exports = {
  getFortune
};
