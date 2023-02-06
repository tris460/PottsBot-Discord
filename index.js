// This file will contain the bot connected with Discord

'use strict';

const UtaScrapper = require('./WebScraping/utaScraper');

// Auto execute this function when the server is started
(async () => {
  // Create the object to run the scraper
  const utaScraper = new UtaScrapper('')
  utaScraper.runScraping();
})();
 