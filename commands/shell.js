// This document contains the logic to send you an answer of a specific question as in SpongeBob

'use strict';

module.exports = {
    name: 'shell',
    description: 'Gives an answer for an specific question',
    execute(message, args) {
        /**
         * This function gets the fortune (a random text)
         */
        (async () => {          
          const FORTUNE = getFortune('shellFortune');
          message.channel.send('🐚 ' + FORTUNE);
        })();
    },
};

const { getFortune } = require('../Functions/fortune');
