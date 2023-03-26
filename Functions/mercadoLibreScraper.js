// In this file you'll find the steps to collect data from the available jobs in https://www.mercadolibre.com.mx/ page

'use strict';

const puppeteer = require('puppeteer');
const Scraper = require('../Utils/ScraperFunctions/index');
const URL = 'https://www.mercadolibre.com.mx/';
const SEARCH_INPUT = '#cb1-edit';
const SEARCH_BUTTON = 'body > header > div > div.nav-area.nav-top-area.nav-center-area > form > button';
const TIME_OUT = 15000;
const PRODUCT_SELECTOR = 'ui-search-layout__item';
let products;

/**
 * This class contains all the steps to execute the scraper for the UTA page.
 */
class MercadoLibreScrapper {
  /**
   * This constructor initializes the necessary variables for the scraper
   * @param { Array[string][string] } flag Receives a bi dimensional array with the flag's name and its value
   */
  constructor(flag = [], product) {
    this.flag = flag;
    this.product = product;
  }

  /**
   * Opens a new browser to start the process
   * @returns A puppeteer instance
   */
  async newBrowser() {
    try {
      return await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true
      });
    } catch(e) {
      // TODO: Here we have to save the log
      console.error('Sorry, an unexpected error has happened 😞');
    }
  }

  /**
   * This function executes the scraper. It opens the browser, open a new page and navigate to an specific URl.
   * After that, it gets the results and returns it. 
   * @returns An Array with the data of each product available
   */
  async runScraping() {
    try {
      const browser = await this.newBrowser();
      const myPage = new Scraper(browser);

      await myPage.openNewPage(URL);
      await myPage.fillInput(SEARCH_INPUT, this.product, TIME_OUT);
      await myPage.click(SEARCH_BUTTON);
      await myPage.waitForSelector(PRODUCT_SELECTOR);
      products = await myPage.getTextContentByClassName(PRODUCT_SELECTOR);
      await myPage.closeBrowser();
      
      return products;
    } catch(e) {
      // TODO: Here we have to save the log
      console.error('Sorry, an unexpected error has happened 😞');
    }
  }
}

module.exports = MercadoLibreScrapper;
