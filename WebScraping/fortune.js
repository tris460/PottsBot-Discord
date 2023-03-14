'use strict';

const { getRandomNumber } = require('../Utils/getRandomNumber');

const dailyFortune = [
  'Hoy no es tu día de suerte, pero al menos puedes contar chistes malos para alegrarte el día',
  'Tendrás un día lleno de sorpresas y emociones... pero no te emociones demasiado, la mayoría de ellas serán inconvenientes',
  'Tu paciencia será recompensada... en algún momento... tal vez...',
  'El universo conspira a tu favor hoy... o al menos eso es lo que dicen los astros, no te hacemos responsables si las cosas no salen según lo planeado',
  'Tu fortuna te espera detrás de la puerta número tres... o puede que sea la número cinco... o quizás mejor sigues intentando'
];
const shellFortune = [
  'La respuesta está en tu corazón', 
  'Sí', 
  'No', 
  'Tal vez', 
  'No cuentes con ello', 
  'Preguntamelo más tarde', 
  'No lo sé, pregúntamelo de nuevo'
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
