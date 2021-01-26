const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "bal",
    description: "bleh",

    async run (client, message, args) {
        const emoji = client.emojis.cache.find(emoji => emoji.name === "zo")
        let user = message.mentions.users.first() || message.author;

        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
        if(bal === null) bal = 0;

        message.channel.send(`${user} танд ${bal} ${emoji} байна.`);
    }
}