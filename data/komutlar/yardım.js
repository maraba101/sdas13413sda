const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`**\`Yardım\`**
» \`${prefix}not-sistemi\`: **Not Tutma Silme Vb. Komutlarını Gösterir.**

» \`${prefix}moderasyon\`: **Moderasyon Komutlarını Gösterir.**

» \`${prefix}botlist-sistemi\`: **Botlist Sistemi Komutlarını Gösterir.**

» \`${prefix}kayıt-sistemi\`: **Kayıt Sistemi Komutlarını Gösterir.**

» \`${prefix}sahip\`: **Sahip Komutlarını Gösterir.**

» \`${prefix}bot\`: **Botla İlgili Komutlarını Gösterir.**

» \`${prefix}kullanıcı\`: **Kullanıcı Komutlarını Gösterir.**`)

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
  name: "yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};