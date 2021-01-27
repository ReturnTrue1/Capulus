const db = require('quick.db');
const canvacord = require('canvacord');
const Discord = require('discord.js');

module.exports = {
  name: "rank",
  description: "See rank",

  async run(client, message, args) {
    var user = message.mentions.users.first() || message.author;
    var level = db.get(`level_${message.guild.id}_${user.id}`) || 1;
    let xp = db.get(`xp_${message.guild.id}_${user.id}`) || 0;
    let xpNeeded = level * 200;
    let every = db
        .all()
        .filter(i => i.ID.startsWith(`xptotal_${message.guild.id}_`))
        .sort((a, b) => {b.data - a.data});
    let rank = every.map(x => x.ID).indexOf(`xptotal_${message.guild.id}_${user.id}`) + 1;
    let image = new canvacord.Rank()
      .setUsername(user.username)
      .setDiscriminator(user.discriminator)
      .setStatus(user.presence.status)
      .setCurrentXP(xp) 
      .setRequiredXP(xpNeeded)
      .setRank(rank)
      .setLevel(level)
      .setAvatar(user.displayAvatarURL({ format: "png", dynamic: false }))
      .setRankColor('white')
      image.build()
      .then(data => {
        const attachments = new Discord.MessageAttachment(data, "rank.png");
        message.channel.send(attachments);
      })
  }
}