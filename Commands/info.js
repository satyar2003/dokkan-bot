module.exports = {
    name: 'info',
    description: 'Gives info about the bot.',
    execute(message, args) {
        message.channel.send({embed: {
            color: 0,
            author: 
            {
                name: message.author.username,
                icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
            },
            title: "Welcome to Dokkan Bot!",
            thumbnail:
            {
                url: "https://styles.redditmedia.com/t5_384a7/styles/communityIcon_x7w762z66b051.png?width=256&s=6772e70f17d31d50302b8878b04f19544b6f8263"
            },
            fields: [
                {
                    name: "Info",
                    value: " Here we're working on creating a Discord bot that has every (or at least every relevant) character in the game. This is a massive project due to the sheer amount of characters in the game, so if you don't find the character you want please be patient. New characters will be added at least once every two days. Thanks for all the support."
                }
            ],
            timestamp: new Date()
        }});
    }
}