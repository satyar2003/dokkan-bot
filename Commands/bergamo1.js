module.exports = {
    name: 'bergamo1',
    description: 'PHY UR Bergamo',
    categories: ['[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)',
                 '[Giant Form](https://dbz-dokkanbattle.fandom.com/wiki/Giant_Form)',
                 '[Siblings\' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)'],
    link: ['[Brutal Beatdown](https://dbz-dokkanbattle.fandom.com/wiki/Brutal_Beatdown) (ATK +10%)',
           '[Infighter](https://dbz-dokkanbattle.fandom.com/wiki/Infighter) (ATK +10%, Enemy DEF -10%)',
           '[Brainiacs](https://dbz-dokkanbattle.fandom.com/wiki/Brainiacs) (ATK & DEF +10%)',
           '[Coward](https://dbz-dokkanbattle.fandom.com/wiki/Coward) (Ki +1)',
           '[Transform](https://dbz-dokkanbattle.fandom.com/wiki/Transform) (Ki +2)',
           '[Tournament of Power](https://dbz-dokkanbattle.fandom.com/wiki/Tournament_of_Power) (Ki +3)',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle) (ATK +15%)'],
    status: 'complete',
    plural: 'false',
    aliases: ['Bergamo (Giant Form)'],
    execute(message, args) {
        var color = 7164715;
        var name = "Cunning Counterattack\nBergamo (Giant Form)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Cunning_Counterattack_Bergamo_(Giant_Form)";
        var desc = "Extreme PHY UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/714210182888030309/card_1018800_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720529939299827722/8ejTcqXhehgr7fwAfFk2q0KC1egAAAABJRU5ErkJggg.png";
        var leader = "[Extreme Class](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_Class) Ki +3 and HP, ATK & DEF +80%; maximum number of turning Giant Form +1 for all allies";
        var superatk = "[Dangers' Triangle](https://youtu.be/5DERlxK6R5k?t=91): Causes supreme damage to enemy and raises DEF by 30% for 9 turns";
        var passive = "Powerful Counterattack: ATK & DEF +30% with each attack received (up to 300%); rare chance[1] of turning into Giant Form when HP is 80% or less";
        var stats = "HP: 10,321 (55%)/13,721 (100%)\nATK: 10,631 (55%)/13,631 (100%)\nDEF: 8,198 (55%)/10,798 (100%)";
        const {link} = require('./bergamo1.js')
        var links = "";
            for (var i = 0; i < link.length; i++)
            {
                links += link[i] + "\n";
            }
        const {categories} = require('./bergamo1.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 1,826,289 (55%)/2,556,805 (100%)\nDefense: 148,939\nLinking Partners: [STR UR Frost (Full Power)](https://dbz-dokkanbattle.fandom.com/wiki/Demonstration_of_True_Strength_Frost_(Full_Power))/[TEQ UR Hit](https://dbz-dokkanbattle.fandom.com/wiki/Assassin%27s_Ultimate_Technique_Hit)\nTeam: [Representatives of Universe 7](https://dbz-dokkanbattle.fandom.com/wiki/Representatives_of_Universe_7)/[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)\nBuild: 11 Additional/15 Critical";
        var blp = "[STR UR Frost (Full Power)](https://dbz-dokkanbattle.fandom.com/wiki/Demonstration_of_True_Strength_Frost_(Full_Power)) - 4 links shared\n[TEQ UR Hit](https://dbz-dokkanbattle.fandom.com/wiki/Assassin%27s_Ultimate_Technique_Hit) - 3 links shared\n[AGL UR Dyspo (Super Speed Mode)](https://dbz-dokkanbattle.fandom.com/wiki/Onslaught_of_Fire_and_Fury_Dyspo_(Super_Speed_Mode)) - 3 links shared";
        var deets = "► 12 Ki Multiplier is 145%\n► His additional DEF boost from his Super Attack is calculated separately, as a result he can reach a maximum boost of DEF +900% (not counting additional Super Attacks); with an additional Super Attack every single turn, he can reach a maximum of DEF +1500%";
        var footnotes = "[1]: 15% chance to turn into Giant Form when HP is 80% or less";
        const {status} = require('./bergamo1.js')
        if (status === 'incomplete')
        {
            message.channel.send({embed: {
                color: color,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Bergamo (Giant Form) is coming soon."
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
                    timestamp: new Date()
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
                        text: footnotes
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