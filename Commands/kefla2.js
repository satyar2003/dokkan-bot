module.exports = {
    name: 'kefla2',
    description: 'STR UR Super Saiyan Kefla',
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
    link: ['[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan) (ATK +10%)',
           '[Battlefield Diva](https://dbz-dokkanbattle.fandom.com/wiki/Battlefield_Diva) (Ki +2)',
           '[Fused Fighter](https://dbz-dokkanbattle.fandom.com/wiki/Fused_Fighter) (Ki +2)',
           '[Power Bestowed by God](https://dbz-dokkanbattle.fandom.com/wiki/Power_Bestowed_by_God) (ATK +2500 when Super Attack is launched)',
           '[Warriors of Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Warriors_of_Universe_6) (Ki +2)',
           '[Tournament of Power](https://dbz-dokkanbattle.fandom.com/wiki/Tournament_of_Power) (Ki +3)',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle) (ATK +15%)'],
    status: 'complete',
    plural: 'false',
    aliases: ['ssjkefla1', 'sskefla1', 'Super Saiyan Kefla'],
    execute(message, args) {
        var color = 8990259;
        var name = "Limit-Breaking Heights\nSuper Saiyan Kefla";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Limit-Breaking_Heights_Kefla#Super%20Saiyan%20Kefla";
        var desc = "Super STR UR [JPN]";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/716130726130745374/card_4019750_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720681005144604732/giGm6Yr1xglmYwTnrHG9X8BW3t39AE6J7gAAAAASUVORK5CYII.png";
        var leader = `"[Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6)" Category Ki +3, HP, ATK, DEF +170%; or "[Rapid Growth](https://dbz-dokkanbattle.fandom.com/wiki/Rapid_Growth)" Category Ki +3 and HP, ATK & DEF +150%`;
        var superatk = "[Gigantic Canonball](https://youtu.be/A5oEMgE1jqk?t=31): Raises ATK[1], causes immense damage to enemy and greatly lowers DEF[2]";
        var passive = "Let's Go at Full Throttle!: DEF +150%; ATK +150% when performing a Super Attack; plus an additional ATK +50% and high chance[3] of evading enemy's attack (including Super Attack) with 6 or more Ki Spheres obtained; Transforms when conditions are met";
        var stats = "HP: 13,045 (55%)/16,045 (100%)\nATK: 13,736 (55%)/17,136 (100%)\nDEF: 8,933 (55%)/11,533 (100%)";
        const {link} = require('./kefla2.js')
        var links = "";
            for (var i = 0; i < link.length; i++)
            {
                links += link[i] + "\n";
            }
        const {categories} = require('./kefla2.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 4,862,147 (unsupported)/6,429,153 (supported)\nDefense: 117,728 \nLinking Partners: [AGL LR Super Saiyan 2 Caulifla & Super Saiyan 2 Kale](https://dbz-dokkanbattle.fandom.com/wiki/Two_Makes_the_Strongest_of_All_Universes_Super_Saiyan_2_Caulifla_%26_Super_Saiyan_2_Kale)/[STR UR Super Saiyan Cabba](https://dbz-dokkanbattle.fandom.com/wiki/Warrior_Race%27s_Resolve_Super_Saiyan_Cabba) \nTeam: [Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6) \nBuild: 6 Additional/20 Critical";
        var blp = "[PHY UR Super Saiyan 2 Kefla](https://dbz-dokkanbattle.fandom.com/wiki/Dreadful_Super_Fusion_Super_Saiyan_2_Kefla) - 6 links shared\n[AGL LR Super Saiyan 2 Caulifla & Super Saiyan 2 Kale](https://dbz-dokkanbattle.fandom.com/wiki/Two_Makes_the_Strongest_of_All_Universes_Super_Saiyan_2_Caulifla_%26_Super_Saiyan_2_Kale) - 5 links shared\n[STR UR Super Saiyan Cabba](https://dbz-dokkanbattle.fandom.com/wiki/Warrior_Race%27s_Resolve_Super_Saiyan_Cabba) - 2 links shared";
        var deets = "► 12 Ki Multiplier is 150%\n► Her additional ATK +50% is calculated separately, for a total boost of ATK +275% with 6 or more Ki Spheres obtained\n► She has a 40% uptime in her SSJ form\n► She has a 20% uptime in her SSJ2 form";
        var footnotes = "[1]: Raises ATK by 30% for 99 turns\n[2]: Lowers enemy's DEF by 50% for 3 turns\n[3]: 50% chance to evade enemy's attack";
        var transform = "Transforms upon entering next attacking turn when HP is 60% or more";
        const {status} = require('./kefla2.js')
        if (status === 'incomplete')
        {
            message.channel.send({embed: {
                color: color,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Super Saiyan Kefla is coming soon."
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
                            name: "Transformation Condition",
                            value: transform
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
                        text: "[1]: Raises ATK by 30% for 99 turns\n[2]: Lowers enemy's DEF by 50% for 3 turns"
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
            else if (args[0] === 'transform')
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
                            name: "Transformation Condition",
                            value: transform
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