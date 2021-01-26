const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "Receive a daily award of money",

    async run (client, message, args) {
        const embed = new Discord.MessageEmbed()
        .setAuthor('Capulus Coffee Shop', `https://i.imgur.com/lIQVZRx.jpg`)
        .addFields(
            { name: '**Эдийн засаг**', value: '`bal`, `daily`, `work`, `inventory`, `leaderboard`'},
            { name: '**Цэс харах**', value: '`coffee`, `drink`, `bubbletea`, `bingsu`'},
            { name: '**Худалдаж авах**', value: '`bcoffee`, `bdrink`, `bbubbletea`, `bbingsu`'},
        )
        .setTimestamp();


        message.channel.send(embed);
    }
}