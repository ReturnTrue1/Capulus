const Discord = require('discord.js');

module.exports = {
    name: "coffee",
    description: "Show Coffees",

    async run (client, message, args) {
        const emoji = client.emojis.cache.find(emoji => emoji.name === "zo")
        const embed = new Discord.MessageEmbed()
        .setAuthor('Capulus Coffee Shop', `https://i.imgur.com/lIQVZRx.jpg`)
        .setDescription(`***1***. **Американо** - 200 ${emoji}  \n 
                         ***2***. **Эспрессо** - 150 ${emoji}  \n
                         ***3***. **Кремтэй Эспрессо** - 250 ${emoji}  \n
                         ***4***. **Хөөстэй Эспрессо** - 225 ${emoji}  \n
                         ***5***. **Желато Эспрессо** - 300 ${emoji}  \n
                         ***6***. **Сүүтэй Кофе** - 350 ${emoji}  \n
                         ***7***. **Каппучино** - 325 ${emoji}  \n
                         ***8***. **Карамель Маккиато** - 400 ${emoji}  \n
                         ***9***. **Шоколадтай Кофе** - 380 ${emoji}  \n
                         ***10***. **Цагаан Шоколадтай Кофе** - 390 ${emoji}  \n
                         ***11***. **Ваниль Латте** - 395 ${emoji}  \n
                         `)
        .setTimestamp();


        message.channel.send(embed);
    }
}