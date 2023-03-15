// This file will contain the bot connected with Discord

'use strict';

require('dotenv').config();
const fs = require('fs');
const Discord = require("discord.js")
const { Client, Collection } = require('discord.js');
const client = new Client({ intents: [3276799] })

const UtaScrapper = require('./Functions/utaScraper');
const websiteStatus = require('./Functions/websiteStatus');
const { generateQR } = require('./Functions/generateQR');
const { getFortune } = require('./Functions/fortune');

const urlToQR = 'https://www.youtube.com/watch?v=kF-wqxZPGwA'; // URL to convert to QR code
const QRFileName = 'qr.jpg'; // Image's name for the QR
const urlToScan = 'https://github.com';

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity('Amongus')
})

client.on("messageCreate", async message => {
    if (message.content == "hola"){
        message.channel.send("Alo :3")
    }
})

const prefix = `!`;

// Create a collection to store the commands
client.commands = new Collection();

// Read all the .js files in the commands directory
const commandFiles = fs.readdirSync(`${__dirname}/commands`).filter(file => file.endsWith('.js'));

// Import all the commands and add them to the collection
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);

  if (!command) return;

  try {
      command.execute(message, args);
  } catch (error) {
      console.error(error);
      message.reply('Hubo un error al ejecutar ese comando.');
  }

});

client.login(process.env.TOKEN)
 