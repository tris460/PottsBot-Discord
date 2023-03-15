// This file will contain the bot connected with Discord

'use strict';

const UtaScrapper = require('./Functions/utaScraper');
const websiteStatus = require('./Functions/websiteStatus');
const { generateQR } = require('./Functions/generateQR');
const { getFortune } = require('./Functions/fortune');

const urlToQR = 'https://www.youtube.com/watch?v=kF-wqxZPGwA'; // URL to convert to QR code
const QRFileName = 'qr.jpg'; // Image's name for the QR
const urlToScan = 'https://github.com';

// Auto execute this function when the server is started
(async () => {
  // Create the object to run the scraper
  // const utaScraper = new UtaScrapper('')
  // utaScraper.runScraping();

  // await generateQR(urlToQR, QRFileName);
  
  // let fortune = getFortune('shellFortune');
  // console.log(fortune);

  const webStatus = new websiteStatus();
  webStatus.getStatus(urlToScan);
})();
 