module.exports = {
    name: 'krillin1',
    description: 'PHY LR Krillin',
    categories: ['[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Earthlings](https://dbz-dokkanbattle.fandom.com/wiki/Earthlings)'],
    link: ['[Z Fighters](https://dbz-dokkanbattle.fandom.com/wiki/Z_Fighters) (ATK +15%)',
           '[Turtle School](https://dbz-dokkanbattle.fandom.com/wiki/Turtle_School) (ATK +500, DEF +500)',
           '[Courage](https://dbz-dokkanbattle.fandom.com/wiki/Courage) (Ki +1)\n ­ ­ ­ ­ ­Level 1: Ki +1\n ­ ­ ­ ­ ­Ki +1 and ATK +10%',
           '[High Compatability](https://dbz-dokkanbattle.fandom.com/wiki/High_Compatibility)\n ­ ­ ­ ­ ­Level 1: Ki +1\n ­ ­ ­ ­ ­Level 10: Ki +2 and ATK & DEF +10%',
           '[Solid Support](https://dbz-dokkanbattle.fandom.com/wiki/Solid_Support) (ATK +10%, attacked enemy\'s DEF -15%)',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit) (Ki +2)',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power) (ATK +5000 when Super Attack is launched)'],
    status: 'complete',
    plural: 'false',
    aliases: ['Krillin'],
    execute(message, args) {
        const {link} = require('./krillin1.js')
        const {categories} = require('./krillin1.js')
        const {status} = require('./krillin1.js')
        const {plural} = require('./krillin1.js')
        const {aliases} = require('./krillin1.js')
        var color = 7164715;
        var name = "Raging Killer Move\nKrillin";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Raging_Killer_Move_Krillin";
        var desc = "Super PHY LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/720020639192449105/card_1019530_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720681794336456814/8LuQQ7Usdlu3wAAAAASUVORK5CYII.png";
        var leader = "\"[Earthling](https://dbz-dokkanbattle.fandom.com/wiki/Earthlings)\" Category Ki +4 and HP, ATK & DEF +150%";
        var superatk = "[Scattering Energy Wave](https://youtu.be/hvrBqfg5dX4?t=67) (12-17 Ki): Raises ATK[1] and causes colossal damage to all enemies with a medium chance of stunning them[2]\n[Destructo-Disc](https://youtu.be/hvrBqfg5dX4?t=87) (18+ Ki): Raises ATK & DEF[3] and causes mega-colossal damage to enemy";
        var passive = "Courage in Adversity: Ki +3 and DEF +30000; ATK +20000 when performing a Super Attack, plus an additional ATK +20000 if it is an Ultra Super Attack; plus an additional Ki +3 when facing only 1 enemy; ATK +10000 at start of turn per existing enemy when facing 2 or more enemies (count starts from the 2nd enemy), and launches an additional Super Attack when facing 6 or more enemies";
        var stats = "HP: 19,130 (55%)/22,530 (100%)\nATK: 15,940 (55%)/18,940 (100%)\nDEF: 11,010 (55%)/13,610 (100%)";
        var links = "";
            for (var i = 0; i < link.length; i++)
            {
                links += link[i] + "\n";
            }
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 2,211,968 (unsupported)/2,905,793 (supported)\nDefense: 130,037 (unsupported)/163,572 (supported) \nLinking Partner: [TEQ UR Tien](https://dbz-dokkanbattle.fandom.com/wiki/All-Out_Focus_Tien) \nTeam: [Earthlings](https://dbz-dokkanbattle.fandom.com/wiki/Earthlings) \nBuild: 11 Additional/15 Critical";
        var blp = "[INT UR Yamcha](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Declaration_of_War_Yamcha) - 4 links shared\n[AGL LR Trunks (Kid) & Goten (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/Budding_Warrior_Trunks_(Kid)_%26_Goten_(Kid)) - 3 links shared\n[INT LR Goku](https://dbz-dokkanbattle.fandom.com/wiki/Courage_to_the_Max!_Goku) - 3 links shared";
        var deets = "► 12 Ki Multiplier is 140%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%";
        var footnotes = "[1]: Raises ATK by 30% for 99 turns\n[2]: 30% chance to stun each enemy for 2 turns\n[3]: Raises ATK & DEF by 20% for 99 turns";
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