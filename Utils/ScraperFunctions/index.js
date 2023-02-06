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
}

module.exports = Scraper;
