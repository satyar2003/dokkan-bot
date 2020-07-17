module.exports = {
    name: 'stripper',
    description: 'Stripper Gogeta',
    execute(message, args) {
        message.channel.send({embed: {
            color: 0,
            author:
            {
                name: message.author.username,
                icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
            },
            image:
            {
                url: "https://media.discordapp.net/attachments/712036120191434793/712808402753028106/DufSubLW0AEpe--.png?width=1089&height=612"
            },
            timestamp: new Date()
        }});
    }
}