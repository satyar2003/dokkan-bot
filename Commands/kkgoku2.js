module.exports = {
    name: 'kkgoku2',
    description: 'PHY UR Goku (Kaioken)',
    categories: ['[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Goku\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))',
                 '[Final Trump Card](https://dbz-dokkanbattle.fandom.com/wiki/Final_Trump_Card)',
                 '[Desperate Struggle](https://dbz-dokkanbattle.fandom.com/wiki/Desperate_Struggle)'],
    link: ['[All in the Family](https://dbz-dokkanbattle.fandom.com/wiki/All_in_the_Family)\n ­ ­ ­ ­ Level 1: DEF +15%\n ­ ­ ­ ­ Level 10: DEF +20%',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha)\n ­ ­ ­ ­ Level 1: ATK +5% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +10% when Super Attack is launched',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[Over in a Flash](https://dbz-dokkanbattle.fandom.com/wiki/Over_in_a_Flash)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK 7%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Goku (Kaioken)'],
    execute(message, args) {
        const {link} = require('./kkgoku2.js')
        const {categories} = require('./kkgoku2.js')
        const {status} = require('./kkgoku2.js')
        const {plural} = require('./kkgoku2.js')
        const {aliases} = require('./kkgoku2.js')
        var color = 7164715;
        var name = "Game-Reversing Technique\nGoku (Kaioken)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Game-Reversing_Technique_Goku_(Kaioken)";
        var desc = "Super PHY UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/729466665091334178/card_1008080_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/729466769164468224/340.png";
        var leader = "AGL, PHY, and TEQ Type Ki +2 and HP & ATK +30%";
        var superatk = "4x Kaioken Kamehameha: Causes supreme damage and greatly raises ATK[1]";
        var passive = "Change STR Ki to <:rbw:729467948690964480> Ki";
        var stats = "HP: 8,950 (55%)/10,790 (100%)\nATK: 9,460 (55%)/11,260 (100%)\nDEF: 5,225 (55%)/6,785 (100%)";
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
        var apt = "APT: 801,391 (unsupported)/1,230,707 (supported)\nDefense: 28,089 (unsupported)/45,412 (supported) \nLinking Partner: [PHY UR Gohan (Teen)](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Sword_Power_Gohan_(Teen)) \nTeam: [Siblings' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)/[Goku's Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family) \nBuild: 11 Additional/15 Critical";
        var blp = "[INT UR Super Saiyan God Goku](https://dbz-dokkanbattle.fandom.com/wiki/Accelerated_Battle_Super_Saiyan_God_Goku) - 5 links shared\n[STR UR Gogeta](https://dbz-dokkanbattle.fandom.com/wiki/Into_the_Final_Phase_Gogeta) - 5 links shared\n[PHY UR Ultimate Gohan](https://dbz-dokkanbattle.fandom.com/wiki/Hero%27s_Return_Ultimate_Gohan) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 130%\n► [STR SSR Goku (Kaioken)](https://dbz-dokkanbattle.fandom.com/wiki/Kaioken_of_Friendship_Goku_(Kaioken)) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "[1]: Raises ATK by 50% for 99 turns";
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