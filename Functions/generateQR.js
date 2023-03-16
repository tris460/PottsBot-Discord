'use strict';

const qrcode = require("qrcode");
const fs = require('fs');

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
  
    fs.writeFile(filePath, buffer, 'binary', (err) => { // Save the QR in image format
      if(err) console.error('Error: ', err);
    });
  } catch (err) {
    console.error('Error generating QR: ', err);
  }
}

module.exports = {
  generateQR
};
