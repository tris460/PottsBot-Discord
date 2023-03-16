// In this file you'll find the steps to collect data from the available jobs in utags.edu.mx page

'use strict';

const puppeteer = require('puppeteer');
const Scraper = require('../Utils/ScraperFunctions/index'); //TAL VEZ CAMBIAR


// import { read } from 'clipboardy';

const URL = 'https://www.scribbr.es/citar/generador/apa/';

// const URL_USER = ''

const URL_INPUT_ID = '#autocite-search'
const BUSQUEDA_BUTTON_ID = '#top > div.grow > div.container-lg.space-y-12.py-24 > div.space-y-2 > div > div > div.relative.space-y-2\\.5 > div > form > label > div > button.relative.max-w-full.items-center.justify-center.truncate.rounded-md.border.fill-current.font-semibold.transition-colors.inline-flex.text-base.h-10.px-4.justify-around.border-transparent.bg-orange-9.text-white.hover\\:bg-orange-10.hidden.md\\:inline-block';
const CITA_BUTTON_ID = '.bg-blue-12';
const CLIPBOARD_BUTTON_ID = 'button.border-navy-blue-7:nth-child(3)';
const CLIPBOARD_CONFIRM_ID = '.bg-blue-9';
const CITA_TEXT_ID = 'div.space-y-4:nth-child(2) > div:nth-child(1) > div:nth-child(2)';
const TIME_OUT = 5000;



class generateAPA {
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
            headless: false
        });
    }

    /**
     * This function executes the scraper. It opens the browser, open a new page and navigate to an specific URl.
     * After that, it takes a screenshot of the page and close the browser.
     */
    async runScraping(urlToAPA) {
        const browser = await this.newBrowser();
        const myPage = new Scraper(browser);

        await myPage.openNewPage(URL);
        await myPage.fillInput(URL_INPUT_ID, urlToAPA);

        await myPage.click(BUSQUEDA_BUTTON_ID, TIME_OUT);

        await myPage.waitForSelector(CITA_BUTTON_ID, TIME_OUT)
        await myPage.click(CITA_BUTTON_ID, TIME_OUT);

        await myPage.waitForSelector(CLIPBOARD_BUTTON_ID, TIME_OUT);

        await myPage.click(CLIPBOARD_BUTTON_ID, TIME_OUT);
        await myPage.click(CLIPBOARD_CONFIRM_ID, TIME_OUT);

        await myPage.waitForSelector(CITA_TEXT_ID, TIME_OUT)
        const text = await myPage.getTextContent(CITA_TEXT_ID);
        console.log(text);

        await myPage.closeBrowser();
    }
}

module.exports = generateAPA;