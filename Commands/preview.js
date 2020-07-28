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
                    name: "AGL UR Vegeta (Kid) & Raditz (Kid)\nINT UR Broly (Kid)\n INT LR Goku Black (Super Saiyan Rosé)",
                    value:  "** **"
                }
            ],
            timestamp: new Date()
        }});
    }
}