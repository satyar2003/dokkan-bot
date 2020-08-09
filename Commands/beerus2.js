module.exports = {
    name: 'beerus2',
    description: 'PHY UR Beerus',
    categories: ['[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)',
                 '[Movie Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Movie_Bosses)',
                 '[Siblings\' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)',
                 '[Worthy Rivals](https://dbz-dokkanbattle.fandom.com/wiki/Worthy_Rivals)',
                 '[Bond of Master and Disciple](https://dbz-dokkanbattle.fandom.com/wiki/Bond_of_Master_and_Disciple)',
                 '[Exploding Rage](https://dbz-dokkanbattle.fandom.com/wiki/Exploding_Rage)'],
    link: ['[Godly Power](https://dbz-dokkanbattle.fandom.com/wiki/Godly_Power)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +15% and chance to perform a critical hit +5%',
           '[Prodigies](https://dbz-dokkanbattle.fandom.com/wiki/Prodigies)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Connoisseur](https://dbz-dokkanbattle.fandom.com/wiki/Connoisseur)\n ­ ­ ­ ­ Level 1: Recover 5% HP\n ­ ­ ­ ­ Level 10: Recover 7% HP and DEF +7%',
           '[The Innocents](https://dbz-dokkanbattle.fandom.com/wiki/The_Innocents)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[Berserker](https://dbz-dokkanbattle.fandom.com/wiki/Berserker)\n ­ ­ ­ ­ Level 1: ATK +20% when HP is 50% or below\n ­ ­ ­ ­ Level 10: ATK +30% when HP is 50% or below',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Beerus'],
    execute(message, args) {
        const {link} = require('./beerus2.js')
        const {categories} = require('./beerus2.js')
        const {status} = require('./beerus2.js')
        const {plural} = require('./beerus2.js')
        const {aliases} = require('./beerus2.js')
        var color = 7164715;
        var name = "Hot-Blooded God of Destruction\nBeerus";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Hot-Blooded_God_of_Destruction_Beerus";
        var desc = "Super PHY UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/720027345980883055/card_1019340_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720529501964075028/ARn2bw76RM8qAAAAAElFTkSuQmCC.png";
        var leader = "\"[Exploding Rage](https://dbz-dokkanbattle.fandom.com/wiki/Exploding_Rage)\" or \"[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)\" Category Ki +3, HP +130% and ATK & DEF +170%";
        var superatk = "[God of Destruction's Edict](https://youtu.be/hvrBqfg5dX4?t=47): Raises ATK[1], causes immense damage to enemy and greatly lowers DEF[2]";
        var passive = "God-on-God Showdown: DEF +100%; ATK +150% when performing a Super Attack; ATK & DEF +70% within the same turn after receiving attack; randomly changes Ki Spheres of a certain Type to <:rbw:729467948690964480> Ki Spheres and attacks effective against all Types when there is a \"[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)\" Category enemy";
        var active = "[Wrath](https://youtu.be/hvrBqfg5dX4?t=38): ATK & DEF +50%, attacks effective against all Types and guaranteed to hit for 1 turn; can be activated when HP is 70% or less, starting from the 4th turn from the start of battle (once only)"
        var stats = "HP: 13,480 (55%)/16,880 (100%)\nATK: 14,026 (55%)/17,026 (100%)\nDEF: 8,353 (55%)/10,953 (100%)";
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
        var apt = "APT: 5,170,563 (unsupported)/6,894,084 (supported)\nDefense: 120,815 (unsupported)/132,897 (supported) \nLinking Partner: [STR LR Beerus & Whis](https://dbz-dokkanbattle.fandom.com/wiki/Global_Harmony_Through_Destruction_Beerus_%26_Whis) \nTeam: [Realm of Gods] \nBuild: 20 Additional/6 Critical";
        var blp = "[STR LR Beerus & Whis](https://dbz-dokkanbattle.fandom.com/wiki/Global_Harmony_Through_Destruction_Beerus_%26_Whis) - 6 links shared\n[PHY UR Champa](https://dbz-dokkanbattle.fandom.com/wiki/Dominance_Through_Destruction_Champa) - 5 links shared\n[STR UR Whis](https://dbz-dokkanbattle.fandom.com/wiki/Best_Measure_Whis) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 150%\n► His additional DEF +70% is calculated separately, for a total boost of DEF +240% after being attacked\n► His Active Skill is also calculated separately, for a total boost of ATK +380% and DEF +410% when all conditions are met, in addition to having all attacks being effective against all enemies\n ­ ­ ­ ­ ­▫ Without receiving an attack first, the total boost would be ATK +275% and DEF +200%";
        var footnotes = "[1]: Raises ATK by 30% for 99 turns\n[2]: Lowers enemy's DEF by 50% for 3 turns";
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
            else if (args[0] === 'active')
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
                            name: "Active Skill",
                            value: active
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