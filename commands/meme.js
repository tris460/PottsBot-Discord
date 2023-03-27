// This file contains the logic to send a funny image to the user

'use strict';

module.exports = {
    name: 'meme',
    description: 'Sends a funny random image.',
    execute(message, args) {
        /**
         * This function gets a random number to get an image and send it to the user
         */
        (async () => {
          try {
            const INDEX = getRandomNumber(1, 20);
            const NAME = `meme${INDEX}.jpg`;

            message.channel.send({ files: [`../PottsBot/assets/memes/${NAME}`]});
          } catch(e) {
            logger.error(`Error executing: !meme, ${e}`);
            message.channel.send('Sorry, an unexpected error has happened 😞');
          }
        })();
    },
};

const logger = require('../Utils/logs');
const { getRandomNumber } = require('../Utils/getRandomNumber');
