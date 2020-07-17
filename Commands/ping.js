module.exports = {
    name: 'ping',
    description: 'Ping!',
    cooldown: 5,
    execute(message, args) {
        if (message.author.id === '401156002860498946')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Ghay Ping.",
                timestamp: new Date()
            }});
        }
        else
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Pong  :ping_pong:",
                timestamp: new Date()
            }});
        }
    }
};