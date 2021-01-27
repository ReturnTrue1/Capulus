const Discord = require('discord.js');

module.exports = {
    name: "softdrink",
    description: "Show Coffees",

    async run (client, message, args) {
        const emoji = client.emojis.cache.find(emoji => emoji.name === "zo")
        const embed = new Discord.MessageEmbed()
        .setAuthor('Capulus Coffee Shop', `https://i.imgur.com/lIQVZRx.jpg`)
        .setDescription(`***1***. **Шоколадтай сүү** - 150 ${emoji}  \n 
                         ***2***. **Ногоон цай** - 100 ${emoji}  \n
                         ***3***. **Карамель Дессерт** - 450 ${emoji}  \n
                         ***4***. **Шоколадтай Дессерт** - 330 ${emoji}  \n
                         ***5***. **Хар цай** - 80 ${emoji}  \n
                         ***6***. **Ургамлын цай** - 120 ${emoji}  \n
                         ***7***. **Хан Боргоцойтой цай** - 150 ${emoji}  \n
                         ***8***. **Зөгийн балтай цай** - 130 ${emoji}  \n
                         ***9***. **Луувантай, жүржтэй цай** - 150 ${emoji}  \n
                         ***10***. **Жүржтэй цай** - 150 ${emoji}  \n
                         ***11***. **Манготай цай** - 180 ${emoji}  \n
                         ***12***. **Гүзээлзгэнтэй смүүти** - 350 ${emoji}  \n
                         ***13***. **Нэрстэй смүүти** - 350 ${emoji}  \n
                         ***14***. **Манготай смүүти** - 350 ${emoji}  \n
                         ***15***. **Хан боргоцойтой смүүти** - 350 ${emoji}  \n
                         ***16***. **Жүрж** - 300 ${emoji}  \n
                         ***17***. **Киви** - 300 ${emoji}  \n
                         `)
        .setTimestamp();


        message.channel.send(embed);
    }
}