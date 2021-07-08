var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "invite",
    description: "invite link of bot",
    usage: "1) m/invite \n2) m/inv",
    aliases: ['i']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}invite`){
    var log = new Discord.MessageEmbed()
    .setColor(`#dcf104`)
    .setAuthor("BOT SUPPORT","https://media.discordapp.net/attachments/820950216249180170/850232718927069234/compressed-5ce3fc5d-03a0-4c0b-8254-28b4663a9136.png?width=676&height=676")
    .setDescription("[**CLICK HERE TO INVITE ME**](https://discord.com/oauth2/authorize?client_id=830706586128482305&scope=bot&permissions=2147483647&response_type=code)",true)

message.channel.send(log);
}
}
}