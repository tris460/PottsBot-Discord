// This document contains the logic to send you your fortune 

'use strict';

module.exports = {
    name: 'fortune',
    description: 'Tells you your fortune of the day.',
    execute(message, args) {
        /**
         * This function gets the fortune and sends it to the user
         */
        (async () => {
            try {
                const fortune = getFortune('dailyFortune');
                message.channel.send('🥠 ' + fortune);
            } catch(e) {
                logger.error(`Error executing: !fortune, ${e}`);
                message.channel.send('Sorry, an unexpected error has happened 😞');
            }
        })();
    },
};

const logger = require('../Utils/logs');
const { getFortune } = require('../Functions/fortune');
