module.exports = {
    name: 'fpfrieza1',
    description: 'PHY UR Frieza (Full Power) without EZA',
    categories: ['[Planet Namek Saga](https://dbz-dokkanbattle.fandom.com/wiki/Planet_Namek_Saga)',
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Wicked Bloodline](https://dbz-dokkanbattle.fandom.com/wiki/Wicked_Bloodline)',
                 '[Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)',
                 '[Final Trump Card](https://dbz-dokkanbattle.fandom.com/wiki/Final_Trump_Card)',
                 '[Exploding Rage](https://dbz-dokkanbattle.fandom.com/wiki/Exploding_Rage)',
                 '[Inhuman Deeds](https://dbz-dokkanbattle.fandom.com/wiki/Inhuman_Deeds)'],
    link: ['[Prodigies](https://dbz-dokkanbattle.fandom.com/wiki/Prodigies)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Universe\'s Most Malevolent](https://dbz-dokkanbattle.fandom.com/wiki/Universe%27s_Most_Malevolent)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Nightmare](https://dbz-dokkanbattle.fandom.com/wiki/Nightmare)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Strongest Clan in Space](https://dbz-dokkanbattle.fandom.com/wiki/Strongest_Clan_in_Space)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and and enemy DEF -10%',
           '[Big Bad Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Big_Bad_Bosses)\n ­ ­ ­ ­ Level 1: ATK & DEF +25% when HP is 80% or below\n ­ ­ ­ ­ Level 10: ATK & DEF +25%',
           '[Over in a Flash](https://dbz-dokkanbattle.fandom.com/wiki/Over_in_a_Flash)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK 7%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Frieza (Full Power)'],
    execute(message, args) {
        const {link} = require('./fpfrieza1.js')
        const {categories} = require('./fpfrieza1.js')
        const {status} = require('./fpfrieza1.js')
        const {plural} = require('./fpfrieza1.js')
        const {aliases} = require('./fpfrieza1.js')
        var color = 7164715;
        var name = "Emperor's Devotion\nFrieza (Full Power)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Emperor%27s_Devotion_Frieza_(Full_Power)#Before%20Z-Awakening";
        var desc = "Extreme PHY UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/717489876039106561/card_1004250_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720535818875174922/A72t0ghS3X1TAAAAAElFTkSuQmCC.png";
        var leader = "PHY Ki +3, ATK +3000";
        var superatk = "[I'm The One Who'll Kill You!](https://dbz-dokkanbattle.fandom.com/wiki/File:DBZ_Dokkan_Battle_Emperor%27s_Devotion_-_Frieza_(Full_Power)_(Super_Attack)): Causes immense damage to enemy";
        var passive = "Totality of Rage: ATK +120% when performing a Super Attack";
        var stats = "HP: 12,050 (55%)/16,810 (100%)\nATK: 11,500 (55%)/15,700 (100%)\nDEF: 7,675 (55%)/11,315 (100%)";
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
        var apt = "APT: 2,356,529 (unsupported)/3,096,336 (supported)\nDefense: 49,786 (unsupported)/85,831 (supported) \nLinking Partner: [STR UR Cooler](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Ultimate_Power_Cooler) \nTeam: [Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)/[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost) \nBuild: 11 Additional/15 Critical";
        var blp = "[AGL UR Frieza (Final Form)](https://dbz-dokkanbattle.fandom.com/wiki/Earth-Piercing_Light_Frieza_(Final_Form)) - 5 links shared\n[STR UR Frieza (Final Form)](https://dbz-dokkanbattle.fandom.com/wiki/Catastrophic_Rage_Frieza_(Final_Form)) - 5 links shared\n[STR UR Cooler](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Ultimate_Power_Cooler) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 130%\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Battle](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Battle:_Emperor%27s_Devotion_Frieza_(Full_Power))** event";
        var footnotes = "";
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
            var length = args.length;
            var sub = args[0];
            switch (true)
            {
                case length == 0:
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
                    break;
                    
                case sub === "leader":
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
                    break;

                case sub === "super":
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
                    break;

                case sub === "passive":
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
                    break;

                case sub === "stats":
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
                    break;

                case sub === "links":
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
                    break;

                case sub === "categories":
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
                    break;

                case sub === "apt":
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
                    break;

                case sub === "partners":
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
                    break;

                case sub === "details":
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
                    break;

                case sub === "art":
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
                    break;

                default:
                    message.channel.send(`${message.author} that is not a valid sub-command. You can use \`d!help\` to find out all possible sub-commands.`)
                    break;
            }
        }
    }
}