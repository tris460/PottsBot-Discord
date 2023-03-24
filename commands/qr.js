// This file contains the logic to send and generate a QR from 

'use strict';

module.exports = {
    name: 'qr',
    description: 'Sends a QR from a given URL',
    execute(message, args) {
        /**
         * This function generates a QR from a URL and sends it as a image
         */
        (async () => {
          generateQR();
          await generateQR(URL_TO_QR, QR_FILE_NAME);
          
          message.channel.send({ files: [`../PottsBot/qr.jpg`]});
          message.channel.send('It is the QR code to the URL 🖥');
        })();
    },
};

const { generateQR } = require('../Functions/generateQR');
const URL_TO_QR = 'https://github.com/tris460/PottsBot-Discord'; // URL to convert to QR code
const QR_FILE_NAME = 'qr.jpg'; // Image's name for the QR
