// This file contains all the functions the scrapper can execute

'use strict';

const logger = require('../../Utils/logs');

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
        try {
            this.page = await this.browser.newPage();
            await this.page.goto(url);
        } catch(e) {
            logger.error(`Error opening a new browser in scraper functions, ${e}`);
            console.error('Sorry, an unexpected error has happened 😞');
        }
    }

    /**
     * This function closes the browser, finishing the process
     */
    async closeBrowser() {
        try {
            await this.browser.close();
        } catch(e) {
            logger.error(`Error closing browser in scraper functions, ${e}`);
            console.error('Sorry, an unexpected error has happened 😞');
        }
    }

    /**
     * This function takes a screenshot of the site, and saves it in the specified path
     */
    async takeScreenshot() {
        try {
            await this.page.screenshot({ path: 'screenshots/image.jpg' });
        } catch(e) {
            logger.error(`Error taking screenshot in scraper functions, ${e}`);
            console.error('Sorry, an unexpected error has happened 😞');
        }
    }

    /**
     * This function stablish a pause before you can continue with your process, in order to charge the page completely
     */
    async waitForSelector(selector) {
        try {
            await this.page.waitForSelector(selector);
        } catch(e) {
            logger.error(`Error waiting for selector in scraper functions, ${e}`);
            console.error('Sorry, an unexpected error has happened 😞');
        }
    }

    /**
     * This function clicks on a specific element, for example, a button.
     * @param {string} selector HTML selector where you want to click
     */
    async click(selector) {
        try {
            await this.page.click(selector);
        } catch(e) {
            logger.error(`Error clicking in scraper functions, ${e}`);
            console.error('Sorry, an unexpected error has happened 😞');
        }
    }

    /**
     * This function press key enter.
     * @param {string} key HTML selector where you want to put text
     */
    async press(key) {
        try {
            await this.page.keyboard.press(key);
        } catch(e) {
            logger.error(`Error pressing in scraper functions, ${e}`);
            console.error('Sorry, an unexpected error has happened 😞');
        }
    }


    /**
     * This function fills an input with the text you choose.
     * @param {string} id HTML selector where you want to put text
     * @param {string} text Text you want to put in the HTML element
     * @param {int} time How many time are we going to wait for the result (in milliseconds)
     */
    async fillInput(id, text, time) {
        try {
            await this.page.waitForTimeout(time);
            await this.page.type(id, text);
        } catch(e) {
            logger.error(`Error filling input in scraper functions, ${e}`);
            console.error('Sorry, an unexpected error has happened 😞');
        }
    }

    /**
     * Function to generate a PDF of the current page.
     * @param {JSON} options JSON object to set the configurations for your PDF
     * Example: { path: 'name.pdf', format: 'A4', printBackground: true }
     * Path: Name of your PDF file with extension '.pdf'
     * Format: Size of page
     * printBackground: Boolean value (true for print the styles of page)
     */
    async getPDF(options) {
        try {
            await this.page.pdf(options);
        } catch(e) {
            logger.error(`Error getting PDF in scraper functions, ${e}`);
            console.error('Sorry, an unexpected error has happened 😞');
        }
    }

    /**
     * This function returns the text content of an element
     * @param {string} selector HTML selector of the element
     * @returns {Promise<string>} The text content of the element
     */
    async getTextContent(selector) {
        try {
            const textContent = await this.page.evaluate((sel) => {
                const element = document.querySelector(sel);
                return element ? element.textContent : null;
            }, selector);
            return textContent;
        } catch(e) {
            logger.error(`Error getting text content in scraper functions, ${e}`);
            console.error('Sorry, an unexpected error has happened 😞');
        }
    }

    /**
     * This function returns the text content of an element by its class name
     * @param {string} class CSS class of the element
     * @returns {Promise<Array>} Array with the text content of each element
     */
    async getTextContentByClassName(selector) {
        try {       
            const DATA = await this.page.evaluate((sel) => {
                const elements = document.getElementsByClassName(sel);
                return Array.from(elements).map(element => element.innerText);
            }, selector);
            
            return DATA;
        } catch(e) {
            logger.error(`Error getting text content by class name in scraper functions, ${e}`);
            console.error('Sorry, an unexpected error has happened 😞');
        }
    }
}

module.exports = Scraper;