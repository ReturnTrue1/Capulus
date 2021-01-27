const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "work",
    description: "Work your a** off",

    async run (client, message, args) {
        const emoji = client.emojis.cache.find(emoji => emoji.name === "zo")
        let user = message.author;
        let timeout = 600000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`Та ажил хийсэн болохоор${time.minutes} минут, ${time.seconds} секундын дараа дахиж хийнэ үү.`)
        } else {
            let amount = Math.floor(Math.random() * 15000) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            message.channel.send(`${user}, Та ажил хийж ${amount} ${emoji} оллоо`)
        }
    }
}