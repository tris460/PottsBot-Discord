// This document contains the logic to send you an APA reference of a given URL 

'use strict';

module.exports = {
    name: 'apa',
    description: 'Sends the apa reference from a given URL',
    execute(message, args) {
        (async() => {
            message.channel.send("Executing APA...");
            const apaGenerator = new generateAPA();
            const apa = await apaGenerator.runScraping(urlToAPA);
            message.channel.send('📖 ' + apa)
        })();
    },
};

const generateAPA = require('../Functions/generateAPA');
const urlToAPA = 'https://www.digitalocean.com/community/tutorials/how-to-import-and-export-a-mongodb-database-on-ubuntu-20-04-es'
