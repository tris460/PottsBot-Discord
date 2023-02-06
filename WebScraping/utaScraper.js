// In this file you'll find the steps to collect data from the available jobs in utags.edu.mx page

'use strict';

const puppeteer = require('puppeteer');
const Scraper = require('../Utils/ScraperFunctions/index');
const URL = 'https://www.utags.edu.mx/index.php/vinculacion/seguimiento-de-egresados/bolsa-de-trabajo-2';

/**
 * This class contains all the steps to execute the scraper for the UTA page.
 */
class UtaScrapper {
  /**
   * This constructor initializes the necessary variables for the scraper
   * @param {Array[string][string]} flag Receives a bi dimensional array with the flag's name and its value
   */
  constructor(flag = []) {
    this.flag = flag;
  }

  /**
   * Opens a new browser to start the starting process
   * @returns A puppeteer instance
   */
  async newBrowser() {
    return await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }

  /**
   * This function executes the scraper. It opens the browser, open a new page and navigate to an specific URl.
   * After that, it takes a screenshot of the page and close the browser.
   */
  async runScraping() {
    const browser = await this.newBrowser();
    const myPage = new Scraper(browser);

    await myPage.openNewPage(URL);
    await myPage.takeScreenshot();
    await myPage.closeBrowser();
  }
}

module.exports = UtaScrapper;
