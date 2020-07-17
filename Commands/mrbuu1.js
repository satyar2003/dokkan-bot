module.exports = {
    name: 'mrbuu1',
    description: 'TEQ UR Mr. Buu',
    categories: ['[World Tournament](https://dbz-dokkanbattle.fandom.com/wiki/World_Tournament)',
                 '[Resurrected Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Resurrected_Warriors)',
                 '[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Artificial Life Forms](https://dbz-dokkanbattle.fandom.com/wiki/Artificial_Life_Forms)',
                 '[Worthy Rivals](https://dbz-dokkanbattle.fandom.com/wiki/Worthy_Rivals)',
                 '[Majin Power](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Power)'],
    link: ['[The Innocents](https://dbz-dokkanbattle.fandom.com/wiki/The_Innocents) (ATK +10%)',
           '[Revival](https://dbz-dokkanbattle.fandom.com/wiki/Revival) (Ki +2)',
           '[Master of Magic](https://dbz-dokkanbattle.fandom.com/wiki/Master_of_Magic) (ATK +15%)',
           '[Majin](https://dbz-dokkanbattle.fandom.com/wiki/Majin) (ATK & DEF +10%)',
           '[Infinite Regeneration](https://dbz-dokkanbattle.fandom.com/wiki/Infinite_Regeneration) (Recover 3% HP)',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed) (Ki +2)',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit) (Ki +2)'],
    status: 'complete',
    plural: 'false',
    aliases: ['Mr. Buu'],
    execute(message, args) {
        const {link} = require('./mrbuu1.js')
        const {categories} = require('./mrbuu1.js')
        const {status} = require('./mrbuu1.js')
        const {plural} = require('./mrbuu1.js')
        const {aliases} = require('./mrbuu1.js')
        var color = 3040566;
        var name = "Joyful Athleticism\nMr. Buu";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Joyful_Athleticism_Mr._Buu";
        var desc = "Super TEQ UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/730254144253853696/card_1018660_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/730254292396802078/340.png";
        var leader = "All Types Ki +2 and HP, ATK & DEF +50%";
        var superatk = "Hip Crash: Raises DEF for 1 turn[1], causes supreme damage to enemy and lowers ATK[2]";
        var passive = "Plethora of Changes: ATK & DEF +80%; changes <:int:729468835819946026> Ki Spheres and Ki Spheres of another Type to <:rbw:729467948690964480> Ki Spheres; ATK & DEF +20% and recovers 15000 HP per <:rbw:729467948690964480> Ki Sphere obtained";
        var stats = "HP: 11,477 (55%)/13,037 (100%)\nATK: 8,623 (55%)/10,663 (100%)\nDEF: 6,168 (55%)/7,968 (100%)";
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
        var apt = "APT: 1,717,635 (unsupported)/1,996,894 (supported)\nDefense: 117,842 (unsupported)/130,455 (supported) \nLinking Partner: [PHY UR Majin Buu (Good)](https://dbz-dokkanbattle.fandom.com/wiki/Majin_on_the_Loose_Majin_Buu_(Good)) \nTeam: [Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)/[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost) \nBuild: 6 Additional/20 Critical";
        var blp = "[PHY UR Majin Buu (Good)](https://dbz-dokkanbattle.fandom.com/wiki/Majin_on_the_Loose_Majin_Buu_(Good)) - 6 links shared\n[AGL UR Majin Buu (Shape-Up)](https://dbz-dokkanbattle.fandom.com/wiki/Thrilling_Battle_Majin_Buu_(Shape-Up)) - 5 links shared\n[STR UR Majin Buu (Good)](https://dbz-dokkanbattle.fandom.com/wiki/Wrathful_Eruption_Majin_Buu_(Good)) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► Because <:rbw:729467948690964480> Ki Spheres do not burst other <:rbw:729467948690964480> Ki Spheres, you can only collect a maximum of 5 at once, meaning the maximum possible boost from <:rbw:729467948690964480> Ki Spheres is ATK & DEF +100% and a recovery of 75,000 HP";
        var footnotes = "[1]: Raises DEF by 30% for 1 turn\n[2]: Lowers enemy's ATK by 20% for 3 turns";
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