module.exports = {
    name: 'whis1',
    description: 'STR UR Whis',
    categories: ['[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)',
                 '[Siblings\' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)',
                 '[Bond of Master and Disciple](https://dbz-dokkanbattle.fandom.com/wiki/Bond_of_Master_and_Disciple)'],
    link: ['[Godly Power](https://dbz-dokkanbattle.fandom.com/wiki/Godly_Power)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +15% and chance to perform a critical hit +5%',
           '[Cold Judgment](https://dbz-dokkanbattle.fandom.com/wiki/Cold_Judgment)\n ­ ­ ­ ­ Level 1: DEF +20%\n ­ ­ ­ ­ Level 10: DEF +25%',
           '[Connoisseur](https://dbz-dokkanbattle.fandom.com/wiki/Connoisseur)\n ­ ­ ­ ­ Level 1: Recover 5% HP\n ­ ­ ­ ­ Level 10: Recover 7% HP and DEF +7%',
           '[Gentleman](https://dbz-dokkanbattle.fandom.com/wiki/Gentleman)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 & DEF +10%',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[Solid Support](https://dbz-dokkanbattle.fandom.com/wiki/Solid_Support)\n ­ ­ ­ ­ Level 1: ATK +10% and all enemies\' DEF -15%\n ­ ­ ­ ­ Level 10: ATK +15% and all enemies\' DEF -20%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Whis'],
    execute(message, args) {
        const {link} = require('./whis1.js')
        const {categories} = require('./whis1.js')
        const {status} = require('./whis1.js')
        const {plural} = require('./whis1.js')
        const {aliases} = require('./whis1.js')
        var color = 8990259;
        var name = "Best Measure\nWhis";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Best_Measure_Whis";
        var desc = "Super STR UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/725045500868558858/card_1019360_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/725045528164958358/340.png";
        var leader = "\"[Bond of Master and Disciple](https://dbz-dokkanbattle.fandom.com/wiki/Bond_of_Master_and_Disciple)\" Category Ki +3 and HP, ATK & DEF +120%";
        var superatk = "Angelic Induction: Causes supreme damage to enemy, lowers ATK & DEF[1] and seals Super Attack";
        var passive = "Peripheral Awareness: ATK & DEF +100%; great chance[2] of evading enemy's attack (including Super Attack), plus an additional DEF +50% within the same turn with each attack evaded (including Super Attack); all allies' ATK +50% and recovers 10% HP at the end of turn when there is an ally whose name includes \"[Beerus](https://dbz-dokkanbattle.fandom.com/wiki/Beerus_(disambiguation))\" (Whirus excluded) attacking in the same turn";
        var stats = "HP: 11,373 (55%)/14,373 (100%)\nATK: 10,879 (55%)/14,279 (100%)\nDEF: 6,988 (55%)/9,588 (100%)";
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
        var apt = "APT: 2,366,372 (unsupported)/2,785,310 (supported)\nDefense: 189,336 (unsupported)/212,987 (supported) \nLinking Partner: [PHY UR Beerus](https://dbz-dokkanbattle.fandom.com/wiki/Hot-Blooded_God_of_Destruction_Beerus) \nTeam: [Exploding Rage](https://dbz-dokkanbattle.fandom.com/wiki/Exploding_Rage)/[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods) \nBuild: 6 Additional/20 Critical";
        var blp = "[PHY UR Gowasu & Zamasu](https://dbz-dokkanbattle.fandom.com/wiki/A_Lesson_in_Good_and_Evil_Gowasu_%26_Zamasu) - 5 links shared\n[PHY UR Beerus](https://dbz-dokkanbattle.fandom.com/wiki/Hot-Blooded_God_of_Destruction_Beerus) - 4 links shared\n[TEQ UR Beerus](https://dbz-dokkanbattle.fandom.com/wiki/Devastating_Punishment_Beerus) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► His additional DEF +50% per attack evaded is calculated separately, resulting in a boost of DEF +100% with each attack evaded\n► [AGL SSR Whis](https://dbz-dokkanbattle.fandom.com/wiki/Puzzle_Wrapped_in_Enigma_Whis) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "[1]: Lowers enemy's ATK & DEF by 20% for 3 turns\n[2]: 70% chance to evade enemy's attack";
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
                        text: "[1]: Lowers enemy's ATK & DEF by 20% for 3 turns"
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
                    timestamp: new Date(),
                    footer:
                    {
                        text: "[2]: 70% chance to evade enemy's attack"
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