'use strict';

const { getRandomNumber } = require('../Utils/getRandomNumber');

const dailyFortune = [];
const shellFortune = ['La respuesta está en tu corazón', 'Sí', 'No', 'Tal vez', 'No cuentes con ello', 'Preguntamelo más tarde', 'No lo sé, pregúntamelo de nuevo'];

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
