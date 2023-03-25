// This file contains the bot connected with Discord

'use strict';

require('dotenv').config();
const fs = require('fs');
const { Client, Collection } = require('discord.js');
const client = new Client({ intents: [3276799] });
const prefix = `!`; // Every command must start with it

// Create a collection to store the commands
client.commands = new Collection();

// Read all the .js files in the commands directory
const commandFiles = fs.readdirSync(`${__dirname}/commands`).filter(file => file.endsWith('.js'));

// Import all the commands and add them to the collection
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

/**
 * Verify if the bot is online, if yes, it will set its activity as playing Amongus and will inform it in console
 */
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Amongus');
});

/**
 * Reads the messages, and when the user sends 'hola', it answers with a message
 */
client.on("messageCreate", async message => {
    if (message.content == "hola") {
        message.channel.send("Hi :3");
    }
});

// Add the "help" command to the collection
client.commands.set("help", {
    name: "help",
    description: "Show a list of the commands available",
    execute(message, args) {
        const commandList = client.commands.map(command => {
            return `${prefix}${command.name} - ${command.description}`;
        }).join('\n');

        message.channel.send(`Available commands:\n${commandList}`);
    }
});

/**
 * When the bot gets a message, it gets the command, verify ha it exists and execute it
 */
client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);

    if (!command) return;

    try {
        command.execute(message, args);
    } catch(e) {
        // TODO: Here we have to save the log
        message.reply('Sorry, an unexpected error has happened 😞');
    }
});

client.login(process.env.TOKEN);
