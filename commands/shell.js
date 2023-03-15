// This document contains the logic to send you an answer of a specific question as in SpongeBob

'use strict';

module.exports = {
    name: 'shell',
    description: 'Gives an answer for an specific question',
    execute(message, args) {
        (async () => {          
          const fortune = getFortune('shellFortune');
          message.channel.send('🐚 ' + fortune);
          })();
    },
};

const { getFortune } = require('../Functions/fortune');
