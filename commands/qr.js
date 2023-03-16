// This file contains the logic to send and generate a QR from 

'use strict';

module.exports = {
    name: 'qr',
    description: 'Sends a QR from a given URL',
    execute(message, args) {
        (async () => {
          generateQR();
          await generateQR(urlToQR, QRFileName);
          
          message.channel.send({ files: [`../PottsBot/qr.jpg`]});
          message.channel.send('It is the QR code to the URL 🖥');
        })();
    },
};

const { generateQR } = require('../Functions/generateQR');
const urlToQR = 'https://github.com/tris460/PottsBot-Discord'; // URL to convert to QR code
const QRFileName = 'qr.jpg'; // Image's name for the QR
