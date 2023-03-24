// This file contains the logic to get the status of a website in PDF format

'use strict';

module.exports = {
    name: 'status',
    description: 'Gets the status of a web site, it needs a URL as a parameter, i.e. "https://github.com/"',
    execute(message, args) {
        /**
         * This function gets the status of a web site and sends it in PDF format
         */
        (async () => {          
            message.channel.send("Executing...");
            const webStatus = new websiteStatus();
            
            await webStatus.getStatus(URL_TO_SCAN);
            message.channel.send({ files: ["../PottsBot/status.pdf"] })
            .then(() => { message.channel.send("It is your status 📊") })
            .catch((e) => { 
                message.channel.send("There was an error getting the status 😔")
                console.error(e)
            });
          })();
    },
};

const websiteStatus = require('../Functions/websiteStatus');
const URL_TO_SCAN = 'https://github.com';
