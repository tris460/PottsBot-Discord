// This document contains the logic to send you your fortune 

'use strict';

module.exports = {
    name: 'fortune',
    description: 'Tells you your fortune of the day',
    execute(message, args) {
        (async () => {          
          const fortune = getFortune('dailyFortune');
          message.channel.send(fortune);
          })();
    },
};

const { getFortune } = require('../Functions/fortune');
