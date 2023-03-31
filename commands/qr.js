// This file contains the logic to send and generate a QR from 

'use strict';

module.exports = {
  name: 'qr',
  description: 'Sends a QR from a given URL. It needs a valid URL as a parameter.',
  execute(message, args) {
    if (!args[0]) {
      message.channel.send('Please provide a valid URL');
      return;
    }
    const url = message.content.slice(4).toString();

    /**
     * This function generates a QR from a URL and sends it as a image
     */
    (async () => {
      try {
        generateQR();
        await generateQR(url, QR_FILE_NAME);

        message.channel.send({ files: [`../PottsBot/qr.jpg`]});
        message.channel.send('It is the QR code to the URL 🖥');
      } catch(e) {
        logger.error(`Error executing: !qr, ${e}`);
        message.channel.send('Sorry, an unexpected error has happened 😞');
      }
    })();
  },
};

const logger = require('../Utils/logs');
const { generateQR } = require('../Functions/generateQR');
const QR_FILE_NAME = 'qr.jpg'; // Image's name for the QR
