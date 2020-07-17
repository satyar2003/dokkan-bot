module.exports = {
    name: 'fkgoku1z',
    description: 'STR UR Family Kamehameha Goku with EZA',
    categories: ['[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Movie Heroes](https://dbz-dokkanbattle.fandom.com/wiki/Movie_Heroes)',
                 '[Goku\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)',
                 '[Super Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyans)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))'],
    link: ['[Blazing Battle](https://dbz-dokkanbattle.fandom.com/wiki/Blazing_Battle) (Disables enemy\'s Rampage, and ATK +15%)',
           '[Golden Warrior](https://dbz-dokkanbattle.fandom.com/wiki/Golden_Warrior) (Ki +1, enemy DEF -2000)',
           '[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race) (ATK +700)',
           '[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan) (ATK +10%)',
           '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha) (ATK +2500 when Super Attack is launched)',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit) (Ki +2)'],
    status: 'complete',
    aliases: ['Super Saiyan Goku Z'],
    execute(message, args) {
        var color = 8990259;
        var name = "Miraculous Kamehameha\nSuper Saiyan Goku Z";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Miraculous_Kamehameha_Super_Saiyan_Goku#Extreme%20Z-Awakened";
        var desc = "Super STR UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/712885597580296202/card_1008920_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720535130434961408/SQdyTJqkElZdZoEWHPMqhOgJKhxHy5X9So09QBJbQN19QB9cS8yayV40IXJ6SKmJgKIXV7GxlwC9QbpZKv4jD1JsbM23g93F6zNq.png";
        var leader = "<:agl:729467484289105930>, <:int:729468835819946026>, and <:str:729468929293942894> Type Ki +2 and HP, ATK & DEF +70%";
        var superatk = "Family Kamehameha: Causes supreme damage to enemy and raises allies' ATK by 25% for 1 turn";
        var passive = "Miracles Descend: Ki +3 and ATK & DEF +80% when HP is 30% or above; disables Rampage[1]";
        var stats = "HP: 14,026 (55%)/17,026 (100%)\nATK: 12,815 (55%)/16,215 (100%)\nDEF: 7,190 (55%)/9,790 (100%)";
        const {link} = require('./fkgoku1z.js')
        var links = "";
            for (var i = 0; i < link.length; i++)
            {
                links += link[i] + "\n";
            }
        const {categories} = require('./fkgoku1z.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 2,127,020 (unsupported)/2,590,471 (supported)\nDefense: 77,536\nLinking Partner: [AGL UR Super Saiyan Gohan (Teen)](https://dbz-dokkanbattle.fandom.com/wiki/Unyielding_Kamehameha_Super_Saiyan_Gohan_(Teen))\nTeam: [Goku's Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)\nBuild: 6 Additional/20 Critical";
        var blp = "[AGL UR Super Saiyan Gohan (Teen)](https://dbz-dokkanbattle.fandom.com/wiki/Unyielding_Kamehameha_Super_Saiyan_Gohan_(Teen)) - 6 links shared\n[STR UR Super Saiyan Goten (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/Furious_Kamehameha_Super_Saiyan_Goten_(Kid)) - 6 links shared\n[TEQ UR Super Saiyan Vegeta](https://dbz-dokkanbattle.fandom.com/wiki/Reclaim_the_Summit_Super_Saiyan_Vegeta) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 135%\n► [TEQ SSR Super Saiyan Goku](https://dbz-dokkanbattle.fandom.com/wiki/Furious_Limit-Breaking_Super_Saiyan_Goku), [TEQ SSR Super Saiyan Goku](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Super_Saiyan_Super_Saiyan_Goku), [TEQ SR Super Saiyan Goku](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Super_Saiyan_Super_Saiyan_Goku#Japan), & [INT SR Super Saiyan Goku](https://dbz-dokkanbattle.fandom.com/wiki/New_Challenges_Super_Saiyan_Goku) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Battle](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Battle:_Family_Kamehameha)** event";
        var footnotes = `[1]: Disables Broly's Rampage skill in "Berserker of Destruction"`;
        const {status} = require('./fkgoku1z.js')
        if (status === 'incomplete')
        {
            message.channel.send({embed: {
                color: color,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Super Saiyan Goku Z is coming soon."
            }});
        }
        else
        {
            if (!args.length)
            {
                message.channel.send({embed: {
                    color: color,
                    author:
                    {
                        name: message.author.username,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: name,
                    url: url,
                    description: desc,
                    thumbnail:
                    {
                        url: circle
                    },
                    fields: [
                        {
                            name: "Leader Skill",
                            value: leader
                        },
                        {
                            name: "Super Attack",
                            value: superatk
                        },
                        {
                            name: "Passive Skill",
                            value: passive
                        },
                        {
                            name: "Stats",
                            value: stats
                        },
                        {
                            name: "Links",
                            value: links
                        },
                        {
                            name: "Categories",
                            value: cats
                        },
                        {
                            name: "Attack Per Turn",
                            value: apt
                        },
                        {
                            name: "Best Linking Partners",
                            value: blp
                        },
                        {
                            name: "Details",
                            value: deets
                        }
                    ],
                    image:
                    {
                        url: character
                    },
                    timestamp: new Date(),
                    footer:
                    {
                        text: footnotes
                    }
                }});
            }
            else if (args[0] === 'leader')
            {
                message.channel.send({embed: {
                    color: color,
                    author:
                    {
                        name: message.author.name,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: name,
                    url: url,
                    description: desc,
                    thumbnail:
                    {
                        url: circle
                    },
                    fields: [
                        {
                            name: "Leader Skill",
                            value: leader
                        }
                    ],
                    timestamp: new Date()
                }});
            }
            else if (args[0] === 'super')
            {
                message.channel.send({embed: {
                    color: color,
                    author:
                    {
                        name: message.author.name,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: name,
                    url: url,
                    description: desc,
                    thumbnail:
                    {
                        url: circle
                    },
                    fields: [
                        {
                            name: "Super Attack",
                            value: superatk
                        }
                    ],
                    timestamp: new Date()
                }});
            }
            else if (args[0] === 'passive')
            {
                message.channel.send({embed: {
                    color: color,
                    author:
                    {
                        name: message.author.name,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: name,
                    url: url,
                    description: desc,
                    thumbnail:
                    {
                        url: circle
                    },
                    fields: [
                        {
                            name: "Passive Skill",
                            value: passive
                        }
                    ],
                    timestamp: new Date(),
                    footer:
                    {
                        text: footnotes
                    }
                }});
            }
            else if (args[0] === 'stats')
            {
                message.channel.send({embed: {
                    color: color,
                    author:
                    {
                        name: message.author.name,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: name,
                    url: url,
                    description: desc,
                    thumbnail:
                    {
                        url: circle
                    },
                    fields: [
                        {
                            name: "Stats",
                            value: stats
                        }
                    ],
                    timestamp: new Date()
                }});
            }
            else if (args[0] === 'links')
            {
                message.channel.send({embed: {
                    color: color,
                    author:
                    {
                        name: message.author.name,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: name,
                    url: url,
                    description: desc,
                    thumbnail:
                    {
                        url: circle
                    },
                    fields: [
                        {
                            name: "Links",
                            value: links
                        }
                    ],
                    timestamp: new Date()
                }});
            }
            else if (args[0] === 'categories')
            {
                message.channel.send({embed: {
                    color: color,
                    author:
                    {
                        name: message.author.name,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: name,
                    url: url,
                    description: desc,
                    thumbnail:
                    {
                        url: circle
                    },
                    fields: [
                        {
                            name: "Categories",
                            value: cats
                        }
                    ],
                    timestamp: new Date()
                }});
            }
            else if (args[0] === 'apt')
            {
                message.channel.send({embed: {
                    color: color,
                    author:
                    {
                        name: message.author.name,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: name,
                    url: url,
                    description: desc,
                    thumbnail:
                    {
                        url: circle
                    },
                    fields: [
                        {
                            name: "Attack Per Turn",
                            value: apt
                        }
                    ],
                    timestamp: new Date()
                }});
            }
            else if (args[0] === 'partners')
            {
                message.channel.send({embed: {
                    color: color,
                    author:
                    {
                        name: message.author.name,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: name,
                    url: url,
                    description: desc,
                    thumbnail:
                    {
                        url: circle
                    },
                    fields: [
                        {
                            name: "Best Linking Partners",
                            value: blp
                        }
                    ],
                    timestamp: new Date()
                }});
            }
            else if (args[0] === 'details')
            {
                message.channel.send({embed: {
                    color: color,
                    author:
                    {
                        name: message.author.name,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: name,
                    url: url,
                    description: desc,
                    thumbnail:
                    {
                        url: circle
                    },
                    fields: [
                        {
                            name: "Details",
                            value: deets
                        }
                    ],
                    timestamp: new Date()
                }});
            }
            else if (args[0] === 'art')
            {
                message.channel.send({embed: {
                    color: color,
                    author:
                    {
                        name: message.author.name,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: name,
                    url: url,
                    description: desc,
                    thumbnail:
                    {
                        url: circle
                    },
                    image:
                    {
                        url: character
                    },
                    timestamp: new Date()
                }});
            }
            else
            {
                message.channel.send(`${message.author} that is not a valid sub-command. You can use \`d!help\` to find out all possible sub-commands.`)
            }
        }
    }
}