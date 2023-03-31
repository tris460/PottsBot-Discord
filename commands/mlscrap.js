// This file contains the logic to scrap Mercado Libre website

'use strict';

module.exports = {
    name: 'mlscrap',
    description: 'Scraps the Mercado Libre page to return the available products',
    execute(message, args) {
      if (!args[0]) {
        message.channel.send('Please provide a valid product you want to search.');
        return;
      }
      const product = message.content.slice(4).toString();
        /**
         * This function executes the scraper of Mercado Libre and returns the available products
         */
        (async () => {
          try {
            message.channel.send('Running scrapping...');
            const mlScrapper = new MercadoLibreScrapper([], product);
            const products = await mlScrapper.runScraping();

            if(products.length == 0 || products == undefined) {
              message.channel.send(`Sorry, there is 0 results for your search: ${product} 😞`);
              return;
            }

            for (let i = 0; i < products.length; i++) {
              message.channel.send(products[i]);
            }
            message.channel.send('Those were the results I found 😊');
          } catch(e) {
            logger.error(`Error executing: !mlscrap, ${e}`);
            message.channel.send('Sorry, an unexpected error has happened 😞');
          }
        })();
    },
};

const logger = require('../Utils/logs');
const MercadoLibreScrapper = require('../Functions/mercadoLibreScraper');
