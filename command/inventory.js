const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "inventory",
    description: "View your inventory",


    async run (client, message, args) {
        let items = await db.fetch(message.author.id);
        if(items === null || items === undefined || items.length === 0) items = "Танд юу ч алга."

        const Embed = new Discord.MessageEmbed()
        .addField('Inventory', items)
        .setTimestamp()

        message.channel.send(Embed);
    }
}