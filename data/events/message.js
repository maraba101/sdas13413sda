const ayarlar = require("../ayarlar.json");
const db = require('quick.db')
const Discord = require('discord.js')
module.exports = async message => {
  let client = message.client;
  let prefix = 'beta'
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[1].slice(0);
  let params = message.content.split(' ').slice(2);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }

    const csdb = require("croxydb")
   const csdiscord = require("discord.js");
    let csdd = csdb.get(`csrules.${message.author.id}`);
    if (!csdd) {
      let dcs15 = new csdiscord.MessageEmbed()
        .setTitle(client.user.username + " Bot Kuralları \n ** **")
        .setTimestamp()
        .setFooter("Copyright © Electus 2021")
        .setThumbnail()
        .setDescription(
          `**Komutları Kullanmak İçin Botun Kurallarını Kabul Etmen Gerkeli
`) 

        .setColor("PURPLE");
        csdb.add("csrule", 1)
      return message.channel.send(dcs15).then(sunucu => {
        sunucu.react("✅").then
        
      
        let cso = (reaction, user) =>
          reaction.emoji.name === "✅" && user.id === message.author.id;
       let csv = sunucu.createReactionCollector(cso, { time: 0 });
        

        csv.on("collect", async r => {
          message
            .reply(
              "**Kurallarımızı Kabul Ettiğiniz İçin Teşekkürler Botumuzu Artık Sorunsuz Bir Şekilde Kullana Bilirsiniz!**"
            )
            .then(cs => cs.delete({ timeout: 5000 }));
          message.delete({ timeout: 100 });
          sunucu.delete({ timeout: 100 });
          csdb.set(`csrules.${message.author.id}`, "Kabul Etti");
        });
 
        
      });
    }
  
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
  
 	 let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor(`RED`)
 .setDescription(`<a:redke:763316512937082890> **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/EJ4txQM) gelebilirsin!`)
  if(karaliste) return message.channel.send(westraben)
    cmd.run(client, message, params, perms);
  }
};