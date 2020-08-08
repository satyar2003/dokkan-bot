module.exports = {
    name: 'pcell5',
    description: 'INT LR Cell after transformation',
    categories: ['[Resurrected Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Resurrected_Warriors)', 
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)',
                 '[Artificial Life Forms](https://dbz-dokkanbattle.fandom.com/wiki/Artificial_Life_Forms)',
                 '[Androids/Cell Saga](https://dbz-dokkanbattle.fandom.com/wiki/Androids-Cell_Saga)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))',
                 '[Target: Goku](https://dbz-dokkanbattle.fandom.com/wiki/Target:_Goku)',
                 '[Revenge](https://dbz-dokkanbattle.fandom.com/wiki/Revenge)'],
    link: ['[Revival](https://dbz-dokkanbattle.fandom.com/wiki/Revival)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2; ATK & DEF +5% and recover 5% HP when HP is 50% or below',
           '[Messenger from the Future](https://dbz-dokkanbattle.fandom.com/wiki/Messenger_from)the_Future)\n ­ ­ ­ ­ Level 1: ATK +5%\n ­ ­ ­ ­ Level 10: ATK +10%',
           '[Big Bad Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Big_Bad_Bosses)\n ­ ­ ­ ­ Level 1: ATK & DEF +25% when HP is 80% or below\n ­ ­ ­ ­ Level 10: ATK & DEF +25%',
           '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha)\n ­ ­ ­ ­ Level 1: ATK +5% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +10% when Super Attack is launched',
           '[Ultimate Lifeform](https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_Lifeform)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +10% and recover 3% HP',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'false',
    aliases: ['incell2', 'Perfect Cell'],
    execute(message, args) {
        var color = 7028604;
        var name = "The True Value of Perfect Form\nPerfect Cell";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/The_True_Value_of_Perfect_Form_Cell_(Perfect_Form)#Perfect%20Cell";
        var desc = "Extreme INT LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/715026651561328680/card_4017910_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720703080664137839/ZOJQaHQKAZp3ZqEMQZNjPxMjHYRDxfN1ZexJGvAyz9Efi8zZRn2iARojTG4adnkvMy1IPc4W9MRloyFhiGpFS2NvPqclbrQySiRV.png";
        var leader = `"[Androids/Cell Saga](https://dbz-dokkanbattle.fandom.com/wiki/Androids-Cell_Saga)" Category Ki +4, HP & ATK +150% and DEF +170%; or <:eint:729475498270523472> Type Ki +3 and HP, ATK & DEF +120%`;
        var superatk = "[Perfect Shot](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_LR_INT_Cell_Animations) (12-17 Ki): Causes colossal damage to enemy and massively lowers DEF[1]\n[Perfect Death Beam](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_LR_INT_Cell_Animations) (18+ Ki): Causes mega-colossal damage to enemy and lowers ATK & DEF[2]";
        var passive = "Impeccable: Fully recovers HP (once only); Ki +4 and ATK & DEF +120%; ATK & DEF +20% when attacking with 4 or more Ki Spheres obtained, plus an additional ATK & DEF +20% with 6 or more Ki Spheres obtained and an additional ATK +20% with 8 or more Ki Spheres obtained";
        var stats = "HP: 21,450 (55%)/24,450 (100%)\nATK: 16,935 (55%)/19,935 (100%)\nDEF: 11,231 (55%)/14,231 (100%)";
        const {link} = require('./pcell5.js')
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
        const {categories} = require('./pcell5.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT (without active skill): 5,022,279 (unsupported)/5,615,634 (supported)\nAPT (with active skill): 7,788,172 (unsupported)/8,711,605 (supported)\nDefense: 181,701\nLinking Partner: [PHY LR Cell (Perfect Form) & Cell Jr.](https://dbz-dokkanbattle.fandom.com/wiki/The_Deadly_Cell_Games_Cell_(Perfect_Form)_%26_Cell_Jr.) \nTeam: [Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids) \nBuild: 6 Additional/15 Critical";
        var blp = "[TEQ UR Perfect Cell](https://dbz-dokkanbattle.fandom.com/wiki/Surpassing_All_Perfect_Cell) - 6 links shared\n[INT UR Perfect Cell](https://dbz-dokkanbattle.fandom.com/wiki/Ceaseless_Terror_Perfect_Cell) - 6 links shared\n[PHY LR Cell (Perfect Form) & Cell Jr.](https://dbz-dokkanbattle.fandom.com/wiki/The_Deadly_Cell_Games_Cell_(Perfect_Form)_%26_Cell_Jr.) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 150%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► Ultimate damage multiplier is 550%\n► His additional ATK & DEF +20% per Ki Sphere threshold is calculated separately, resulting in an increase of +44% per Ki Sphere threshold, for a maximum possible boost of ATK +252% and DEF +208%\n► His Active Skill has an uptime of 40%";
        var footnotes = `[1]: Lowers enemy's DEF by 80% for 3 turns\n[2]: Lowers enemy's ATK & DEF by 20% for 3 turns\n[3]: Raises "ultimate damage" multiplier by 50% during attack`;
        var active = "[Solar Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_LR_INT_Cell_Animations): Greatly raises ATK temporarily[3], causes ultimate damage to enemy and massively lowers DEF[1]; can be activated when facing only 1 enemy starting from the 3rd turn after Evolution (once only)";
        const {status} = require('./pcell5.js')
        if (status === 'incomplete')
        {
            message.channel.send({embed: {
                color: color,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: " is coming soon."
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
                        text: "[1]: Lowers enemy's DEF by 80% for 3 turns\n[2]: Lowers enemy's ATK & DEF by 20% for 3 turns"
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
                    timestamp: new Date(),
                    footer:
                    {
                        text: "1]: Lowers enemy's DEF by 80% for 3 turns\n[3]: Raises \"ultimate damage\" multiplier by 50% during attack"
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