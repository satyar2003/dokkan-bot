module.exports = {
    name: 'trunks2',
    description: 'TEQ UR Trunks (Teen) (Future) before transformation',
    categories: ['[Hybrid Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Hybrid_Saiyans)',
                 '[Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga)',
                 '[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)',
                 '[Vegeta\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Vegeta%27s_Family)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Super Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyans)',
                 '[Bond of Master and Disciple](https://dbz-dokkanbattle.fandom.com/wiki/Bond_of_Master_and_Disciple)',
                 '[Revenge](https://dbz-dokkanbattle.fandom.com/wiki/Revenge)',
                 '[Battle of Wits](https://dbz-dokkanbattle.fandom.com/wiki/Battle_of_Wits)'],
    link: ['[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race)\n ­ ­ ­ ­ Level 1: ATK +5%\n ­ ­ ­ ­ Level 10: ATK +10%',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Royal Lineage](https://dbz-dokkanbattle.fandom.com/wiki/Royal_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK +5%',
           '[Messenger from the Future](https://dbz-dokkanbattle.fandom.com/wiki/Messenger_from_the_Future)\n ­ ­ ­ ­ Level 1: ATK +5%\n ­ ­ ­ ­ Level 10: ATK +10%',
           '[Dismal Future](https://dbz-dokkanbattle.fandom.com/wiki/Dismal_Future)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and chance to perform a critical hit +5%',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Trunks (Teen) (Future)'],
    execute(message, args) {
        const {link} = require('./trunks2.js')
        const {categories} = require('./trunks2.js')
        const {status} = require('./trunks2.js')
        const {plural} = require('./trunks2.js')
        const {aliases} = require('./trunks2.js')
        var color = 3040566;
        var name = "Resilient Will to Protect the Future\nTrunks (Teen) (Future)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Resilient_Will_to_Protect_the_Future_Trunks_(Teen)_(Future)";
        var desc = "Super TEQ UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/721064551130464266/card_1017080_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/721064574484349028/340.png";
        var leader = "\"[Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga)\" Category Ki +3, HP & ATK +170% and DEF +130%; or [Super Class](https://dbz-dokkanbattle.fandom.com/wiki/Category:Super_Class) Ki +3 and HP, ATK & DEF +120%";
        var superatk = "[Shining Slash](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_New_JP_Future_Trunks_Super_Attacks): Raises ATK[1] and causes immense damage to enemy";
        var passive = "For This World: ATK & DEF +100%; Transform when conditions are met";
        var transform = "Transform starting from the 3rd turn from the start of battle";
        var stats = "HP: 14,750 (55%)/17,350 (100%)\nATK: 13,600 (55%)/17,000 (100%)\nDEF: 9,000 (55%)/12,000 (100%)";
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
        var apt = "APT: 3,313,797 (unsupported)/3,867,557 (supported)\nDefense: 115,832 (unsupported)/144,758 (supported) \nLinking Partner: [INT UR Gohan (Future)](https://dbz-dokkanbattle.fandom.com/wiki/Heroic_Warrior_Gohan_(Future)) \nTeam: [Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga) \nBuild: 6 Additional/20 Critical";
        var blp = "[PHY UR Trunks (Teen)](https://dbz-dokkanbattle.fandom.com/wiki/Magnificent_Swordsmanship_Trunks_(Teen)) - 6 links shared\n[INT UR Super Saiyan Trunks (Future)](https://dbz-dokkanbattle.fandom.com/wiki/Blade_of_Hope_and_Dreams_Super_Saiyan_Trunks_(Future)) - 5 links shared\n[STR UR Super Saiyan Trunks (Future)](https://dbz-dokkanbattle.fandom.com/wiki/Unwavering_Conviction_Super_Saiyan_Trunks_(Future)) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 150%\n► [AGL SSR Trunks (Teen) (Future)](https://dbz-dokkanbattle.fandom.com/wiki/Return_to_the_Future_Trunks_(Teen)_(Future)) & [STR SR Trunks (Teen) (Future)](https://dbz-dokkanbattle.fandom.com/wiki/Standing_Defiant_Trunks_(Teen)_(Future)) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack\n► He has a 40% uptime in his second form\n► He has a 20% uptime in his third form";
        var footnotes = "[1]: Raises ATK by 30% for 99 turns";
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