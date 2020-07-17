module.exports = {
    name: 'ssj3gotenks1z',
    description: 'TEQ UR Super Saiyan 3 Gotenks with EZA',
    categories: ['[Fusion](https://dbz-dokkanbattle.fandom.com/wiki/Fusion)',
                 '[Hybrid Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Hybrid_Saiyans)',
                 '[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Super Saiyan 3](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan_3)',
                 '[Youth](https://dbz-dokkanbattle.fandom.com/wiki/Youth)',
                 '[Final Trump Card](https://dbz-dokkanbattle.fandom.com/wiki/Final_Trump_Card)',
                 '[Special Pose](https://dbz-dokkanbattle.fandom.com/wiki/Special_Pose)',
                 '[Rapid Growth](https://dbz-dokkanbattle.fandom.com/wiki/Rapid_Growth)'],
    link: ['[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan) (ATK +10%)',
           '[Fused Fighter](https://dbz-dokkanbattle.fandom.com/wiki/Fused_Fighter) (Ki +2)',
           '[Over in a Flash](https://dbz-dokkanbattle.fandom.com/wiki/Over_in_a_Flash) (Ki +3)',
           '[Limit-Breaking Form](https://dbz-dokkanbattle.fandom.com/wiki/Limit-Breaking_Form) (ATK +2000 when Super Attack is launched)',
           '[The Innocents](https://dbz-dokkanbattle.fandom.com/wiki/The_Innocents) (ATK +10%)',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle) (ATK +15%)'],
    status: 'complete',
    plural: 'false',
    aliases: ['ss3gotenks1z', 'Super Saiyan 3 Gotenks Z'],
    execute(message, args) {
        const {link} = require('./ssj3gotenks1z.js')
        const {categories} = require('./ssj3gotenks1z.js')
        const {status} = require('./ssj3gotenks1z.js')
        const {plural} = require('./ssj3gotenks1z.js')
        const {aliases} = require('./ssj3gotenks1z.js')
        var color = 3040566;
        var name = "Grim Reaper of Death's Rampage\nSuper Saiyan 3 Gotenks Z";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Grim_Reaper_of_Death%27s_Rampage_Super_Saiyan_3_Gotenks#Extreme%20Z-Awakened";
        var desc = "Super TEQ UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/720852221658660944/card_1006210_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720852306484002946/340.png";
        var leader = "<:teq:729467504593862728> Type Ki +4 and HP, ATK & DEF +100%";
        var superatk = "Super Ghost Kamikaze Attack (9-10 Ki): Raises ATK for 1 turn[3] and causes immense damage to enemy\n[Charging Ultra Buu Buu Volleyball Attack](https://dbz-dokkanbattle.fandom.com/wiki/File:Grim_Reaper_of_Death%27s_Rampage_Super_Saiyan_3_Gotenks_Super_ATK_2) (11 Ki): Massively raises ATK for 1 turn[1] and causes immense damage to enemy\n[Super Ghost Kamikaze Attack](https://dbz-dokkanbattle.fandom.com/wiki/File:Grim_Reaper_of_Death%27s_Rampage_Super_Saiyan_3_Gotenks_Super_ATK_3) (12 Ki): Causes supreme damage to enemy and greatly lowers DEF[2]";
        var passive = "Furious Fighting Spirit: ATK +140% when performing a Super Attack; DEF +70% when Ki is 11 or less";
        var stats = "HP: 14,587 (55%)/17,187 (100%)\nATK: 14,610 (55%)/18,010 (100%)\nDEF: 8,560 (55%)/11,560 (100%)";
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
        var apt = "APT: 4,297,564 (unsupported)/6,016,590 (supported)\nDefense: 83,121 (unsupported)/116,370 (supported) \nLinking Partner: [PHY UR Super Saiyan Gotenks](https://dbz-dokkanbattle.fandom.com/wiki/Devastating_Fusion_Power_Super_Saiyan_Gotenks) \nTeam: [Fusion](https://dbz-dokkanbattle.fandom.com/wiki/Fusion) \nBuild: 6 Additional/20 Critical";
        var blp = "[TEQ UR Super Saiyan 3 Gotenks (Teen)](https://dbz-dokkanbattle.fandom.com/wiki/Blazing_Fusion_Warrior_Super_Saiyan_3_Gotenks_(Teen)) - 5 links shared\n[STR UR Super Saiyan Gotenks](https://dbz-dokkanbattle.fandom.com/wiki/Heroic_Victory_Declaration_Super_Saiyan_Gotenks) - 4 links shared\n[PHY UR Super Saiyan Gotenks] - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n ­ ­ ­ ­ ­▫ ­11 Ki: 135.56%\n­ ­ ­ ­ ­▫ ­10 Ki: 131.11%\n ­ ­ ­ ­ ­▫ ­9 Ki: 126.67%\n► [STR SSR Super Saiyan 3 Gotenks](https://dbz-dokkanbattle.fandom.com/wiki/Power_that_Outshines_the_Adults_Super_Saiyan_3_Gotenks) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Battle](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Battle:_Grim_Reaper_of_Death%27s_Rampage_Super_Saiyan_3_Gotenks)** event";
        var footnotes = "[1]: Raises SA Multiplier by 100% for 1 turn\n[2]: Lowers enemy's DEF by 50% for 3 turns\n[3]: Raises SA Multiplier by 30% for 1 turn";
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