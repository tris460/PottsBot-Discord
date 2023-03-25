// This file contains the steps to get the status of a website

'use strict';

const puppeteer = require('puppeteer');
const Scraper = require('../Utils/ScraperFunctions/index');

const URL = 'https://pagespeed.web.dev/';
const TIME_OUT = 15000;
const INPUT_ID = 'input#i4';
const BUTTON_SELECTOR = 'html body#yDmH0d.tQj5Y.ghyPEc.IqBfM.ecJEib.EWZcud.EIlDfe.cjGgHb.d8Etdd.LcUz9d c-wiz.SSPGKf div.T4LgNb div.kFwPee div.ZVTDqc form.TbIHAd div.VfPpkd-dgl2Hf-ppHlrf-sM5MNb button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.c659ib';
const WAIT_SELECTOR = 'html body#yDmH0d.tQj5Y.ghyPEc.IqBfM.ecJEib.EWZcud.EIlDfe.cjGgHb.d8Etdd.LcUz9d c-wiz.SSPGKf div.T4LgNb div.kFwPee div.FEJ8Zc div div div span div c-wiz div div.Xp7cSe div.deAhhc div.VfPpkd-WsjYwc.VfPpkd-WsjYwc-OWXEXe-INsAgc.KC1dQ.Usd1Ac.AaN0Dd.wRXBI div div.zqSD3 div div div.OyzgL';
const options = {
  path: 'status.pdf',
  format: 'A4',
  printBackground: true
};

/**
 * This class contains all the steps to get the status for a website in PDF format
 */
class websiteStatus {
  /**
   * This constructor initializes the necessary variables for the scraper
   * @param { Array[string][string] } flag Array with the flag's name and its value
   */
  constructor(flag = []) {
    this.flag = flag;
  }

  /**
   * Opens a new browser to start the process
   * @returns A puppeteer instance
   */
  async newBrowser() {
    try {
      return await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: false
      });
    } catch(e) {
      // TODO: Here we have to save the log
      message.channel.send('Sorry, an unexpected error has happened 😞');
    }
  }
  
  /**
   * This function opens a new browser and the page to check your site status,
   * then, it get the status and saves it in a PDF.
   * @param { string } urlToScan URL you want to scan
   */
  async getStatus(urlToScan) {
    try {
      const browser = await this.newBrowser();
      const myPage = new Scraper(browser);

      await myPage.openNewPage(URL);
      await myPage.fillInput(INPUT_ID, urlToScan, TIME_OUT);
      await myPage.click(BUTTON_SELECTOR);
      await myPage.waitForSelector(WAIT_SELECTOR);
      await myPage.getPDF(options);
      await myPage.closeBrowser();
    } catch(e) {
      // TODO: Here we have to save the log
      message.channel.send('Sorry, an unexpected error has happened 😞');
    }
  }
}

module.exports = websiteStatus;
