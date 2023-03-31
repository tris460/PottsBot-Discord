// This file contains the logic to get the status of a website in PDF format

'use strict';

module.exports = {
    name: 'status',
    description: 'Gets the status of a web site, it needs a URL as a parameter, i.e. "https://github.com/"',
    execute(message, args) {
        if (!args[0]) {
            message.channel.send('Please provide a valid URL');
            return;
          }
          const urlScan = args[0].toString();
        /**
         * This function gets the status of a web site and sends it in PDF format
         */
        (async () => {  
            try {        
                message.channel.send("Executing...");
                const webStatus = new websiteStatus();
                
                await webStatus.getStatus(urlScan);
                await message.channel.send({ files: ["../PottsBot/status.pdf"] })
                    .then(() => { message.channel.send("It is your status 📊"); })
                    .catch((e) => {
                        logger.error(`Error generating status, ${e}`);
                        message.channel.send("There was an error getting the status 😔");
                        console.error(e);
                    });
            } catch(e) {
                logger.error(`Error executing: !status, ${e}`);
                message.channel.send('Sorry, an unexpected error has happened 😞');
            }
        })();
    }
};

const logger = require('../Utils/logs');
const websiteStatus = require('../Functions/websiteStatus');
