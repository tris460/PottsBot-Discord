// This document contains the logic to convert hours

'use strict';

module.exports = {
    name: 'convert',
    description: 'convert hours',
    execute(message, args) {
        (async() => {
            const convert = new convertHours();
            const hoursConverted = await convert.runScraping(fromCity, toCity);
            message.channel.send('📖 ' + hoursConverted)
        })();
    },
};

const convertHours = require('../Functions/convertHours');
const fromCity = 'Aguascalientes'
const toCity = 'Madrid'