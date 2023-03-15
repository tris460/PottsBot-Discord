module.exports = {
    name: 'status',
    description: 'Pendiente',
    execute(message, args) {
        (async () => {
            // Create the object to run the scraper
            // const utaScraper = new UtaScrapper('')
            // utaScraper.runScraping();
          
            // await generateQR(urlToQR, QRFileName);
            
            // let fortune = getFortune('shellFortune');
            // console.log(fortune);
          
            message.channel.send("Ejecutando...");
            const webStatus = new websiteStatus();
            webStatus.getStatus(urlToScan);
          })();
    },
};

const websiteStatus = require('./websiteStatus');
const urlToScan = 'https://github.com';
