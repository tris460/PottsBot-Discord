// In this file you'll find the steps to collect data from the available jobs in utags.edu.mx page

'use strict';

const puppeteer = require('puppeteer');
const Scraper = require('../Utils/ScraperFunctions/index');
const URL = 'http://sito.utags.edu.mx/';
const USER_INPUT_ID = '#xUsuario';
const PASSWORD_INPUT_ID = '#xContrasena';
const LOGIN_BUTTON_ID = '#btnSubmit';
const PAGOS_BUTTON_ID = 'div.col-sm-6:nth-child(3)';
const MENU_ID = '#Menu';
const TIME_OUT = 15000;

/**
 * This class contains all the steps to execute the scraper for the UTA page.
 */
class UtaScrapper {
  /**
   * This constructor initializes the necessary variables for the scraper
   * @param { Array[string][string] } flag Receives a bi dimensional array with the flag's name and its value
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
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: false
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
    await myPage.fillInput(USER_INPUT_ID, '190343', TIME_OUT);
    await myPage.fillInput(PASSWORD_INPUT_ID, 'b1f17e5e',TIME_OUT);
    await myPage.click(LOGIN_BUTTON_ID);
    await myPage.waitForSelector(MENU_ID);
    await myPage.click(PAGOS_BUTTON_ID);
    await myPage.takeScreenshot();
    await myPage.closeBrowser();
  }
}

module.exports = UtaScrapper;
