const discord = require('discord.js');
const db = require("quick.db");
exports.run = async(client, message, args) => {
const enginar = message.mentions.channels.first()
if(!enginar) return message.channel.send('Lütfen başvurulog kanalını belirt!')
db.set(`başvuruk_${message.guild.id}`, enginar.id)
const embed = new discord.MessageEmbed()
.setTitle('Başarı ile ayarlandı!')
.setDescription(`başvuru log kanalı az önce <#${enginar.id}> olarak ayarlandı!`)
.setColor('RANDOM')
return message.channel.send(embed)
};
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 3


};
exports.help = {
name : "başvuru-kanal"


};