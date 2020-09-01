const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'Ping!',
    cooldown: 5,
    execute(message, args) {
        var userID = message.author.id
        var pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        switch (userID)
        {
            default:
                const original = new Discord.MessageEmbed()
                    .setColor(0)
                    .setAuthor(message.author.username, pfp)
                    .setTitle("Pong  :ping_pong:")
                    .setTimestamp()
                message.channel.send(original)
                break;

            case "508172020085817365":
                const steven = new Discord.MessageEmbed()
                    .setColor(0)
                    .setAuthor(message.author.username, pfp)
                    .setTitle("Ghay Ping.")
                    .setTimestamp()
                message.channel.send(steven)
                break;

            case "745453698167341256":
                const andrew = new Discord.MessageEmbed()
                    .setColor(0)
                    .setAuthor(message.author.username, pfp)
                    .setTitle("Lol p\nong")
                    .setTimestamp()
                message.channel.send(andrew)
                break;
        }
    }
}