// In this file you'll find the steps to collect data from the available jobs in utags.edu.mx page

'use strict';

const puppeteer = require('puppeteer');
const Scraper = require('../Utils/ScraperFunctions/index'); //TAL VEZ CAMBIAR


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
        return await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            headless: true
        });
    }

    /**
     * This function executes the scraper. It opens the browser, open a new page and navigate to an specific URl.
     * After that, it takes a screenshot of the page and close the browser.
     */
    async runScraping(fromCity, toCity) {
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

        await myPage.waitForSelector(HOURS_FROM, TIME_OUT)
        const hoursFrom = await myPage.getTextContent(HOURS_FROM);
        const hoursTo = await myPage.getTextContent(HOURS_TO);

        const msg = `en ${fromCity} son las ${hoursFrom} mientras que en ${toCity} son las ${hoursTo}`

        await myPage.closeBrowser();

        return msg;
    }
}

module.exports = convertHours;