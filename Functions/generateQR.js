// This file contains the logic to get a QR code from a URL

'use strict';

const qrcode = require("qrcode");
const fs = require('fs');
const logger = require('../Utils/logs');

/**
 * This async function generates a QR code from a given URL.
 * It saves the QR in JPG format, in the root directory.
 * 
 * @param {string} url URL to be converted into a QR code
 * @param {string} filePath Image's name for the QR to be stored
 */
const generateQR = async(url, filePath) => {
  try {
    const base64QR = await qrcode.toDataURL(url); // Generate a base 64 from the URL
    const binaryStr = atob(base64QR.split(',')[1]); // Generate a binary string from the base 64
    const buffer = Buffer.from(binaryStr, 'binary'); // Generate a buffer from the binary string
  
    fs.writeFile(filePath, buffer, 'binary', (e) => { // Save the QR in image format
      if(e){
        logger.error(`Error writing file in generateQR, ${e}`);
        console.error('Error: ', e);
      } 
    });
  } catch (e) {
    logger.error(`Error executing: generateQR, ${e}`);
    console.error('Error generating QR: ', e);
  }
}

module.exports = {
  generateQR
};
