const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "bbingsu",
    description: "Buy an item from the store",

    async run(client, message, args) {
        let purchase = args.join(" ");
        if (!purchase) return message.channel.send('Юу худалдаж авахаа бичнэ үү.')
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        const items = [
            { id: '1', name: 'Ореотой бингсу', price: 700, xp: 70 },
            { id: '2', name: 'Гүзээлзгэнэтэй бингсу', price: 700, xp: 70 },
            { id: '3', name: 'Ногоон цайтай бингсу', price: 700, xp: 70 },
            { id: '4', name: 'Шоколадтай бингсу', price: 700, xp: 70 },
        ]

        const randomBuyGif = [
            "https://i.imgur.com/DnfGH86.gif",
            "https://i.imgur.com/O4d7UTK.gif",
            "https://i.imgur.com/x0IOdlJ.gif",
            "https://i.imgur.com/vJysryq.gif",
            "https://i.imgur.com/Lj2BNoO.gif",
            "https://i.imgur.com/OZHu8N4.gif",
            "https://i.imgur.com/diPKDYz.gif",
            "https://i.imgur.com/1D8Tz8E.gif",
            "https://i.imgur.com/16DCpEg.gif",
            "https://i.imgur.com/eBb35kD.gif",
            "https://i.imgur.com/yUlgdoX.gif",
            "https://i.imgur.com/2thctAY.gif",
            "https://i.imgur.com/9P6IjnV.gif",
            "https://i.imgur.com/Wg5tspI.gif",
            "https://i.imgur.com/hl5tHD5.gif"
        ];

        let randomGifGenerator = Math.floor(Math.random() * randomBuyGif.length);


        if (await purchase) {
            for (let i = 0; i <= items.length + 1; i++) {
                if (await purchase === items[i].id) {
                    if (amount < items[i].price) return message.channel.send('Танд энэ зүйлийг худалдаж авахад мөнгө чинь хүрэхгүй байна.');
                    db.subtract(`money_${message.guild.id}_${message.author.id}`, items[i].price);
                    db.push(message.author.id, `${items[i].name}`);

                    db.add(`xptotal_${message.guild.id}_${message.author.id}`, items[i].xp);
                    db.add(`xp_${message.guild.id}_${message.author.id}`, items[i].xp);

                    let level = db.get(`level_${message.guild.id}_${message.author.id}`) || 1;
                    let xp = db.get(`xp_${message.guild.id}_${message.author.id}`);
                    var xpNeeded = level * 200;

                    if (xpNeeded <= xp) {
                        let newlevel = 1;
                        newlevel = db.add(`level_${message.guild.id}_${message.author.id}`, 1);
                        db.subtract(`xp_${message.guild.id}_${message.author.id}`, xpNeeded);
                        const embedLevelUp = new Discord.MessageEmbed()
                            .setColor('YELLOW')
                            .setTitle('You just leveled up!')
                            .setDescription(`${message.author}, Та ${newlevel} level хүрлээ.`)

                        await message.channel.send(embedLevelUp);
                    }

                    const embedBuy = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(`Энэ таны ${items[i].name}. Баярлалаа.`)
                        .setImage(`${randomBuyGif[randomGifGenerator]}`);
                    await message.channel.send(embedBuy);

                }
            }

        }
    }
}
