// This document contains the logic to convert hours from different cities

'use strict';

module.exports = {
    name: 'time',
    description: 'Convert hours from two cities/countries',
    execute(message, args) {
        /**
         * This function calls convertHours() to get the time between two places.
         */
        (async() => {
            const convert = new convertHours();
            const HOURS_CONVERTED = await convert.getHour(FROM_CITY, TO_CITY);
            message.channel.send('🕑 ' + HOURS_CONVERTED)
        })();
    },
};

const convertHours = require('../Functions/convertHours');
const FROM_CITY = 'Aguascalientes';
const TO_CITY = 'Madrid';
