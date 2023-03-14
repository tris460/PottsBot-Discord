'use strict';

const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function savePDFToFile(pdfBytes, filePath) {
    fs.writeFile(filePath, pdfBytes, (error) => {
        if (error) {
            console.error('Error al guardar el archivo:', error);
        } else {
            console.log('Archivo guardado correctamente:', filePath);
        }
    });
}

async function createPDF(buffer) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const pageContent = buffer.toString();
    const { width, height } = page.getSize();
    page.drawText(pageContent, {
        x: 50,
        y: height - 50,
        size: 12,
    });
    const pdfBytes = await pdfDoc.save();
    await savePDFToFile(pdfBytes, 'ejemplo.pdf');
}

module.exports = {
  createPDF
};
