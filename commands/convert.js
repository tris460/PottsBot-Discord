// This document contains the logic to convert hours from different cities

'use strict';

module.exports = {
    name: 'convert',
    description: 'Convert hours from two cities/countries. It needs two valid cities/countries as parameters.',
    execute(message, args) {
        /**
         * This function calls convertHours() to get the time between two places.
         */
        (async() => {
            try {
                message.channel.send("Converting...");
                const convert = new convertHours();
                const HOURS_CONVERTED = await convert.getHour(FROM_CITY, TO_CITY);
                message.channel.send('🕑 ' + HOURS_CONVERTED);
            } catch(e) {
                logger.error(`Error executing: !convert, ${e}`);
                message.channel.send('Sorry, an unexpected error has happened 😞');
            }
        })();
    },
};

const logger = require('../Utils/logs');
const convertHours = require('../Functions/convertHours');
const FROM_CITY = 'Aguascalientes';
const TO_CITY = 'Madrid';
