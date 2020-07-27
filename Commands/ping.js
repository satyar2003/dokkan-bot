const { DiscordAPIError } = require("discord.js");

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

            case "401156002860498946":
                const steven = new Discord.MessageEmbed()
                    .setColor(0)
                    .setAuthor(message.author.name, pfp)
                    .setTitle("Ghay Ping.")
                    .setTimestamp()
                message.channel.send(steven)
                break;

            case "280578071055302657":
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