// This file contains the logic to send a funny image to the user

'use strict';

module.exports = {
    name: 'meme',
    description: 'Sends a funny random image',
    execute(message, args) {
        (async () => {
          let index = getRandomNumber(1, 20);
          let name = `meme${index}.jpg`;

          message.channel.send({ files: [`../PottsBot/assets/memes/${name}`]})
        })();
    },
};

const { getRandomNumber } = require('../Utils/getRandomNumber');
