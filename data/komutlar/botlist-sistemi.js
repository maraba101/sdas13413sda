const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Botlist`)
.setDescription(`**\`Botlist\`**
» \`${prefix}bot-ekle\`: **Bot Eklersiniz.**

» \`${prefix}bot-onayla\`: **Bot Ekleme İsteğini Onaylarsınız.**

» \`${prefix}bot-reddet\`: **Bot Ekleme İsteğini Reddedersiniz.**

» \`${prefix}başvuru-kanal\`: **Bot Ekleme Kanalını Ayarlarsınız.**

» \`${prefix}başvuru-log\`: **Başvuru Log Kanalını Ayarlarsınız.**

» \`${prefix}bot-rol\`: **Bot Rolünü Ayarlarsınız.**

» \`${prefix}yetkili-log\`: **Yetkili Log Kanalını Ayarlarsınız.**

» \`${prefix}tester-rol\`: **Tester Rolü Kanalını Ayarlarsınız.**`)

.setThumbnail("https://cdn.discordapp.com/attachments/785821149580754954/786124655085748264/766653460988428308.gif")
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "botlist-sistemi",
  description: 'yardım kodu.',
  usage: 'yardım'
};