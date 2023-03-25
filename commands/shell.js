// This document contains the logic to send you an answer of a specific question as in SpongeBob

'use strict';

module.exports = {
    name: 'shell',
    description: 'Gives an answer for an specific question. You must ask something to get an answer.',
    execute(message, args) {
        /**
         * This function gets the fortune (a random text)
         */
        (async () => { 
          try {         
            const FORTUNE = getFortune('shellFortune');
            message.channel.send('🐚 ' + FORTUNE);
          } catch(e) {
            // TODO: Here we have to save the log
            message.channel.send('Sorry, an unexpected error has happened 😞');
          }
        })();
    },
};

const { getFortune } = require('../Functions/fortune');
