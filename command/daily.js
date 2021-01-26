const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "daily",
    description: "Receive a daily award of money",

    async run (client, message, args) {
        let user = message.author;
        let timeout = 86400000;
        let amount = 500;
        const emoji = client.emojis.cache.find(emoji => emoji.name === "zo")

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`Та аль хэдийн ${emoji}-гоо авсан байна. \`${time.days} өдөр\`, \`${time.hours} цаг\`, \`${time.minutes} минут\`, \`${time.seconds} секунд\`-ын дараа дахиж авна уу.`)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

            message.channel.send(`Танд ${amount} ${emoji} орлоо.`)
        }
    }
}