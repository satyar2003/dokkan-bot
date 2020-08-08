module.exports = {
    name: 'goku5',
    description: 'PHY UR Feet Kamehameha Goku',
    categories: ['[Low-Class Warrior](https://dbz-dokkanbattle.fandom.com/wiki/Low-Class_Warrior)',
                 '[World Tournament](https://dbz-dokkanbattle.fandom.com/wiki/World_Tournament)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Goku\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))'],
    link: ['[All in the Family](https://dbz-dokkanbattle.fandom.com/wiki/All_in_the_Family)\n ­ ­ ­ ­ Level 1: DEF +15%\n ­ ­ ­ ­ Level 10: DEF +20%',
           '[Infighter](https://dbz-dokkanbattle.fandom.com/wiki/Infighter)\n ­ ­ ­ ­ Level 1: ATK +10% and enemy DEF -10%\n ­ ­ ­ ­ Level 10: ATK +15% and enemy DEF -15%',
           '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha)\n ­ ­ ­ ­ Level 1: ATK +5% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +10% when Super Attack is launched',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[World Tournament Champion](https://dbz-dokkanbattle.fandom.com/wiki/World_Tournament_Champion)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +1 and DEF +10%',
           '[Turtle School](https://dbz-dokkanbattle.fandom.com/wiki/Turtle_School)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +20%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Goku'],
    execute(message, args) {
        const {link} = require('./goku5.js')
        const {categories} = require('./goku5.js')
        const {status} = require('./goku5.js')
        const {plural} = require('./goku5.js')
        const {aliases} = require('./goku5.js')
        var color = 7164715;
        var name = "Martial Mettle\nGoku";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Martial_Mettle_Goku";
        var desc = "Super PHY UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/728811553998241923/card_1013110_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/728811577372835880/340.png";
        var leader = "<:phy:729467520272039988> Type Ki +2 and ATK & DEF +60%";
        var superatk = "Feet Kamehameha: Causes supreme damage with a medium chance to stun the enemy[1]";
        var passive = "Stand Firm: ATK & DEF +80% when performing a Super Attack";
        var stats = "HP: 10,844 (55%)/12,844 (100%)\nATK: 8,925 (55%)/10,725 (100%)\nDEF: 5,954 (55%)/7,554 (100%)";
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
        var apt = "APT: 952,373 (unsupported)/1,349,195 (supported)\nDefense: 66,330 (unsupported)/89,054 (supported) \nLinking Partner: [PHY UR Gohan (Teen)](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Sword_Power_Gohan_(Teen)) \nTeam: [Siblings' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)/[Goku's Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family) \nBuild: 11 Additional/15 Critical";
        var blp = "[STR UR Master Roshi (Max Power)](https://dbz-dokkanbattle.fandom.com/wiki/Max_Power_Technique_Master_Roshi_(Max_Power)) - 5 links shared\n[TEQ UR Goku (Kaioken)](https://dbz-dokkanbattle.fandom.com/wiki/Potent_Super_Attack_Goku_(Kaioken)) - 4 links shared\n[INT UR Krillin](https://dbz-dokkanbattle.fandom.com/wiki/Technique_and_Inspiration_Krillin) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► [AGL SSR Goku](https://dbz-dokkanbattle.fandom.com/wiki/Low-Class_Warrior_Exiled_to_Earth_Goku), [TEQ SSR Goku](https://dbz-dokkanbattle.fandom.com/wiki/Aim_to_Surpass_Super_Saiyan_Goku), [INT SSR Goku](https://dbz-dokkanbattle.fandom.com/wiki/Return_from_Outer_Space_Goku), [PHY SR Goku](https://dbz-dokkanbattle.fandom.com/wiki/The_Desired_Battle_Goku), [TEQ R Goku](https://dbz-dokkanbattle.fandom.com/wiki/Overflowing_Resolve_Goku), & [INT R Goku](https://dbz-dokkanbattle.fandom.com/wiki/Train_Anywhere_Goku) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "[1]: 30% chance to stun the enemy for 2 turns";
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