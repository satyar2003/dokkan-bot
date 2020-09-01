module.exports = {
    name: 'buuhan1',
    description: 'INT UR Majin Buu (Ultimate Gohan) without EZA',
    categories: ['[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Artificial Life Forms](https://dbz-dokkanbattle.fandom.com/wiki/Artificial_Life_Forms)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))',
                 '[Final Trump Card](https://dbz-dokkanbattle.fandom.com/wiki/Final_Trump_Card)',
                 '[Majin Power](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Power)',
                 '[Power Absorption](https://dbz-dokkanbattle.fandom.com/wiki/Power_Absorption)'],
    link: ['[Majin](https://dbz-dokkanbattle.fandom.com/wiki/Majin)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +15%',
           '[Big Bad Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Big_Bad_Bosses)\n ­ ­ ­ ­ Level 1: ATK & DEF +25% when HP is 80% or below\n ­ ­ ­ ­ Level 10: ATK & DEF +25%',
           '[Metamorphosis](https://dbz-dokkanbattle.fandom.com/wiki/Metamorphosis) (Recovers 5% HP)',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha)\n ­ ­ ­ ­ Level 1: ATK +5% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +10% when Super Attack is launched',
           '[The Wall Standing Tall](https://dbz-dokkanbattle.fandom.com/wiki/The_Wall_Standing_Tall)\n ­ ­ ­ ­ Level 1: Disables enemy\'s True Power; ATK +15%\n ­ ­ ­ ­ Level 10: Disables enemy\'s True Power; ATK +20%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Majin Buu (Ultimate Gohan)'],
    execute(message, args) {
        var color = 7028604;
        var name = "Countdown to Despair\nMajin Buu (Ultimate Gohan)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Countdown_to_Despair_Majin_Buu_(Ultimate_Gohan)";
        var desc = "Extreme INT UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/714715001746882671/card_1008090_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720530738809798676/AVAmlyudOWyfAAAAAElFTkSuQmCC.png";
        var leader = "<:int:729468835819946026> Type Ki +3 and HP, ATK & DEF +70%";
        var superatk = "Super Kamehameha (SA Lv. 1-4): Causes immense damage to enemy\nVice Shout (SA Lv. 5+): Causes immense damage to enemy and lowers ATK & DEF[1]\nSuper Ghost Kamikaze Attack (30% change at SA Lv. 10+): Causes immense damage to enemy with greater power[2] and lowers ATK & DEF";
        var passive = "Winning is Everything: For every Ki obtained, ATK +12% and recover 3000 HP";
        var stats = "HP: 12,017 (55%)/15,017 (100%)\nATK: 11,181 (55%)/14,181 (100%)\nDEF: 5,999 (55%)/8,999 (100%)";
        const {link} = require('./buuhan1.js')
        var links = "";
            for (var i = 0; i < Math.ceil(link.length/2); i++)
            {
                links += link[i] + "\n";
            }
        var links2 = "";
            for (var i = Math.ceil(link.length/2); i < link.length; i++)
            {
                links2 += link[i] + "\n";
            }
        const {categories} = require('./buuhan1.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 1,937,508 (unsupported)/2,372,904 (supported)\nDefense: 39,595\nLinking Partner: [PHY UR Buu (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/Heartless_Destruction_Buu_(Kid)) \nTeam: [Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost) \nBuild: 6 Additional/15 Critical";
        var blp = "[PHY UR Majin Buu (Gotenks)](https://dbz-dokkanbattle.fandom.com/wiki/Love_of_the_Throne_Majin_Buu_(Gotenks)) - 5 links shared\n[PHY UR Buu (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/Heartless_Destruction_Buu_(Kid)) - 4 links shared\n[INT UR Buu (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/Transcendent_Majin_Buu_(Kid)) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► [STR SR Buu (Ultimate Gohan)](https://dbz-dokkanbattle.fandom.com/wiki/Eradicator_of_Hope_Majin_Buu_(Ultimate_Gohan)) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Battle](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Battle:_Countdown_to_Despair_Majin_Buu_(Ultimate_Gohan))** event";
        var footnotes = "[1]: Lowers enemy's ATK & DEF by 20% for 3 turns\n[2]: Raises SA Multiplier by 60% during Super Attack (does not stack)";
        const {status} = require('./buuhan1.js')
        if (status === 'incomplete')
        {
            message.channel.send({embed: {
                color: color,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Majin Buu (Ultimate Gohan) is coming soon."
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
                            name: "Links cont.",
                            value: links2
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
                    timestamp: new Date(),
                    footer:
                    {
                        text: footnotes
                    }
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
                    timestamp: new Date()
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
                        },
                        {
                            name: "Links cont.",
                            value: links2
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