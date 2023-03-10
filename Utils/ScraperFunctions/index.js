// This file contains all the functions the scrapper can execute

'use strict';

class Scraper {
  /**
   * Initialize the necessary parameters for the functions
   * @param {*} browser A puppeteer instance
   */
  constructor(browser) {
    this.browser = browser;
    this.page = browser.page;
  }

  /**
   * This function opens a new tab/page in the browser
   * @param {string} url Valid URL to open in the browser
   */
  async openNewPage(url) {
    this.page = await this.browser.newPage();
    await this.page.goto(url);
  }

  /**
   * This function closes the browser, finishing the process
   */
  async closeBrowser() {
    await this.browser.close();
  }

  /**
   * This function takes a screenshot of the site, and saves it in the specified path
   */
  async takeScreenshot() {
    await this.page.screenshot({ path: 'screenshots/image.jpg' });
  }

  /**
   * This function stablish a pause before you can continue with your process, in order to charge the page completely
   */
  async waitForSelector(selector) {
    await this.page.waitForSelector(selector);
  }

  /**
   * This function clicks on a specific element, for example, a button.
   * @param {string} selector HTML selector where you want to click
   */
  async click(selector) {
    await this.page.click(selector);
  }

  /**
   * This function fills an input with the text you choose.
   * @param {string} id HTML selector where you want to put text
   * @param {string} text Text you want to put in the HTML element
   * @param {int} time How many time are we going to wait for the result (in milliseconds)
   */
  async fillInput(id, text, time) {
    await this.page.waitForTimeout(time);
    await this.page.type(id, text);
  }

  async getPDF(options) {
    let pdf = await this.page.pdf(options);
    return pdf;
  }
}

module.exports = Scraper;
