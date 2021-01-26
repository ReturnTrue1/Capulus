const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "bdrink",
    description: "Buy an item from the store",

    async run(client, message, args) {
        let purchase = args.join(" ");
        if (!purchase) return message.channel.send('Юу худалдаж авахаа бичнэ үү.')
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        const items = [
            { id: '1', name: 'Шоколадтай сүү', price: 150 },
            { id: '2', name: 'Ногоон цай', price: 100 },
            { id: '3', name: 'Карамель Дессерт', price: 450 },
            { id: '4', name: 'Шоколадтай Дессерт', price: 330 },
            { id: '5', name: 'Хар цай', price: 80 },
            { id: '6', name: 'Ургамлын цай', price: 120 },
            { id: '7', name: 'Хан Боргоцойтой цай', price: 150 },
            { id: '8', name: 'Зөгийн балтай цай', price: 130 },
            { id: '9', name: 'Луувантай, жүржтэй цай', price: 150 },
            { id: '10', name: 'Жүржтэй цай', price: 150 },
            { id: '11', name: 'Манготай цай', price: 180 },
            { id: '12', name: 'Гүзээлзгэнтэй смүүти', price: 350 },
            { id: '13', name: 'Нэрстэй смүүти', price: 350 },
            { id: '14', name: 'Манготай смүүти', price: 350 },
            { id: '15', name: 'Хан боргоцойтой смүүти', price: 350 },
            { id: '16', name: 'Жүрж', price: 300 },
            { id: '17', name: 'Киви', price: 300 },
        ]

        if (await purchase) {
            for (let i = 0; i <= items.length + 1; i++) {
                 if ( await purchase === items[i].id) {
                    if (amount < items[i].price) return message.channel.send('Танд энэ зүйлийг худалдаж авахад мөнгө чинь хүрэхгүй байна.');
                    db.subtract(`money_${message.guild.id}_${message.author.id}`, items[i].price);
                    db.push(message.author.id, `${items[i].name}`);
                    message.channel.send(`Энэ таны ${items[i].name}. Баярлалаа.`)
                }
            }
        }

    }
}
