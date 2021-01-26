const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "bcoffee",
    description: "Buy an item from the store",

    async run(client, message, args) {
        let purchase = args.join(" ");
        if (!purchase) return message.channel.send('Юу худалдаж авахаа бичнэ үү.')
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        const items = [
            { id: '1', name: 'Американо', price: 200 },
            { id: '2', name: 'Эспрессо', price: 150 },
            { id: '3', name: 'Кремтэй Эспрессо', price: 250 },
            { id: '4', name: 'Хөөстэй Эспрессо', price: 225 },
            { id: '5', name: 'Желато Эспрессо', price: 300 },
            { id: '6', name: 'Сүүтэй Кофе', price: 350 },
            { id: '7', name: 'Каппучино', price: 325 },
            { id: '8', name: 'Карамель Маккиато', price: 400 },
            { id: '9', name: 'Шоколадтай Кофе', price: 380 },
            { id: '10', name: 'Цагаан Шоколадтай Кофе', price: 390 },
            { id: '11', name: 'Ваниль Латте', price: 395 },
        ]

        if (await purchase) {
            for (let i = 0; i <= items.length + 1; i++) {
                 if ( await purchase === items[i].id) {
                    if (amount < items[i].price) return message.channel.send('Танд энэ зүйлийг худалдаж авахад мөнгө чинь хүрэхгүй байна.');
                    db.subtract(`money_${message.guild.id}_${message.author.id}`, items[i].price);
                    db.push(message.author.id, `${items[i].name}`);
                    message.channel.send(`Энэ таны ${items[i].name}. Баярлалаа.`)
                }
                console.log(items[i].id);
                console.log(purchase);
            }
        }

    }
}
