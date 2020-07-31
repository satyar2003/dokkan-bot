module.exports = {
    name: 'preview',
    description: 'Shows a preview of the next batch of units',
    execute(message, args) {
        message.channel.send({embed: {
            color: 0,
            author:
            {
                name: message.author.username,
                icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
            },
            title: "Previews",
            fields:
            [
                {
                    name: "AGL UR Vegeta (Kid) & Raditz (Kid) Z\nINT UR Broly (Kid) Z\nSTR LR Zamasu (Goku) Z",
                    value:  "** **"
                }
            ],
            timestamp: new Date()
        }});
    }
}