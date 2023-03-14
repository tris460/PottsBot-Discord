'use strict';

/**
 * This function obtains a random number from 2 limits
 * @param { number } min Inferior limit to get the random number
 * @param { number } max Superior limit to get the random number
 * @returns A int number between the min and max specified
 */
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  getRandomNumber
};
