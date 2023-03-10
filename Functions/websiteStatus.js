'use strict';

const puppeteer = require('puppeteer');
const Scraper = require('../Utils/ScraperFunctions/index');
const { createPDF } = require('../Utils/savePDF');

const URL = 'https://pagespeed.web.dev/';
const TIME_OUT = 15000;
const INPUT_ID = 'input#i4';
const BUTTON_SELECTOR = 'html body#yDmH0d.tQj5Y.ghyPEc.IqBfM.ecJEib.EWZcud.EIlDfe.cjGgHb.d8Etdd.LcUz9d c-wiz.SSPGKf div.T4LgNb div.kFwPee div.ZVTDqc form.TbIHAd div.VfPpkd-dgl2Hf-ppHlrf-sM5MNb button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.c659ib';
const WAIT_SELECTOR = 'html body#yDmH0d.tQj5Y.ghyPEc.IqBfM.ecJEib.EWZcud.EIlDfe.cjGgHb.d8Etdd.LcUz9d c-wiz.SSPGKf div.T4LgNb div.kFwPee div.FEJ8Zc div div div span div c-wiz div div.Xp7cSe div.deAhhc div.VfPpkd-WsjYwc.VfPpkd-WsjYwc-OWXEXe-INsAgc.KC1dQ.Usd1Ac.AaN0Dd.wRXBI div div.PePDG article.lh-root.lh-vars.lh-screenshot-overlay--enabled div.lh-container div div.lh-header-container div.lh-scores-wrapper div.lh-scores-container div.lh-scores-header';
const options = {
  path: 'status.pdf',
  format: 'A4',
  printBackground: true
};

class websiteStatus {
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
  
  async getStatus(urlToScan) {
    const browser = await this.newBrowser();
    const myPage = new Scraper(browser);

    await myPage.openNewPage(URL);
    await myPage.fillInput(INPUT_ID, urlToScan, TIME_OUT);
    await myPage.click(BUTTON_SELECTOR);
    await myPage.waitForSelector(WAIT_SELECTOR);
    await myPage.takeScreenshot();
    let pdfBuffer = await myPage.getPDF(options);
    await createPDF(pdfBuffer);
    // await myPage.closeBrowser();
  }
}

module.exports = websiteStatus;
