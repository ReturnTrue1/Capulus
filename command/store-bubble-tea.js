const Discord = require('discord.js');

module.exports = {
    name: "bubbletea",
    description: "Show Coffees",

    async run (client, message, args) {
        const emoji = client.emojis.cache.find(emoji => emoji.name === "zo")
        const embed = new Discord.MessageEmbed()
        .setAuthor('Capulus Coffee Shop', `https://i.imgur.com/lIQVZRx.jpg`)
        .setDescription(`***1***. **Бурам Bubble Tea** - 450 ${emoji}  \n 
                         ***2***. **Гүзээлзгэтэй Bubble Tea** - 460 ${emoji}  \n
                         ***3***. **Бор сахартай Bubble Tea** - 450 ${emoji}  \n
                         ***4***. **Нэрстэй Bubble Tea** - 460 ${emoji}  \n
                         ***5***. **Манготай Bubble Tea** - 460 ${emoji}  \n
                         `)
        .setTimestamp();


        message.channel.send(embed);
    }
}