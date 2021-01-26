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
            { id: '1', name: 'Ореотой бингсу', price: 700 },
            { id: '2', name: 'Гүзээлзгэнэтэй бингсу', price: 700 },
            { id: '3', name: 'Ногоон цайтай бингсу', price: 700 },
            { id: '4', name: 'Шоколадтай бингсу', price: 700 },
        ]

        if (await purchase) {
            for (let i = 0; i <= items.length + 1; i++) {
                 if ( await purchase === items[i].id) {
                    if (amount < items[i].price) return message.channel.send('Танд энэ зүйлийг худалдаж авахад мөнгө чинь хүрэхгүй байна.');
                    db.subtract(`money_${message.guild.id}_${message.author.id}`, items[i].price);
                    db.push(message.author.id, `${items[i].name}`);
                    message.channel.send(`Энэ таны ${items[i].name}. Баярлалаа`)
                }
                console.log(items[i].id);
                console.log(purchase);
            }
        }

    }
}
