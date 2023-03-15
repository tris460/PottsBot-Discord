// This file contains the logic to get the status of a website in PDF format

'use strict';

module.exports = {
    name: 'status',
    description: 'Gets the status of a web site, it needs a URL as a parameter, i.e. "https://github.com/"',
    execute(message, args) {
        (async () => {          
            message.channel.send("Executing...");
            const webStatus = new websiteStatus();
            webStatus.getStatus(urlToScan);
          })();
    },
};

const websiteStatus = require('../Functions/websiteStatus');
const urlToScan = 'https://github.com';
