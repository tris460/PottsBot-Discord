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
                // TODO: Here we have to save the log
                message.channel.send('Sorry, an unexpected error has happened 😞');
            }
        })();
    },
};

const convertHours = require('../Functions/convertHours');
const FROM_CITY = 'Aguascalientes';
const TO_CITY = 'Madrid';
