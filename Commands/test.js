//const Discord = require('discord.js');
//const client = new Discord.Client(); 
const {client} = require('../bot.js');
module.exports = {
    name: 'test',
    execute(message, args) {
        message.channel.send("Hi");
        //message.channel.send(`Guilds: ${client.guilds.cache.size}`);
    }
}