module.exports = {
    name: 'ssj2vegeta1',
    description: 'STR UR Super Saiyan 2 Vegeta & Bulma',
    categories: ['[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)',
                 '[Vegeta\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Vegeta%27s_Family)',
                 '[Exploding Rage](https://dbz-dokkanbattle.fandom.com/wiki/Exploding_Rage)'],
    link: ['[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Royal Lineage](https://dbz-dokkanbattle.fandom.com/wiki/Royal_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK +5%',
           '[Prodigies](https://dbz-dokkanbattle.fandom.com/wiki/Prodigies)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Golden Warrior](https://dbz-dokkanbattle.fandom.com/wiki/Golden_Warrior)\n ­ ­ ­ ­ Level 1: Enemy DEF -5% and Ki +1\n ­ ­ ­ ­ Level 10: Enemy DEF -10% and Ki +1',
           '[Berserker](https://dbz-dokkanbattle.fandom.com/wiki/Berserker)\n ­ ­ ­ ­ Level 1: ATK +20% when HP is 50% or below\n ­ ­ ­ ­ Level 10: ATK +30% when HP is 50% or below',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'true',
    aliases: ['ss2vegeta1', 'Super Saiyan 2 Vegeta & Bulma'],
    execute(message, args) {
        var color = 8990259;
        var name = "Outburst of Emotions\nSuper Saiyan 2 Vegeta & Bulma";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Outburst_of_Emotions_Super_Saiyan_2_Vegeta_%26_Bulma#Super%20Saiyan%202%20Vegeta%20&%20Bulma";
        var desc = "Super STR UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/717247421855301732/card_1012650_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720704772998561922/340.png";
        var leader = "[Super Class](https://dbz-dokkanbattle.fandom.com/wiki/Category:Super_Class) Ki +3 and HP, ATK & DEF +40%";
        var superatk = "[Furious Galick Gun](https://dbz-dokkanbattle.fandom.com/wiki/File:DBZ_Dokkan_Battle_Outburst_of_Emotions_-_Super_Saiyan_2_Vegeta_%26_Bulma_(Super_Attack)): Greatly raises ATK for 1 turn[1] and causes supreme damage to enemy";
        var passive = "[Pride Discarded](https://dbz-dokkanbattle.fandom.com/wiki/File:DBZ_Dokkan_Battle_Outburst_of_Emotions_-_Super_Saiyan_2_Vegeta_%26_Bulma_(Counter_Attack)): ATK & DEF +100%; counters with tremendous power[2] upon receiving normal attacks; [Rage](https://dbz-dokkanbattle.fandom.com/wiki/File:DBZ_Dokkan_Battle_Determind_to_Fight_Back_-_Super_Saiyan_2_Vegeta_(Transformation_Sequence)) when HP is 30% or below (once only)";
        var stats = "HP: 8,153 (55%)/11,153 (100%)\nATK: 10,679 (55%)/14,079 (100%)\nDEF: 7,422 (55%)/10,022 (100%)";
        const {link} = require('./ssj2vegeta1.js')
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
        const {categories} = require('./ssj2vegeta1.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 4,251,240 (unsupported)/5,101,488 (supported)\nDefense: 88,193(unsupported)/99,952 (supported) \nLinking Partner: [STR LR Super Saiyan 4 Vegeta](https://dbz-dokkanbattle.fandom.com/wiki/Unrivaled_Saiyan%27s_Peak_Super_Saiyan_4_Vegeta) \nTeam: [Vegeta's Family](https://dbz-dokkanbattle.fandom.com/wiki/Vegeta%27s_Family) \nBuild: 6 Additional/20 Critical";
        var blp = "[TEQ UR Super Saiyan God SS Vegeta](https://dbz-dokkanbattle.fandom.com/wiki/Bonds_Beyond_Time_Super_Saiyan_God_SS_Vegeta) - 5 links shared\n[INT LR Super Saiyan Vegeta](https://dbz-dokkanbattle.fandom.com/wiki/Awakened_Saiyan_Blood_Super_Saiyan_Vegeta) - 5 links shared\n[PHY UR Super Saiyan Trunks (Future)](https://dbz-dokkanbattle.fandom.com/wiki/A_Will_Beyond_Time_Super_Saiyan_Trunks_(Future)) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 145%\n► Counterattacks can be critical hits from the Hidden Potential\n► [AGL SSR Super Saiyan 2 Vegeta & Bulma](https://dbz-dokkanbattle.fandom.com/wiki/Furious_Transformation_Super_Saiyan_2_Vegeta_%26_Bulma) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "[1]: Raises SA Multiplier by 50% for 1 turn\n[2]: Tremendous power multiplier is 300%";
        const {status} = require('./ssj2vegeta1.js')
        if (status === 'incomplete')
        {
            message.channel.send({embed: {
                color: color,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Super Saiyan 2 Vegeta & Bulma are coming soon."
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
                        text: "[1]: Raises SA Multiplier by 50% for 1 turn"
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
                        text: "[2]: Tremendous power multiplier is 300%"
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