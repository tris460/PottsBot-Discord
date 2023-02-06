// This file will contain the bot connected with Discord

'use strict';

const puppeteer = require('puppeteer');

// Auto execute this function when the server is started
(async () => {
    // Create constants & variables
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Open the specified page and take a screenshot of it
    await page.goto('https://www.utags.edu.mx/');
    await page.screenshot({ path: 'screenshots/image.jpg'});
    await browser.close();
    console.log('Done');
})();
 