const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Not Sistemi`)
.setDescription(`**\`Not Sistemi\`**
» \`${prefix}not-al1\`: **1. Yere Not Alırsınız.**

» \`${prefix}not-al2\`: **2. Yere Not Alırsınız.**

» \`${prefix}not-al3\`: **3. Yere Not Alırsınız.**

» \`${prefix}not-al4\`: **4. Yere Not Alırsınız.**

» \`${prefix}not-al5\`: **5. Yere Not Alırsınız.**

» \`${prefix}not-sil1\`: **1. Yerdeki Notu Silersiniz.**

» \`${prefix}not-sil2\`: **2. Yerdeki Notu Silersiniz.**

» \`${prefix}not-sil3\`: **3. Yerdeki Notu Silersiniz.**

» \`${prefix}not-sil4\`: **4. Yerdeki Notu Silersiniz.**

» \`${prefix}not-sil5\`: **5. Yerdeki Notu Silersiniz.**

» \`${prefix}notlarım\`: **Notlarınıza Bakarsınız.**`)
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
  name: "not-sistemi",
  description: 'yardım kodu.',
  usage: 'yardım'
};