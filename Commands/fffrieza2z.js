module.exports = {
    name: 'fffrieza2z',
    description: 'INT UR Frieza (Final Form) with EZA',
    categories: ['[Planet Namek Saga](https://dbz-dokkanbattle.fandom.com/wiki/Planet_Namek_Saga)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Wicked Bloodline](https://dbz-dokkanbattle.fandom.com/wiki/Wicked_Bloodline)',
                 '[Dragon Ball Seekers](https://dbz-dokkanbattle.fandom.com/wiki/Dragon_Ball_Seekers)',
                 '[Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)',
                 '[Inhuman Deeds](https://dbz-dokkanbattle.fandom.com/wiki/Inhuman_Deeds)'],
    link: ['[Prodigies](https://dbz-dokkanbattle.fandom.com/wiki/Prodigies)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Universe\'s Most Malevolent](https://dbz-dokkanbattle.fandom.com/wiki/Universe%27s_Most_Malevolent)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[Strongest Clan in Space](https://dbz-dokkanbattle.fandom.com/wiki/Strongest_Clan_in_Space)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and and enemy DEF -10%',
           '[Nightmare](https://dbz-dokkanbattle.fandom.com/wiki/Nightmare)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Formidable Enemy](https://dbz-dokkanbattle.fandom.com/wiki/Formidable_Enemy)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Frieza (Final Form) Z'],
    execute(message, args) {
        const {link} = require('./fffrieza2z.js')
        const {categories} = require('./fffrieza2z.js')
        const {status} = require('./fffrieza2z.js')
        const {plural} = require('./fffrieza2z.js')
        const {aliases} = require('./fffrieza2z.js')
        var color = 7028604;
        var name = "Furious Wrath\nFrieza (Final Form)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Furious_Wrath_Frieza_(Final_Form)#Extreme%20Z-Awakened";
        var desc = "Extreme INT UR [JPN]";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/720498151399751720/card_1020150_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720534346494378044/hkAAAAAElFTkSuQmCC.png";
        var leader = "\"[Wicked Bloodline](https://dbz-dokkanbattle.fandom.com/wiki/Wicked_Bloodline)\" Category Ki +3 and HP, ATK & DEF +77%; or INT Type Ki +3 and HP, ATK & DEF +50%";
        var superatk = "[Death Blaster](https://www.youtube.com/watch?v=mRyyoHWawwM): Raises ATK[2], causes supreme damage to enemy and lowers ATK[1]";
        var passive = "Last Minute Obsession: ATK & DEF +100%; guard activated against all attacks and all allies' Ki +2 and ATK & DEF +20% when there is a \"[Goku's Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)\" Category enemy; reduces damage received by 50% when guard is activated";
        var stats = "HP: 11,567 (55%)/13,367 (100%)\nATK: 10,889 (55%)/12,689 (100%)\nDEF: 6,875 (55%)/8,675 (100%)";
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
        var apt = "APT: 2,225,411 (unsupported)/2,630,031 (supported)\nDefense: 83,974 (unsupported)/99,242 (supported) \nLinking Partner: [PHY UR Frieza (Full Power)](https://dbz-dokkanbattle.fandom.com/wiki/Emperor%27s_Devotion_Frieza_(Full_Power)) \nTeam: [Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors) \nBuild: 6 Additional/15 Critical";
        var blp = "[TEQ UR Golden Frieza](https://dbz-dokkanbattle.fandom.com/wiki/Fire_of_Vengeance_Golden_Frieza) - 4 links shared\n[STR LR Frieza (Full Power)](https://dbz-dokkanbattle.fandom.com/wiki/Last-Ditch_Attack_Frieza_(Full_Power)) - 4 links shared\n[PHY UR Frieza (Full Power)](https://dbz-dokkanbattle.fandom.com/wiki/Emperor%27s_Devotion_Frieza_(Full_Power)) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► Can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack of other [Frieza (Final Form)](https://dbz-dokkanbattle.fandom.com/wiki/Frieza_(disambiguation)#FRIEZA_.28FINAL_FORM.29) cards\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Area](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Area:_The_Most_Evil_Clan_in_the_Universe)** event";
        var footnotes = "[1]: Lowers enemy's ATK by 20% for 3 turns\n[2]: Raises ATK by 30% for 99 turns";
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