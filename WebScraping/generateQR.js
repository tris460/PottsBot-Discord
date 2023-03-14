'use strict';

const qrcode = require("qrcode");
const fs = require('fs');

const url = 'https://www.youtube.com/watch?v=kF-wqxZPGwA';

const generateQR = async() => {
  const base64QR = await qrcode.toDataURL(url);
  const filePath = 'qr.jpg';

  const binaryStr = atob(base64QR.split(',')[1]);
  const buffer = Buffer.from(binaryStr, 'binary');

  fs.writeFile(filePath, buffer, 'binary', (err) => {
    if(err) console.error('Error: ', err);
    console.log("QR guardado correctamente")
  });
}

module.exports = {
  generateQR
};
