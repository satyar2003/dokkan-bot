module.exports = {
    name: 'bkale1z',
    description: 'PHY UR Kale (Berserk) with EZA',
    categories: ['[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6)',
                 '[Exploding Rage](https://dbz-dokkanbattle.fandom.com/wiki/Exploding_Rage)'],
    link: ['[Battlefield Diva](https://dbz-dokkanbattle.fandom.com/wiki/Battlefield_Diva)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +3 and chance of evading +5%',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Warriors of Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Warriors_of_Universe_6)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +6%',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Tournament of Power](https://dbz-dokkanbattle.fandom.com/wiki/Tournament_of_Power)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK & DEF +7%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)'],
    status: 'complete',
    plural: 'false',
    aliases: ['Kale (Berserk) Z'],
    execute(message, args) {
        const {link} = require('./bkale1z.js')
        const {categories} = require('./bkale1z.js')
        const {status} = require('./bkale1z.js')
        const {plural} = require('./bkale1z.js')
        const {aliases} = require('./bkale1z.js')
        var color = 7164715;
        var name = "Awakened Berserker\nKale (Berserk) Z";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Awakened_Berserker_Kale_(Berserk)#Extreme%20Z-Awakened";
        var desc = "Super PHY UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/722190510411874312/card_1013420_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/722190649838927892/340.png";
        var leader = "<:phy:729467520272039988> Type Ki +3 and HP, ATK & DEF +100%";
        var superatk = "[Gigantic Impact](https://dbz-dokkanbattle.fandom.com/wiki/File:DBZ_Dokkan_Battle_Vicious_Awakening_-_Kale_(Berserk)_(Super_Attack)): Causes immense damage to enemy and greatly lowers DEF[1]";
        var passive = "True Saiyan Form: ATK +160%; launches an additional attack which has a great chance[2] of becoming a Super Attack; reduces damage received by 60% for 6 turns from start of turn; reduces damage received by 60% with 6 or more <:phy:729467520272039988> Ki Spheres obtained starting from the 7th turn from the start of battle";
        var stats = "HP: 14,962 (55%)/18,362 (100%)\nATK: 13,757 (55%)/16,757 (100%)\nDEF: 6,698 (55%)/9,298 (100%)";
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
        var apt = "APT: 5,349,825 (unsupported)/6,172,894 (supported)\nDefense: 40,911 (unsupported)/57,275 (supported) \nLinking Partner: [AGL UR Super Saiyan 2 Caulifla](https://dbz-dokkanbattle.fandom.com/wiki/Boundless_Potential_Super_Saiyan_2_Caulifla) \nTeam: [Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6) \nBuild: 11 Additional/15 Critical";
        var blp = "[AGL UR Super Saiyan 2 Caulifla](https://dbz-dokkanbattle.fandom.com/wiki/Boundless_Potential_Super_Saiyan_2_Caulifla) - 5 links shared\n[INT UR Super Saiyan 2 Kale](https://dbz-dokkanbattle.fandom.com/wiki/First_Step_as_a_Warrior_Super_Saiyan_2_Kale) - 5 links shared\n[STR UR Super Saiyan 2 Caulifla](https://dbz-dokkanbattle.fandom.com/wiki/Strength_to_Survive_Super_Saiyan_2_Caulifla) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 145%\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Battle](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Battle:_Female_Warriors_of_Universe_6_Saga)** event";
        var footnotes = "[1]: Lowers enemy's DEF by 50% for 3 turns\n[2]: 70% chance for additional attack to become a Super Attack";
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
                        text: "[1]: Lowers enemy's DEF by 50% for 3 turns"
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
                        text: "[2]: 70% chance for additional attack to become a Super Attack"
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