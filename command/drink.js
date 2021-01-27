const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js');

module.exports = {
    name: "drink",
    description: "Work your a** off",

    async run(client, message, args) {

        const randomDrinkGif = [
            'https://i.imgur.com/fAndfxM.gif',
            'https://i.imgur.com/yELdO87.gif',
            'https://i.imgur.com/pECXbwn.gif',
            'https://i.imgur.com/ukuotKf.gif',
            'https://i.imgur.com/b4QoPvG.gif',
            'https://i.imgur.com/iyVAsbq.gif',
            'https://i.imgur.com/ADLj4Dk.gif',
            'https://i.imgur.com/TIbsMLH.gif',
            'https://i.imgur.com/5aujfoM.gif',
            'https://i.imgur.com/HDJwTh5.gif',
            'https://i.imgur.com/MhRsryN.gif',
            'https://i.imgur.com/RlMSLzD.gif',
            'https://i.imgur.com/EwR6AjR.gif',
            'https://i.imgur.com/DgIO1BA.gif',
            'https://i.imgur.com/DJG1FXT.gif'
        ];

        let randomGifGenerator = Math.floor(Math.random() * randomDrinkGif.length) + 1;
        let drink = db.fetch(message.author.id).toString();
        let drinks = drink.split(',');
        if (drink === null || drink.length === 0 || !drink) {
            message.channel.send(`Танд уух зүйл алга.`)
        } else if (drink) {
            const embedDrink = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`You have drank ${drinks[0]}.`)
                .setImage(`${randomDrinkGif[randomGifGenerator]}`);
            message.channel.send(embedDrink);
            let drinked = drinks.slice(1);
            db.set(message.author.id, drinked)
        }
    }
}