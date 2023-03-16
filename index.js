// This file will contain the bot connected with Discord

'use strict';

const generateAPA = require('./Functions/generateAPA');
const { generateQR } = require('./Functions/generateQR');
const { getFortune } = require('./Functions/fortune');

const urlToQR = 'https://www.youtube.com/watch?v=kF-wqxZPGwA'; // URL to convert to QR code
const QRFileName = 'qr.jpg'; // Image's name for the QR
const urlToAPA = 'https://www.digitalocean.com/community/tutorials/how-to-import-and-export-a-mongodb-database-on-ubuntu-20-04-es';

// Auto execute this function when the server is started
(async() => {

    const APAgenerator = new generateAPA();

    await APAgenerator.runScraping(urlToAPA);


})();