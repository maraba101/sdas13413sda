const discord = require('discord.js');
const fs = require('fs');
const http = require('http');
const db = require('quick.db');
const moment = require('moment')
const express = require('express');
const ayarlar = require('./ayarlar.json');
const app = express();
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);


//READY.JS

const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async () => {
   client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
  
 client.user.setActivity(`.yardım`, { type:'PLAYING' })
  
  console.log("Bebe Codework")
});

const log = message => {
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(client);

//READY.JS SON

//KOMUT ALGILAYICI

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
           reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

//KOMUT ALGILAYICI SON

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};
client.login(process.env.TOKEN)


//-----------------------KOMUTLAR-----------------------\\
client.on("guildCreate", async guild => {
  guild.owner.send("Senle Çalışmaya Hazırım!");
});
//Atılınca
client.on("guildDelete", async guild => {
  guild.owner.send("Senle Çalışmak Güzeldi Görüşmek Üzere!");
});
//dm hg bb
client.on("guildMemberAdd",  member =>{
  const gereksiz = db.fetch(`dmhgbb_${member.guild.id}`);
  if (gereksiz === "aktif") {
  const hg = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(member.guild.name + '\n Sunucusuna Hoşgeldin!')
  .setDescription(`Umarım sunucumuzda eğlenirsin! İyi vakit geçirmen dileği ile...`)
  .setFooter('Hoşgeldin')
  .setTimestamp()
  member.send(hg)
}else if (gereksiz === "deaktif") {
}
if (!gereksiz) return;
});
////////////////////
client.on("guildMemberRemove",  member =>{
  const gereksiz = db.fetch(`dmhgbb_${member.guild.id}`);
  if (gereksiz === "aktif") {
  const hg = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(member.guild.name + '\n Görüşürüz!')
  .setDescription(`Umarım bizimle vakit geçirirken mutlu olmuşsundur!`)
  .setFooter('Görüşürüz')
  .setTimestamp()
  member.send(hg)
}else if (gereksiz === "deaktif") {
}
if (!gereksiz) return;
});



client.on('message', async msg => {
  let prefix = ayarlar.prefix 
  if(msg.content == `<@!botidiburaya>`) return msg.channel.send(`PRefixim electus Yardım İçin electus Yardım`);
});

