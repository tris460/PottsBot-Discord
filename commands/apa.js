// This document contains the logic to send you an APA reference of a given URL 

'use strict';

module.exports = {
    name: 'apa', // Command's name
    description: 'Sends the apa reference from a given URL',
    execute(message, args) {
        /**
         * This function calls the APA generator and sends the result to the user 
         */
        (async() => {
            message.channel.send("Executing APA...");
            const apaGenerator = new generateAPA();
            const APA = await apaGenerator.getAPA(URL_TO_APA);
            message.channel.send('📖 ' + APA)
        })();
    },
};

const generateAPA = require('../Functions/generateAPA');
const URL_TO_APA = 'https://www.digitalocean.com/community/tutorials/how-to-import-and-export-a-mongodb-database-on-ubuntu-20-04-es'
