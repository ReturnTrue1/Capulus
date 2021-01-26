const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

const config = require('./config.json');
const db = require('quick.db');
const  { readdirSync } = require('fs');
const { join } = require('path');

client.commands= new Discord.Collection();
const commandFiles = readdirSync(join(__dirname, "command")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "command", `${file}`));
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('I am ready');
    client.user.setPresence({
        status: "online",  // You can show online, idle... Do not disturb is dnd
        game: {
            name: "c!help",  // The message shown
            type: "Watching" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let prefix = await db.get(`prefix_${message.guild.id}`);
    if(prefix === null) prefix = config.prefix;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.login(process.env.CAPULUS_TOKEN)