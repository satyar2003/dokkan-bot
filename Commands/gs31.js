module.exports = {
    name: 'gs31',
    description: 'TEQ UR Great Saiyaman 3',
    categories: ['[Hybrid Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Hybrid_Saiyans)',
                 '[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)',
                 '[Vegeta\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Vegeta%27s_Family)',
                 '[Dragon Ball Heroes](https://dbz-dokkanbattle.fandom.com/wiki/Dragon_Ball_Heroes)'],
    link: ['[Infighter](https://dbz-dokkanbattle.fandom.com/wiki/Infighter)\n ­ ­ ­ ­ Level 1: ATK +10% and enemy DEF -10%\n ­ ­ ­ ­ Level 10: ATK +15% and enemy DEF -15%',
           '[Hero](https://dbz-dokkanbattle.fandom.com/wiki/Hero)\n ­ ­ ­ ­ Level 1: DEF +20%\n ­ ­ ­ ­ Level 10: DEF +25%',
           '[Hero of Justice](https://dbz-dokkanbattle.fandom.com/wiki/Hero_of_Justice)\n ­ ­ ­ ­ Level 1: ATK +25%\n ­ ­ ­ ­ Level 10: ATK +25% and chance to perform a critical hit +5%',
           '[Patrol](https://dbz-dokkanbattle.fandom.com/wiki/Patrol)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +20%',
           '[Solid Support](https://dbz-dokkanbattle.fandom.com/wiki/Solid_Support)\n ­ ­ ­ ­ Level 1: ATK +10% and enemy DEF -15%\n ­ ­ ­ ­ Level 10: ATK +15% and enemy DEF -20%',
           '[Respect](https://dbz-dokkanbattle.fandom.com/wiki/Respect)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Great Saiyaman 3'],
    execute(message, args) {
        const {link} = require('./gs31.js')
        const {categories} = require('./gs31.js')
        const {status} = require('./gs31.js')
        const {plural} = require('./gs31.js')
        const {aliases} = require('./gs31.js')
        var color = 3040566;
        var name = "Hero Who Unites the World\nGreat Saiyaman 3";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Hero_Who_Unites_the_World_Great_Saiyaman_3";
        var desc = "Super TEQ UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/718983552510853140/card_1017280_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720679211052040312/340.png";
        var leader = "[Super Class](https://dbz-dokkanbattle.fandom.com/wiki/Category:Super_Class) Ki +3 and HP, ATK & DEF +80%";
        var superatk = "[Justice Slash](https://youtu.be/QTt_bI_dDA0?t=38): Causes immense damage to enemy and raises Super Class allies' ATK by 25% for 1 turn";
        var passive = "[Charisma of a Hero](https://youtu.be/QTt_bI_dDA0?t=33): ATK & DEF +17% and chance of performing a critical hit +3% per \"[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)\" Category ally on the team; DEF -30% within the same turn after receiving attack; counters with tremendous power[1] upon receiving normal attacks";
        var stats = "HP: 11,886 (55%)/14,486 (100%)\nATK: 10,427 (55%)/13,827 (100%)\nDEF: 7,296 (55%)/10,296 (100%)";
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
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 4,471,069 (unsupported)/5,140,708 (supported)\nDefense: 56,820 (unsupported)/65,330 (supported) \nLinking Partner: [TEQ UR Golden Cooler](https://dbz-dokkanbattle.fandom.com/wiki/The_Golden_Strongest_Form_Golden_Cooler) \nTeam: [Dragon Ball Heroes](https://dbz-dokkanbattle.fandom.com/wiki/Dragon_Ball_Heroes) \nBuild: 6 Additional/20 Critical";
        var blp = "[STR UR Great Saiyaman 4](https://dbz-dokkanbattle.fandom.com/wiki/World-Saving_Hero_Great_Saiyaman_4) - 5 links shared\n[INT UR Gohan (Teen) & Videl](https://dbz-dokkanbattle.fandom.com/wiki/Brave_Pair_Gohan_(Teen)_%26_Videl) - 4 links shared\n[PHY LR Great Saiyaman 1 & 2](https://dbz-dokkanbattle.fandom.com/wiki/Blazing_Love_and_Burning_Justice_Great_Saiyaman_1_%26_2) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 145%\n► Maximum possible boost from Passive Skill is ATK & DEF +119% and chance to perform a critical hit +21%\n► After receiving an attack he doesn't simply lose 30% of his original DEF boost, but 30% of his total defense, because that part of his Passive Skill is calculated separately\n ­ ­ ­ ­ ­▫ For instance, on a \"[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)\" team his DEF boost would go from +119% to +53.3%";
        var footnotes = "[1]: Tremendous power multiplier is 300%";
        if (status === 'incomplete')
        {
            var person = aliases[aliases.length - 1]
            if (plural === 'false')
            {
                message.channel.send({embed: {
                    color: color,
                    author:
                    {
                        name: message.author.username,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: `${person} is coming soon.`
                }});
            }
            else
            {
                message.channel.send({embed: {
                    color: color,
                    author:
                    {
                        name: message.author.username,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: `${person} are coming soon.`
                }});
            }
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