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
                const urmom = new Discord.MessageEmbed()
                    .setColor(0)
                    .setAuthor(message.author.username, pfp)
                    .setTitle("urmom  :ping_urmom:")
                    .setTimestamp()
                message.channel.send(urmom)
                break;

            case "401156002860498946":
                const urmom = new Discord.MessageEmbed()
                    .setColor(0)
                    .setAuthor(message.author.name, pfp)
                    .setTitle("Ghay Ping.")
                    .setTimestamp()
                message.channel.send(urmom)
                break;

            case "280578071055302657":
                const urmom = new Discord.MessageEmbed()
                    .setColor(0)
                    .setAuthor(message.author.username, pfp)
                    .setTitle("Lol p\nong")
                    .setTimestamp()
                message.channel.send(urmom)
                break;
        }
    }
}