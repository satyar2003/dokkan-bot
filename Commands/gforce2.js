module.exports = {
    name: 'gforce2',
    description: 'TEQ LR Ginyu (Goku) (Ginyu Force)',
    categories: ['[Planet Namek Saga](https://dbz-dokkanbattle.fandom.com/wiki/Planet_Namek_Saga)',
                 '[Ginyu Force](https://dbz-dokkanbattle.fandom.com/wiki/Ginyu_Force)',
                 '[Dragon Ball Seekers](https://dbz-dokkanbattle.fandom.com/wiki/Dragon_Ball_Seekers)',
                 '[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)',
                 '[Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)',
                 '[Special Pose](https://dbz-dokkanbattle.fandom.com/wiki/Special_Pose)'],
    link: ['[The Ginyu Force](https://dbz-dokkanbattle.fandom.com/wiki/The_Ginyu_Force)\n ­ ­ ­ ­ Level 1: ATK +25%\n ­ ­ ­ ­ Level 10: ATK +25% and damage received -5%',
           '[Signature Pose](https://dbz-dokkanbattle.fandom.com/wiki/Signature_Pose)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +3 and ATK +7%',
           '[Gentleman](https://dbz-dokkanbattle.fandom.com/wiki/Gentleman)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 & DEF +10%',
           '[Respect](https://dbz-dokkanbattle.fandom.com/wiki/Respect)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Loyalty](https://dbz-dokkanbattle.fandom.com/wiki/Loyalty)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +1 and damage received -5%',
           '[More Than Meets the Eye](https://dbz-dokkanbattle.fandom.com/wiki/More_Than_Meets_the_Eye)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK & DEF +10%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'false',
    aliases: ['Ginyu (Goku) (Ginyu Force)'],
    execute(message, args) {
        const {link} = require('./gforce2.js')
        const {categories} = require('./gforce2.js')
        const {status} = require('./gforce2.js')
        const {plural} = require('./gforce2.js')
        const {aliases} = require('./gforce2.js')
        var color = 3040566;
        var name = "Ginyu Force Reborn\nGinyu (Goku) (Ginyu Force)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Ginyu_Force_Reborn_Ginyu_(Goku)_(Ginyu_Force)";
        var desc = "Extreme TEQ LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/724672768184025271/card_1013100_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/724673100037226606/wflDpjgsa9cPwAAAABJRU5ErkJggg.png";
        var leader = "\"[Ginyu Force](https://dbz-dokkanbattle.fandom.com/wiki/Ginyu_Force)\" Category Ki +3 and HP, ATK & DEF +100%";
        var superatk = "[Milky Cannon](https://dbz-dokkanbattle.fandom.com/wiki/File:(Super_Attack_%2B12-17_Ki)_Ginyu_(Goku)_(Ginyu_Force)_-_Show_Off_Ginyu_Force) (12-17 Ki): Greatly raises ATK for 1 turn[1] and causes colossal damage to enemy\n[Special Fighting Assault](https://dbz-dokkanbattle.fandom.com/wiki/File:(Super_Attack_%2B18)_Ginyu_(Goku)_(Ginyu_Force)_-_Show_Off_Ginyu_Force) (18+ Ki): Causes mega-colossal damage to enemy and raises Extreme Class allies' ATK by 30% for 1 turn";
        var passive = "Malevolent Magnificence: Extreme Class allies' ATK & DEF +30%; \"[Ginyu Force](https://dbz-dokkanbattle.fandom.com/wiki/Ginyu_Force)\" Category allies' ATK & DEF +20% in addition";
        var stats = "HP: 13,766 (55%)/16,366 (100%)\nATK: 14,224 (55%)/17,624 (100%)\nDEF: 10,887 (55%)/13,887 (100%)";
        var links = "";
            for (var i = 0; i < Math.ceil(link.length/2); i++)
            {
                links += link[i] + "\n";
            }
        var links2 = "";
            for (var i = Math.ceil(link.length/2); i < link.length; i++)
            {
                links += link[i] + "\n";
            }
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 2,935,817 (unsupported)/3,658,789 (supported)\nDefense: 116,318 (unsupported)/153,672 (supported) \nLinking Partner: [PHY LR Captain Ginyu (Ginyu Force)](https://dbz-dokkanbattle.fandom.com/wiki/The_Ultimate_Fighting_Squadron_Captain_Ginyu_(Ginyu_Force)) \nTeam: [Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)/[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost) \nBuild: 6 Additional/20 Critical";
        var blp = "[PHY SR Ginyu (Goku)](https://dbz-dokkanbattle.fandom.com/wiki/Intimidating_Body_Exchange_Ginyu_(Goku)) - 6 links shared\n[PHY LR Captain Ginyu (Ginyu Force)](https://dbz-dokkanbattle.fandom.com/wiki/The_Ultimate_Fighting_Squadron_Captain_Ginyu_(Ginyu_Force)) - 5 links shared\n[INT UR Captain Ginyu](https://dbz-dokkanbattle.fandom.com/wiki/Courageous_Clash_Captain_Ginyu) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 160%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%";
        var footnotes = "[1]: Raises SA Multiplier by 50% for 1 turn";
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