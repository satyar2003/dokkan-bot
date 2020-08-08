module.exports = {
    name: 'kidgoku1',
    description: 'PHY UR Goku (Youth) (Giant Ape)',
    categories: ['[Low-Class Warrior](https://dbz-dokkanbattle.fandom.com/wiki/Low-Class_Warrior)',
                 '[World Tournament](https://dbz-dokkanbattle.fandom.com/wiki/World_Tournament)',
                 '[Giant Form](https://dbz-dokkanbattle.fandom.com/wiki/Giant_Form)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Dragon Ball Seekers](https://dbz-dokkanbattle.fandom.com/wiki/Dragon_Ball_Seekers)',
                 '[Goku\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)',
                 '[Youth](https://dbz-dokkanbattle.fandom.com/wiki/Youth)',
                 '[DB Saga](https://dbz-dokkanbattle.fandom.com/wiki/DB_Saga)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))'],
    link: ['[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha)\n ­ ­ ­ ­ Level 1: ATK +5% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +10% when Super Attack is launched',
           '[The Innocents](https://dbz-dokkanbattle.fandom.com/wiki/The_Innocents)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Guidance of the Dragon Balls](https://dbz-dokkanbattle.fandom.com/wiki/Guidance_of_the_Dragon_Balls)\n ­ ­ ­ ­ Level 1: ATK +20%\n ­ ­ ­ ­ Level 10: ATK +20% and chance to perform a critical hit +7%',
           '[The Incredible Adventure](https://dbz-dokkanbattle.fandom.com/wiki/The_Incredible_Adventure)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +3 and ATK & DEF 7%',
           '[Transform](https://dbz-dokkanbattle.fandom.com/wiki/Transform)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +3 and DEF +10%',
           '[Saiyan Roar](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Roar)\n ­ ­ ­ ­ Level 1: ATK +25%\n ­ ­ ­ ­ Level 10: ATK +25% and DEF +10%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Goku (Youth) (Giant Ape)'],
    execute(message, args) {
        const {link} = require('./kidgoku1.js')
        const {categories} = require('./kidgoku1.js')
        const {status} = require('./kidgoku1.js')
        const {plural} = require('./kidgoku1.js')
        const {aliases} = require('./kidgoku1.js')
        var color = 7164715;
        var name = "Outcome of Hardship\nGoku (Youth) (Giant Ape)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Outcome_of_Hardship_Goku_(Youth)_(Giant_Ape)";
        var desc = "Super PHY UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/727221716744405474/card_1010810_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/727221757152460965/340.png";
        var leader = "All Types HP, ATK & DEF +50%";
        var superatk = "Kamehameha: Causes supreme damage to enemy";
        var passive = "Hard-Won Perserverance: ATK +80% at start of turn; may turn[1] into Giant Ape (up to 2 times)";
        var stats = "HP: 11,481 (55%)/14,881 (100%)\nATK: 9,838 (55%)/12,838 (100%)\nDEF: 6,623 (55%)/9,223 (100%)";
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
        var apt = "APT: 1,834,872 (unsupported)/1,943,576 (supported)\nDefense: 40,581 (unsupported)/44,639 (supported) \nLinking Partner: [AGL LR Goku (Youth) & Arale Norimaki](https://dbz-dokkanbattle.fandom.com/wiki/To_an_Exciting_Future_Goku_(Youth)_%26_Arale_Norimaki) \nTeam: [DB Saga](https://dbz-dokkanbattle.fandom.com/wiki/DB_Saga)/[Youth](https://dbz-dokkanbattle.fandom.com/wiki/Youth) \nBuild: 11 Additional/15 Critical";
        var blp = "[AGL LR Goku (Youth) & Arale Norimaki](https://dbz-dokkanbattle.fandom.com/wiki/To_an_Exciting_Future_Goku_(Youth)_%26_Arale_Norimaki) - 4 links shared\n[INT UR Goku (Youth)](https://dbz-dokkanbattle.fandom.com/wiki/All-or-nothing_Punch_Goku_(Youth)) - 4 links shared\n[PHY UR Chi-Chi (Youth)](https://dbz-dokkanbattle.fandom.com/wiki/Immaculately_Innocent_Approach_Chi-Chi_(Youth)) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%";
        var footnotes = "[1]: 10% chance to turn into Giant Ape";
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