module.exports = {
    name: 'ssj4vegeta1',
    description: 'STR LR Super Saiyan 4 Vegeta',
    categories: ['[Shadow Dragon Saga](https://dbz-dokkanbattle.fandom.com/wiki/Shadow_Dragon_Saga)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Vegeta\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Vegeta%27s_Family)',
                 '[Worthy Rivals](https://dbz-dokkanbattle.fandom.com/wiki/Worthy_Rivals)',
                 '[Saviors](https://dbz-dokkanbattle.fandom.com/wiki/Saviors)'],
    link: ['[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Saiyan Roar](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Roar)\n ­ ­ ­ ­ Level 1: ATK +25%\n ­ ­ ­ ­ Level 10: ATK +25% and DEF +10%',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Saiyan Pride](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Pride)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[GT](https://dbz-dokkanbattle.fandom.com/wiki/GT)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +10%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'false',
    aliases: ['ss4vegeta1', 'Super Saiyan 4 Vegeta'],
    execute(message, args) {
        var color = 8990259;
        var name = "Unrivaled Saiyan's Peak\nSuper Saiyan 4 Vegeta";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Unrivaled_Saiyan%27s_Peak_Super_Saiyan_4_Vegeta";
        var desc = "Super STR LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/717590468862672926/card_1014220_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720706441899671592/CWUFgIn2HbkAAAAASUVORK5CYII.png";
        var leader = "\"[Vegeta's Family](https://dbz-dokkanbattle.fandom.com/wiki/Vegeta%27s_Family)\" Category Ki +3, HP +130% and ATK & DEF +170%; or <:sstr:729475907768811591> Type Ki +3 and HP, ATK & DEF +120%";
        var superatk = "[Spirit Break Cannon](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_LR_Super_Saiyan_4_Vegeta_Animations) (12-17 Ki): Massively raises ATK for 1 turn[1] and causes colossal damage to enemy\n[Final Flash](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_LR_Super_Saiyan_4_Vegeta_Animations) (18+ Ki): Massively raises ATK & DEF for 1 turn[2] and causes mega-colossal damage to enemy";
        var passive = "This Isn't the End!: DEF +80%; ATK +20% at start of each turn (up to 80%); plus an additional Ki +2 per <:rbw:729467948690964480> or <:str:729468929293942894> Ki Sphere obtained; medium chance[3] of evading enemy's Super Attack and countering with tremendous power";
        var active = "[Final Shine Attack](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_LR_Super_Saiyan_4_Vegeta_Animations): Massively raises ATK temporarily[4] and causes ultimate damage to enemy; can be activated starting from the 4th turn from start of battle (once only)"
        var stats = "HP: 19,538 (55%)/22,538 (100%)\nATK: 18,380 (55%)/21,780 (100%)\nDEF: 10,381 (55%)/12,981 (100%)";
        const {link} = require('./ssj4vegeta1.js')
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
        const {categories} = require('./ssj4vegeta1.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 6,786,761 (unsupported)/8,782,867 (supported)\nDefense: 205,619 (unsupported)/236,081 (supported) \nLinking Partner: [STR UR Super Saiyan 4 Goku](https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_Super_Saiyan_Super_Saiyan_4_Goku) \nTeam: [Vegeta's Family](https://dbz-dokkanbattle.fandom.com/wiki/Vegeta%27s_Family) \nBuild: 6 Additional/20 Critical";
        var blp = "[AGL LR Super Saiyan 4 Goku](https://dbz-dokkanbattle.fandom.com/wiki/Apex_of_Supreme_Saiyan_Power_Super_Saiyan_4_Goku) - 6 links shared\n[STR UR Super Saiyan 4 Goku](https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_Super_Saiyan_Super_Saiyan_4_Goku) - 5 links shared\n[TEQ UR Super Full Power Saiyan 4 Goku](https://dbz-dokkanbattle.fandom.com/wiki/Hope-Filled_Strike_Super_Full_Power_Saiyan_4_Goku) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 160%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► Tremendous power multiplier is 300%\n► Ultimate damage multiplier is 550%";
        var footnotes = "[1]: Raises SA Multiplier by 100% for 1 turn\n[2]: Raises SA Multiplier and DEF by 100% for 1 turn\n[3]: 30% chance of evading and countering enemy's Super Attack\n[4]: Raises \"ultimate damage\" multiplier by 100% during attack";
        const {status} = require('./ssj4vegeta1.js')
        if (status === 'incomplete')
        {
            message.channel.send({embed: {
                color: color,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Super Saiyan 4 Vegeta is coming soon."
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
                        text: "[1]: Raises SA Multiplier by 100% for 1 turn\n[2]: Raises SA Multiplier and DEF by 100% for 1 turn"
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
                        text: "[3]: 30% chance of evading and countering enemy's Super Attack"
                    }
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
                    timestamp: new Date(),
                    footer:
                    {
                        text: "[4]: Raises \"ultimate damage\" multiplier by 100% during attack"
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