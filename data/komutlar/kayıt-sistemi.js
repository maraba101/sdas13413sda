const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Kayıt Sistemi`)
.setDescription(`**\`Kayıt Sistemi\`**
» \`${prefix}kız-rol\`: **Kız Rolünün Ayarlarsınız.**

» \`${prefix}erkek-rol\`: **Erkek Rolünün Ayarlarsınız.**

» \`${prefix}alınacak-rol\`: **Alınacak Rolünün Ayarlarsınız.**

» \`${prefix}kayıt-kanal\`: **Kayıt Kanalını Ayarlarsınız.**

» \`${prefix}kayıt-log\`: **Kayıt Logu Ayarlarsınız.**

» \`${prefix}kayıt-tag\`: **Kayıt Tagını Ayarlarsınız.**

» \`${prefix}kayıt-yetkili\`: **Kayıt Yetkili Rolünü Ayarlarsınız.**

» \`${prefix}kız\`: **Belirttiğiniz Kişiyi Kız Olarak Kayıt Edersiniz.**

» \`${prefix}erkek\`: **Belirttiğiniz Kişiyi Erkek Olarak Kayıt Edersiniz.**`)

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
  name: "kayıt-sistemi",
  description: 'yardım kodu.',
  usage: 'yardım'
};