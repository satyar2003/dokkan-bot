module.exports = {
    name: 'tandm1',
    description: 'STR LR Trunks (Teen) (Future) & Mai (Future)',
    categories: ['[Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga)',
                 '[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)',
                 '[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)',
                 '[Revenge](https://dbz-dokkanbattle.fandom.com/wiki/Revenge)'],
    link: ['[Brainiacs](https://dbz-dokkanbattle.fandom.com/wiki/Brainiacs)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: ATK & DEF +15%',
           '[Cold Judgment](https://dbz-dokkanbattle.fandom.com/wiki/Cold_Judgment)\n ­ ­ ­ ­ Level 1: DEF +20%\n ­ ­ ­ ­ Level 10: DEF +25%',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Courage](https://dbz-dokkanbattle.fandom.com/wiki/Courage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +1 and ATK +10%',
           '[Dismal Future](https://dbz-dokkanbattle.fandom.com/wiki/Dismal_Future)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and chance to perform a critical hit +5%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'true',
    aliases: ['Trunks (Teen) (Future) & Mai (Future)'],
    execute(message, args) {
        const {link} = require('./tandm1.js')
        const {categories} = require('./tandm1.js')
        const {status} = require('./tandm1.js')
        const {plural} = require('./tandm1.js')
        const {aliases} = require('./tandm1.js')
        var color = 8990259;
        var name = "Hopes and Promises for the Future\nTrunks (Teen) (Future) & Mai (Future)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Hopes_and_Promises_for_the_Future_Trunks_(Teen)_(Future)_%26_Mai_(Future)";
        var desc = "Super STR LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/723596582406062179/card_1014080_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/723596812656574484/GHqv1ybd0Bk6jIUicxIJWVghgUGCXrffwHGnrGASjJbbgAAAABJRU5ErkJggg.png";
        var leader = "\"[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)\" Category Ki +4 and HP, ATK & DEF +130%; or <:sstr:729475907768811591> Type Ki +4 and HP, ATK & DEF +100%";
        var superatk = "[All-Out Counterattack](https://dbz-dokkanbattle.fandom.com/wiki/File:LR_Future_Trunks_and_Mai_Super_Attacks) (12-17 Ki): Causes colossal damage with a medium chance of stunning the enemy[1]\n[Decisive Offensive for the Future](https://dbz-dokkanbattle.fandom.com/wiki/File:LR_Future_Trunks_and_Mai_Super_Attacks) (18+ Ki): Causes mega-colossal damage with a high chance of stunning the enemy[2]";
        var passive = "Resistance Allies from the Future: ATK +70%; ATK & DEF +10% (up to 70%) per \"[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)\" Category ally on the team; Ki +6 and high chance[3] of evading enemy's attack (including Super Attack) when there is a \"[Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga)\" Category enemy";
        var stats = "HP: 19,325 (55%)/22,325 (100%)\nATK: 17,615 (55%)/21,015 (100%)\nDEF: 11,444 (55%)/14,044 (100%)";
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
        var apt = "APT: 5,064,844 (unsupported)/5,859,893 (supported)\nDefense: 105,049 (unsupported)/121,195 (supported) \nLinking Partner: [AGL UR Super Saiyan Trunks (Future) & Mai (Future)](https://dbz-dokkanbattle.fandom.com/wiki/Mortal_Pride_Super_Saiyan_Trunks_(Future)_%26_Mai_(Future)) \nTeam: [Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers) \nBuild: 6 Additional/20 Critical";
        var blp = "[AGL UR Super Saiyan Trunks (Future) & Mai (Future)](https://dbz-dokkanbattle.fandom.com/wiki/Mortal_Pride_Super_Saiyan_Trunks_(Future)_%26_Mai_(Future)) - 6 links shared\n[INT UR Mai (Future)](https://dbz-dokkanbattle.fandom.com/wiki/Power_to_Overcome_Adversity_Mai_(Future)) - 5 links shared\n[INT UR Goku Black](https://dbz-dokkanbattle.fandom.com/wiki/Epitome_of_Sublime_Beauty_Goku_Black) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 150%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%";
        var footnotes = "[1]: 30% chance to stun the enemy for 2 turns\n[2]: 50% chance to stun the enemy for 2 turns\n[3]: 50% chance to evade enemy's attack";
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
                        text: "[1]: 30% chance to stun the enemy for 2 turns\n[2]: 50% chance to stun the enemy for 2 turns"
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