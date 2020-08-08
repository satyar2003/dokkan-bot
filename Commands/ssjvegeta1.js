module.exports = {
    name: 'ssjvegeta1',
    description: 'INT LR Prime Battle Super Saiyan Vegeta',
    categories: ['[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Vegeta\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Vegeta%27s_Family)',
                 '[Super Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyans)',
                 '[Androids/Cell Saga](https://dbz-dokkanbattle.fandom.com/wiki/Androids-Cell_Saga)'],
    link: ['[Golden Warrior](https://dbz-dokkanbattle.fandom.com/wiki/Golden_Warrior)\n ­ ­ ­ ­ Level 1: Enemy DEF -5% and Ki +1\n ­ ­ ­ ­ Level 10: Enemy DEF -10% and Ki +1',
           '[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Prodigies](https://dbz-dokkanbattle.fandom.com/wiki/Prodigies)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Saiyan Pride](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Pride)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Royal Lineage](https://dbz-dokkanbattle.fandom.com/wiki/Royal_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK +5%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'false',
    aliases: ['ssvegeta1', 'Super Saiyan Vegeta'],
    execute(message, args) {
        var color = 7028604;
        var name = "Awakened Saiyan Blood\nSuper Saiyan Vegeta";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Awakened_Saiyan_Blood_Super_Saiyan_Vegeta";
        var desc = "Extreme INT LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/713512609978253312/card_1015030_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720708451054911568/P5JaIEdrhfVIAAAAAElFTkSuQmCC.png";
        var leader = `"[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)" Category Ki +3 and HP, ATK & DEF +70%`;
        var superatk = "[Photon Bomber](https://dbz-dokkanbattle.fandom.com/wiki/File:F2P_LR_SUPER_SAIYAN_VEGETA_12_%26_18_Ki_SUPER_ATTACK_PREVIEW!_Dragon_Ball_Z_Dokkan_Battle) (12-17 Ki): Causes colossal damage to enemy\n[Big Bang Attack](https://dbz-dokkanbattle.fandom.com/wiki/File:F2P_LR_SUPER_SAIYAN_VEGETA_12_%26_18_Ki_SUPER_ATTACK_PREVIEW!_Dragon_Ball_Z_Dokkan_Battle) (18+ Ki): Greatly raises ATK for 1 turn[1] and causes mega-colossal damage to enemy";
        var passive = "Prince of the Saiyans Returns: ATK +15000 and DEF +20000; plus an additional ATK +15000 and launches 2 additional attacks for 4 turns after receiving attack[2]";
        var stats = "HP: 16,010 (55%)/19,010 (100%)\nATK: 16,642 (55%)/19,642 (100%)\nDEF: 11,693 (55%)/14,693 (100%)";
        const {link} = require('./ssjvegeta1.js')
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
        const {categories} = require('./ssjvegeta1.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 3,717,655 (unsupported)/5,227,622 (supported)\nDefense: 84,649\nLinking Partners: [INT UR Vegeta](https://dbz-dokkanbattle.fandom.com/wiki/Saiyans%27_Limitless_Potential_Vegeta)/[STR UR Majin Vegeta](https://dbz-dokkanbattle.fandom.com/wiki/Non-Negotiable_Resolve_Majin_Vegeta)\nTeam: [Vegeta's Family](https://dbz-dokkanbattle.fandom.com/wiki/Vegeta%27s_Family)\nBuild: 6 Addtional/15 Critical";
        var blp = "[AGL LR Majin Vegeta](https://dbz-dokkanbattle.fandom.com/wiki/Beyond_the_Ferocious_Flash_Majin_Vegeta) - 5 links shared\n[INT UR Super Vegeta](https://dbz-dokkanbattle.fandom.com/wiki/New_Power_from_Training_Super_Vegeta) - 5 links shared\n[STR UR Majin Vegeta](https://dbz-dokkanbattle.fandom.com/wiki/Non-Negotiable_Resolve_Majin_Vegeta) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► The additional attacks from Vegeta's Passive Skill can't be Super Attacks";
        var footnotes = "[1]: Raises SA Multiplier by 50% for 1 turn\n[2]: Can activate again once the first 4 turns are over";
        const {status} = require('./ssjvegeta1.js')
        if (status === 'incomplete')
        {
            message.channel.send({embed: {
                color: color,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Super Saiyan Vegeta is coming soon."
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
                        text: "[1]: Raises SA Multiplier by 50% for 1 turn"
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
                        text: "[2]: Can activate again once the first 4 turns are over"
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