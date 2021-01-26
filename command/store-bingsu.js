const Discord = require('discord.js');

module.exports = {
    name: "bingsu",
    description: "Show Coffees",

    async run (client, message, args) {
        const emoji = client.emojis.cache.find(emoji => emoji.name === "zo")
        const embed = new Discord.MessageEmbed()
        .setAuthor('Capulus Coffee Shop', `https://i.imgur.com/lIQVZRx.jpg`)
        .setDescription(`***1***. **Ореотой бингсу** - 700 ${emoji}  \n 
                         ***2***. **Гүзээлзгэнэтэй бингсу** - 700 ${emoji}  \n
                         ***3***. **Ногоон цайтай бингсу** - 700 ${emoji}  \n
                         ***4***. **Шоколадтай бингсу** - 700 ${emoji}  \n
                         `)
        .setTimestamp();


        message.channel.send(embed);
    }
}