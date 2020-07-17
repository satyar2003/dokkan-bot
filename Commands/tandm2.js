module.exports = {
    name: 'tandm2',
    description: 'AGL UR Super Saiyan Trunks (Future) & Mai (Future)',
    categories: ['[Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga)',
                 '[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)',
                 '[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)',
                 '[Final Trump Card](https://dbz-dokkanbattle.fandom.com/wiki/Final_Trump_Card)',
                 '[Revenge](https://dbz-dokkanbattle.fandom.com/wiki/Revenge)'],
    link: ['[Brainiacs](https://dbz-dokkanbattle.fandom.com/wiki/Brainiacs) (ATK & DEF +10%)',
           '[Cold Judgement](https://dbz-dokkanbattle.fandom.com/wiki/Cold_Judgment) (DEF +20%)',
           '[Courage](https://dbz-dokkanbattle.fandom.com/wiki/Courage) (Ki +1)',
           '[Dismal Future](https://dbz-dokkanbattle.fandom.com/wiki/Dismal_Future) (Ki +1)',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle) (Ki +2)',
           '[Solid Support](https://dbz-dokkanbattle.fandom.com/wiki/Solid_Support) (ATK +10%, attacked enemy\'s DEF -15%)',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle) (ATk +15%)'],
    status: 'complete',
    plural: 'true',
    aliases: ['Super Saiyan Trunks (Future) & Mai (Future)'],
    execute(message, args) {
        const {link} = require('./tandm2.js')
        const {categories} = require('./tandm2.js')
        const {status} = require('./tandm2.js')
        const {plural} = require('./tandm2.js')
        const {aliases} = require('./tandm2.js')
        var color = 2317729;
        var name = "Human Pride\nSuper Saiyan Trunks (Future) & Mai (Future)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Human_Pride_Super_Saiyan_Trunks_(Future)_%26_Mai_(Future)";
        var desc = "Super AGL UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/731353154729410640/card_1019280_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/731353217702690847/340.png";
        var leader = "\"[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)\" Category Ki +3 and HP, ATK & DEF +120%; or <:agl:729467484289105930> Type Ki +3 and HP, ATK & DEF +70%";
        var superatk = "[Shining Cross](https://youtu.be/J0SLez9Lt6A?t=215): Greatly raises ATK & DEF for 1 turn[1] and causes supreme damage to enemy";
        var passive = "Inherited Tactics: ATK & DEF +100%; Ki +3 plus an additional ATK & DEF +100% when there is an ally whose name includes \"Super Saiyan God SS\" on the team; plus an additional ATK +100% when there is a \"[Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga)\" Category enemy; plus an additional Ki +3, ATK +100% and performs a critical hit when facing an enemy whose name includes \"[Zamasu](https://dbz-dokkanbattle.fandom.com/wiki/Zamasu_(disambiguation)#ZAMASU)\" or \"[Goku Black](https://dbz-dokkanbattle.fandom.com/wiki/Zamasu_(disambiguation)#GOKU_BLACK)\"";
        var active = "[Evil Containment Wave](https://youtu.be/J0SLez9Lt6A?t=226): Raises ATK by 628% temporarily then causes damage to enemy and, within the turn activated, all attacks become critical hits and stuns the attacked enemy while reducing own DEF by half; can be activated when there is another ally whose name includes \"[Trunks (Teen) (Future)](https://dbz-dokkanbattle.fandom.com/wiki/Trunks_(disambiguation)#TRUNKS_.28TEEN.29_.28FUTURE.29)\", \"[Trunks (Future)](https://dbz-dokkanbattle.fandom.com/wiki/Trunks_(disambiguation))\" or \"[Mai (Future)](https://dbz-dokkanbattle.fandom.com/wiki/Mai_(disambiguation)#MAI_.28FUTURE.29)\" attacking in the same turn, starting from the 3rd turn from the start of battle (once only)"
        var stats = "HP: 9,730 (55%)/12,330 (100%)\nATK: 11,002 (55%)/14,002 (100%)\nDEF: 7,655 (55%)/11,055 (100%)";
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
        var apt = "APT: 5,353,697 (unsupported)/5,574,014 (supported)\nDefense: 163,203 (unsupported)/145,780 (supported) \nLinking Partner: [STR LR Trunks (Teen) (Future) & Mai (Future)](https://dbz-dokkanbattle.fandom.com/wiki/Hopes_and_Promises_for_the_Future_Trunks_(Teen)_(Future)_%26_Mai_(Future)) \nTeam: [Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga) \nBuild: 11 Additional/15 Critical";
        var blp = "[INT UR Mai (Future)](https://dbz-dokkanbattle.fandom.com/wiki/Fighting_Eradication_Mai_(Future)) - 6 links shared\n[STR LR Trunks (Teen) (Future) & Mai (Future)](https://dbz-dokkanbattle.fandom.com/wiki/Hopes_and_Promises_for_the_Future_Trunks_(Teen)_(Future)_%26_Mai_(Future)) - 6 links shared\n[AGL UR Mai (Future)](https://dbz-dokkanbattle.fandom.com/wiki/The_Love_to_Light_the_Future_Mai_(Future)) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► Active Skill Multiplier is 628%\n­­­ ­ ­ ­ ­  ▫ ­Equal to \"ultimate damage +78%\"";
        var footnotes = "[1]: Raises SA Multiplier and DEF by 50% for 1 turn";
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