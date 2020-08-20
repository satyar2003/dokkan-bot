module.exports = {
    name: 'help',
    description: 'Find out the command for the unit you want to learn about.',
    execute(message, args) {
        message.channel.send({embed: {
            color: 0,
            author:
            {
                name: message.author.username,
                icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
            },
            title: "Search for the unit you want!",
            thumbnail:
            {
                url: "https://styles.redditmedia.com/t5_384a7/styles/communityIcon_x7w762z66b051.png?width=256&s=6772e70f17d31d50302b8878b04f19544b6f8263"
            },
            fields: [
                {
                    name: "** **",
                    value: `Click [here](https://docs.google.com/spreadsheets/d/1qrwEwbD_awrFoNtFbZyome8Y17z8goj-RqaPSNhPdWQ/edit?usp=sharing) for a list of all the units currently in the bot's database, and search for the one you want. You can use ctrl+f to quickly search for the name of a specific character.\n*New additions are being made to the bot at least once every two days, so if you don't see a character you want please be patient. If you have any questions or would like to see a character added to the bot, you can DM on Discord (Nobody#0244) or Reddit (u/nobody2169).*\nThank you for all the support.`
                },
                {
                    name: "Miscellaneous",
                    value: "**cats**: Shows you all the categories two units share (Not every character is able to be used with the command yet)\n**help**: Gives you a help link for all the commands.\n**info**: Give you information on the bot.\n**links**: Shows you all the links two units share (Not every character is able to be used with the command yet)\n**ping**: Lets you play ping pong with the bot.\n**preview**: Shows a preview of the next batch of units.\n**search [command family]**: Shows you all the characters with that name or command family. Use \`d!search\` by itself to find an example of how to use the command.\n**stripper**: Shows you Stripper Gogeta."
                },
                {
                    name: "Sub-commands",
                    value: "These are key words that you can add after you type a command to see specific parts of a unit's kit. \n**Sub-command list**:\n**leader**: Leader Skill\n**super**: Super Attack\n**passive**: Passive Skill\n**active**: Active Skill\n**stats**: Stats\n**links**: Links\n**categories**: Categories\n**apt**: Attack Per Turn\n**partners**: Best Linking Partners\n**details**: Details\n**art**: Character's art\n**transform**: Transformation conditions (does not apply to giant units or exchange units)\n**exchange**: Exchange conditions\nEx. `d!androids1 leader` shows you PHY LR Androids #17 & #18/Android #16's Leader Skill."
                },
                {
                    name: "Notes",
                    value: `-All characters are in alphabetical order\n-If a character has "Super Saiyan" in their name, it will be listed as "Super Saiyan 1"\n-EZA characters will have a "z" at the end of their command\n-The number at the end of a command will indicate the order in which that specific character was released compared to other versions of the same character, with 1 being the start`
                },
                {
                    name: "Status",
                    value: "-**Complete**: everything is ready and no information is missing\n-**Work in progress (WIP)**: most of the information is present with only a few pieces of information missing\n-**Incomplete**: most or all of the information is missing"
                }
            ],
            timestamp: new Date()
        }});
    }
}