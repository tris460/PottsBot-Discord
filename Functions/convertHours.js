// In this file you'll find the steps to collect data from the available jobs in utags.edu.mx page

'use strict';

const puppeteer = require('puppeteer');
const Scraper = require('../Utils/ScraperFunctions/index');

const URL = 'https://24timezones.com/es/difference';
const CONVERT_FROM_INPUT = '#converter-from'
const CONVERT_TO_INPUT = '#converter-to'
const HOURS_FROM = '#clock_from_time_0'
const HOURS_TO = '#clock_to_time_0'
const TIME_OUT = 5000;

class convertHours {
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
     * This function gets the current hour between two cities. It opens the browser, open a new page and navigate to an specific URl.
     * After that, it closes the browser and returns the message with the data obtained.
     */
    async getHour(fromCity, toCity) {
        try {
            const browser = await this.newBrowser();
            const myPage = new Scraper(browser);

            await myPage.openNewPage(URL);
            await myPage.fillInput(CONVERT_FROM_INPUT, fromCity);
            await new Promise(resolve => setTimeout(resolve, 1000));
            await myPage.press("ArrowDown");
            await new Promise(resolve => setTimeout(resolve, 1000));
            await myPage.press("Enter");
            await myPage.fillInput(CONVERT_TO_INPUT, toCity);
            await new Promise(resolve => setTimeout(resolve, 1000));
            await myPage.press("ArrowDown");
            await new Promise(resolve => setTimeout(resolve, 1000));
            await myPage.press("Enter");
            await new Promise(resolve => setTimeout(resolve, 1000));
            await myPage.waitForSelector(HOURS_FROM, TIME_OUT);

            const TIME_FROM = await myPage.getTextContent(HOURS_FROM);
            const TIME_TO = await myPage.getTextContent(HOURS_TO);
            const MESSAGE = `En ${fromCity} son las ${TIME_FROM}, mientras que en ${toCity} son las ${TIME_TO}`;

            await myPage.closeBrowser();

            return MESSAGE;
        } catch(e) {
            // TODO: Here we have to save the log
            console.error('Sorry, an unexpected error has happened 😞');
        }
    }
}

module.exports = convertHours;
