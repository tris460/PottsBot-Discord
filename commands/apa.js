// This document contains the logic to send you your fortune 

'use strict';

module.exports = {
    name: 'apa',
    description: 'hola',
    execute(message, args) {
        (async() => {
            const apaGenerator = new generateAPA();
            const apa = await apaGenerator.runScraping(urlToAPA);
            message.channel.send('📖 ' + apa)
        })();
    },
};

const generateAPA = require('../Functions/generateAPA');
const urlToAPA = 'https://www.digitalocean.com/community/tutorials/how-to-import-and-export-a-mongodb-database-on-ubuntu-20-04-es'