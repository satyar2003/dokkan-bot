module.exports = {
    name: 'lssjbroly1',
    description: 'TEQ LR Broly after transformation',
    categories: ['[Resurrected Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Resurrected_Warriors)',
                 '[Movie Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Movie_Bosses)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Super Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyans)',
                 '[Target: Goku](https://dbz-dokkanbattle.fandom.com/wiki/Target:_Goku)',
                 '[Exploding Rage](https://dbz-dokkanbattle.fandom.com/wiki/Exploding_Rage)',
                 '[Revenge](https://dbz-dokkanbattle.fandom.com/wiki/Revenge)',
                 '[Inhuman Deeds](https://dbz-dokkanbattle.fandom.com/wiki/Inhuman_Deeds)'],
    link: ['[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race)\n ­ ­ ­ ­ Level 1: ATK +5%\n ­ ­ ­ ­ Level 10: ATK +10%',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Berserker](https://dbz-dokkanbattle.fandom.com/wiki/Berserker)\n ­ ­ ­ ­ Level 1: ATK +20% when HP is 50% or below\n ­ ­ ­ ­ Level 10: ATK +30% when HP is 50% or below',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'false',
    aliases: ['lssbroly1', 'Legendary Super Saiyan Broly'],
    execute(message, args) {
        var color = 3040566;
        var name = "Nightmarish Impact\nLegendary Super Saiyan Broly";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Nightmarish_Impact_Super_Saiyan_Broly#Legendary_Super_Saiyan_Broly";
        var desc = "Extreme TEQ LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/715080789867495495/card_4016880_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720701693813063680/Bj8sAAAAASUVORK5CYII.png";
        var leader = `"[Resurrected Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Resurrected_Warriors)" Category Ki +4 and HP, ATK & DEF +130%; or <:eteq:729475482105544734> Type Ki +4 and HP, ATK & DEF +100%`;
        var superatk = "[Omega Blaster](https://dbz-dokkanbattle.fandom.com/wiki/File:(Super_Attack)_Transformed_Super_Saiyan_Broly_-_Nightmarish_Impact_(12-17_Ki)) (12-17 Ki): Causes colossal damage and greatly lowers enemy's DEF[1]\n[Gigantic Meteor](https://dbz-dokkanbattle.fandom.com/wiki/File:(Super_Attack)_Transformed_Super_Saiyan_Broly_-_Nightmarish_Impact_(18_Ki)) (18+ Ki): Causes mega-colossal damage and massively lowers enemy's DEF[2]";
        var passive = "Devilish Siege: ATK & DEF +100% when performing a Super Attack, plus an additional ATK +88% if it is an Ultra Super Attack; launches an additional attack that has a medium chance[3] of becoming a Super Attack when facing only 1 enemy; launches an additional Super Attack when facing 2 or more enemies";
        var stats = "HP: 22,088 (55%)/24,688 (100%)\nATK: 17,445 (55%)/20,845 (100%)\nDEF: 10,275 (55%)/13,275 (100%)";
        const {link} = require('./lssjbroly1.js')
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
        const {categories} = require('./lssjbroly1.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT (without active skill): 7,217,360 (unsupported)/12,585,133 (supported)\nAPT (with active skill): 11,793,657 (unsupported)/20,564,963 (supported)\nDefense: 142,909\nLinking Partner: [AGL UR Turles](https://dbz-dokkanbattle.fandom.com/wiki/Explosive_Evolution_Turles) \nTeam: [Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost) \nBuild: 6 Additional/20 Critical";
        var blp = "[STR LR Legendary Super Saiyan Broly](https://dbz-dokkanbattle.fandom.com/wiki/Indestructible_Saiyan_Evil_Legendary_Super_Saiyan_Broly) - 7 links shared\n[PHY UR Legendary Super Saiyan Broly](https://dbz-dokkanbattle.fandom.com/wiki/Indestructible_Saiyan_Evil_Legendary_Super_Saiyan_Broly) - 6 links shared\n[STR UR Legendary Super Saiyan Broly](https://dbz-dokkanbattle.fandom.com/wiki/Super_Warrior_of_Destruction_Legendary_Super_Saiyan_Broly) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 145%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► Active Skills are always calculated separately from Passive Skills, meaning his additional ATK +48% would result in a total boost of ATK +326.24% when performing an Ultra Super Attack (the same boost would also apply to additional attacks)";
        var footnotes = "[1]: Lowers enemy's DEF by 50% for 3 turns\n[2]: Lowers enemy's DEF by 80% for 3 turns\n[3]: 25% chance for additional attack to become a Super Attack";
        var active = "Kakarot: Ki +24 and ATK +48% for 1 turn; can be activated after Transformation (once only)";
        const {status} = require('./lssjbroly1.js')
        if (status === 'incomplete')
        {
            message.channel.send({embed: {
                color: color,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Legendary Super Saiyan Broly is coming soon."
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
                        text: "[1]: Lowers enemy's DEF by 50% for 3 turns\n[2]: Lowers enemy's DEF by 80% for 3 turns"
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
                        text: "[3]: 25% chance for additional attack to become a Super Attack"
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