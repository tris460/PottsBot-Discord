// This file will contain the bot connected with Discord

'use strict';

require('dotenv').config();
const fs = require('fs');
const Discord = require("discord.js")
const { Client, Collection } = require('discord.js');
const client = new Client({ intents: [3276799] })

const UtaScrapper = require('./Functions/utaScraper');
const { generateQR } = require('./Functions/generateQR');
const { getFortune } = require('./Functions/fortune');

const urlToQR = 'https://www.youtube.com/watch?v=kF-wqxZPGwA'; // URL to convert to QR code
const QRFileName = 'qr.jpg'; // Image's name for the QR

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity('Amongus')
})

const PREFIX = process.env.PREFIX;

client.commands = new Collection();

const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.name, command);
}

client.on('message', function (message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;
  
    // Convert the rest of the message to a command name and any arguments that
    // may exist in the message.
    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
  
    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    try {
        command.run(message, args);
      } catch (error) {
        console.error(error);
        message.reply('Error trying to execute that command.');
      }
    });

client.on("messageCreate", async message => {
    if (message.content == "hola"){
        message.channel.send("Alo :3")
    }
})

// Auto execute this function when the server is started
(async () => {
  // Create the object to run the scraper
  // const utaScraper = new UtaScrapper('')
  // utaScraper.runScraping();

  // await generateQR(urlToQR, QRFileName);
  
  let fortune = getFortune('shellFortune');
  console.log(fortune);
})();

client.login(process.env.TOKEN)
 