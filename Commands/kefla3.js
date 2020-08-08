module.exports = {
    name: 'kefla3',
    description: 'STR UR Super Saiyan 2 Kefla',
    categories: ['[Peppy Gals](https://dbz-dokkanbattle.fandom.com/wiki/Peppy_Gals)',
                 '[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)',
                 '[Potara](https://dbz-dokkanbattle.fandom.com/wiki/Potara)',
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6)',
                 '[Super Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyans)',
                 '[Super Saiyan 2](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan_2)',
                 '[Final Trump Card](https://dbz-dokkanbattle.fandom.com/wiki/Final_Trump_Card)',
                 '[Rapid Growth](https://dbz-dokkanbattle.fandom.com/wiki/Rapid_Growth)'],
    link: ['[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Battlefield Diva](https://dbz-dokkanbattle.fandom.com/wiki/Battlefield_Diva)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +3 and chance of evading +5%',
           '[Fused Fighter](https://dbz-dokkanbattle.fandom.com/wiki/Fused_Fighter)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Power Bestowed by God](https://dbz-dokkanbattle.fandom.com/wiki/Power_Bestowed_by_God)\n ­ ­ ­ ­ Level 1: ATK +5% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +10% when Super Attack is launched',
           '[Warriors of Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Warriors_of_Universe_6)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +6%',
           '[Tournament of Power](https://dbz-dokkanbattle.fandom.com/wiki/Tournament_of_Power)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK & DEF +7%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['ssj2kefla1', 'ss2kefla1', 'Super Saiyan 2 Kefla'],
    execute(message, args) {
        var color = 8990259;
        var name = "Limit-Breaking Heights\nSuper Saiyan 2 Kefla";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Limit-Breaking_Heights_Kefla#Super%20Saiyan%202%20Kefla";
        var desc = "Super STR UR [JPN]";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/716103327833653329/card_4019760_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720681278789124096/Acoa5zlXV2UaAAAAAElFTkSuQmCC.png";
        var leader = `"[Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6)" Category Ki +3, HP, ATK, DEF +170%; or "[Rapid Growth](https://dbz-dokkanbattle.fandom.com/wiki/Rapid_Growth)" Category Ki +3 and HP, ATK & DEF +150%`;
        var superatk = "[Gigantic Breaker](https://youtu.be/A5oEMgE1jqk?t=68): Raises ATK[1], causes immense damage to enemy and massively lowers DEF[2]";
        var passive = "I'm Number One!: Ki +2 and DEF +160%; ATK +160% when performing a Super Attack; high chance[3] of evading enemy's attack (including Super Attack); launches an additional Super Attack with 6 or more Ki Spheres obtained";
        var stats = "HP: 13,045 (55%)/16,045 (100%)\nATK: 13,736 (55%)/17,136 (100%)\nDEF: 8,933 (55%)/11,533 (100%)";
        const {link} = require('./kefla3.js')
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
        const {categories} = require('./kefla3.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 4,862,147 (unsupported)/6,429,153 (supported)\nDefense: 117,728 \nLinking Partners: [AGL LR Super Saiyan 2 Caulifla & Super Saiyan 2 Kale](https://dbz-dokkanbattle.fandom.com/wiki/Two_Makes_the_Strongest_of_All_Universes_Super_Saiyan_2_Caulifla_%26_Super_Saiyan_2_Kale)/[STR UR Super Saiyan Cabba](https://dbz-dokkanbattle.fandom.com/wiki/Warrior_Race%27s_Resolve_Super_Saiyan_Cabba) \nTeam: [Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6) \nBuild: 6 Additional/20 Critical";
        var blp = "[PHY UR Super Saiyan 2 Kefla](https://dbz-dokkanbattle.fandom.com/wiki/Dreadful_Super_Fusion_Super_Saiyan_2_Kefla) - 6 links shared\n[AGL LR Super Saiyan 2 Caulifla & Super Saiyan 2 Kale](https://dbz-dokkanbattle.fandom.com/wiki/Two_Makes_the_Strongest_of_All_Universes_Super_Saiyan_2_Caulifla_%26_Super_Saiyan_2_Kale) - 5 links shared\n[STR UR Super Saiyan Cabba](https://dbz-dokkanbattle.fandom.com/wiki/Warrior_Race%27s_Resolve_Super_Saiyan_Cabba) - 2 links shared";
        var deets = "► 12 Ki Multiplier is 150%\n► She has a 40% uptime in her SSJ form\n► She has a 20% uptime in her SSJ2 form";
        var footnotes = "[1]: Raises ATK by 30% for 99 turns\n[2]: Lowers enemy's DEF by 80% for 3 turns\n[3]: 50% chance to evade enemy's attack";
        var active = "[In Great Spirits](https://youtu.be/A5oEMgE1jqk?t=57): Changes <:phy:729467520272039988> Ki Spheres to <:str:729468929293942894> Ki Spheres and attacks effective against all Types for 1 turn; can be activated when there is a \"[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)\" or \"[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)\" Category enemy (once only)";
        const {status} = require('./kefla3.js')
        if (status === 'incomplete')
        {
            message.channel.send({embed: {
                color: color,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Super Saiyan 2 Kefla is coming soon."
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
                            name: "Active Skill",
                            value: active
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
                        text: "[1]: Raises ATK by 30% for 99 turns\n[2]: Lowers enemy's DEF by 80% for 3 turns"
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
                        text: "[3]: 50% chance to evade enemy's attack"
                    }
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