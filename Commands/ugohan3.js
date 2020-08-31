const Discord = require('discord.js')

module.exports = {
    name: 'ugohan3',
    description: 'INT UR Ultimate Gohan without EZA',
    categories: ['[Hybrid Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Hybrid_Saiyans)',
                 '[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Goku\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)',
                 '[Siblings\' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)',
                 '[Revenge](https://dbz-dokkanbattle.fandom.com/wiki/Revenge)',
                 '[Rapid Growth](https://dbz-dokkanbattle.fandom.com/wiki/Rapid_Growth)',
                 '[Saviors](https://dbz-dokkanbattle.fandom.com/wiki/Saviors)'],
    link: ['[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race)\n ­ ­ ­ ­ Level 1: ATK +5%\n ­ ­ ­ ­ Level 10: ATK +10%',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Infighter](https://dbz-dokkanbattle.fandom.com/wiki/Infighter)\n ­ ­ ­ ­ Level 1: ATK +10% and enemy DEF -10%\n ­ ­ ­ ­ Level 10: ATK +15% and enemy DEF -15%',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[Power Bestowed by God](https://dbz-dokkanbattle.fandom.com/wiki/Power_Bestowed_by_God)\n ­ ­ ­ ­ Level 1: ATK +5% when performing a Super Atttack\n ­ ­ ­ ­ Level 10: ATK +10% when performing a Super Attack',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Ultimate Gohan'],
    execute(message, args) {
        const {link} = require('./ugohan3.js')
        const {categories} = require('./ugohan3.js')
        const {status} = require('./ugohan3.js')
        const {plural} = require('./ugohan3.js')
        const {aliases} = require('./ugohan3.js')
        var color = 7028604;
        var name = "Ultimate Power Surge\nUltimate Gohan";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_Power_Surge_Ultimate_Gohan#Before%20Z-Awakening";
        var desc = "Super INT UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/736438776141709342/card_1006700_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/736438753631010816/latest.png?width=459&height=612";
        var leader = "<:int:729468835819946026> Type Ki +3, ATK +3000";
        var superatk = "Burst Rush: Greatly raises ATK[1] and causes supreme damage to enemy";
        var passive = "Victor's Fortitude: Ki +5, ATK +10000 when Ki is 7 or more";
        var stats = "HP: 12,106 (55%)/16,306 (100%)\nATK: 11,278 (55%)/15,478 (100%)\nDEF: 7,508 (55%)/11,708 (100%)";
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
        var apt = "APT: 906,703 (unsupported)/1,499,664 (supported)\nDefense: 51,515 (unsupported)/83,282 (supported) \nLinking Partner: [INT UR Gohan (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/Roar_of_Rage_Gohan_(Kid)) \nTeam: [Siblings' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)/[Goku's Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family) \nBuild: 6 Additional/15 Critical";
        var blp = "[TEQ UR Vegito](https://dbz-dokkanbattle.fandom.com/wiki/True_Value_of_the_Potara_Vegito) - 4 links shared\n[STR UR Goku](https://dbz-dokkanbattle.fandom.com/wiki/Pinnacle_of_Fury_Goku) - 4 links shared\n[STR UR Gotenks](https://dbz-dokkanbattle.fandom.com/wiki/Victory_at_Hand_Gotenks) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► [AGL SR Ultimate Gohan](https://dbz-dokkanbattle.fandom.com/wiki/Renewed_Determination_Ultimate_Gohan) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Battle](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Battle:_Ultimate_Power_Surge_Ultimate_Gohan)** event";
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
                        timestamp: new Date(),
                        footer:
                        {
                            text: footnotes
                        }
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
                    const art = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
                        .setAuthor(message.author.username, message.author.displayAvatarURL({format: "png", dynamic: "true"}))
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .setImage(character)
                        .setTimestamp()
                    message.channel.send(art)
                    break;

                default:
                    message.channel.send(`${message.author} that is not a valid sub-command. You can use \`d!help\` to find out all possible sub-commands.`)
                    break;
            }
        }
    }
}