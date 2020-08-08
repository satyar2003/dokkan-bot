module.exports = {
    name: 'impcell1',
    description: 'TEQ LR Cell (1st Form)',
    categories: ['[Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)',
                 '[Artificial Life Forms](https://dbz-dokkanbattle.fandom.com/wiki/Artificial_Life_Forms)',
                 '[Androids/Cell Saga](https://dbz-dokkanbattle.fandom.com/wiki/Androids-Cell_Saga)',
                 '[Target: Goku](https://dbz-dokkanbattle.fandom.com/wiki/Target:_Goku)'],
    link: ['[Flee](https://dbz-dokkanbattle.fandom.com/wiki/Flee)\n ­ ­ ­ ­ Level 1: Ki +1 when HP is 30% or below\n ­ ­ ­ ­ Level 10: Ki +2 and chance of evading +10% when HP is 50% or less',
           '[Messenger from the Future](https://dbz-dokkanbattle.fandom.com/wiki/Messenger_from)the_Future)\n ­ ­ ­ ­ Level 1: ATK +5%\n ­ ­ ­ ­ Level 10: ATK +10%',
           '[Big Bad Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Big_Bad_Bosses)\n ­ ­ ­ ­ Level 1: ATK & DEF +25% when HP is 80% or below\n ­ ­ ­ ­ Level 10: ATK & DEF +25%',
           '[Attack of the Clones](https://dbz-dokkanbattle.fandom.com/wiki/Attack_of_the_Clones)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and chance of evading +5%',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'false',
    aliases: ['Cell (1st Form)'],
    execute(message, args) {
        const {link} = require('./impcell1.js')
        const {categories} = require('./impcell1.js')
        const {status} = require('./impcell1.js')
        const {plural} = require('./impcell1.js')
        const {aliases} = require('./impcell1.js')
        var color = 3040566;
        var name = "Life Form of Hate and Ruin\nCell (1st Form)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Life_Form_of_Hate_and_Ruin_Cell_(1st_Form)";
        var desc = "Extreme TEQ LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/722147654171230371/card_1017350_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/722147889513627658/ZWPnSQZjhYAAAAASUVORK5CYII.png";
        var leader = "\"[Artificial Life Forms](https://dbz-dokkanbattle.fandom.com/wiki/Artificial_Life_Forms)\" Category Ki +3 and HP, ATK & DEF +100%";
        var superatk = "[Life Absorption](https://www.youtube.com/watch?v=1-2smKE0gLM): Causes colossal damage to enemy and recovers 15% HP\n[Zetsumei Bullet](https://youtu.be/1-2smKE0gLM?t=14): Causes mega-colossal damage to enemy and lowers ATK & DEF[1]";
        var passive = "Hybrid Cells: ATK & DEF +20000; Ki +1 with each Super Attack performed (up to +6); when Ki is 18 or more, plus an additional ATK +20000 and if the target enemy is in \"ATK Down\" status, performs a critical hit";
        var stats = "HP: 20,495 (55%)/23,095 (100%)\nATK: 13,522 (55%)/16,922 (100%)\nDEF: 13,350 (55%)/16,350 (100%)";
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
        var apt = "APT: 4,516,224 (unsupported)/8,336,949 (supported)\nDefense: 133,796 (unsupported)/246,987 (supported) \nLinking Partner: [Cell (2nd Form)](https://dbz-dokkanbattle.fandom.com/wiki/Pursuing_Perfection_Cell_(2nd_Form)) \nTeam: [Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids) \nBuild: 15 Additional/11 Critical";
        var blp = "[PHY LR Cell (Perfect Form) & Cell Jr.](https://dbz-dokkanbattle.fandom.com/wiki/The_Deadly_Cell_Games_Cell_(Perfect_Form)_%26_Cell_Jr.) - 4 links shared\n[TEQ UR Cell (2nd Form)](https://dbz-dokkanbattle.fandom.com/wiki/Pursuing_Perfection_Cell_(2nd_Form)) - 4 links shared\n[STR UR Perfect Cell](https://dbz-dokkanbattle.fandom.com/wiki/Welcome_to_Hell_Perfect_Cell) - 3 links shared";
        var deets = "► 12 Ki Multiplier is 140%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► Collecting at least 18 Ki and facing an enemy in \"ATK Down\" status are both required for Cell to perform a guaranteed critical hit, but he always gets an additional ATK +20000 when Ki is 18 or more\n► Can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack of other [Cell (1st Form)](https://dbz-dokkanbattle.fandom.com/wiki/Cell_(disambiguation)#CELL_.281ST_FORM.29) cards";
        var footnotes = "[1]: Lowers enemy's ATK & DEF by 20% for 3 turns";
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