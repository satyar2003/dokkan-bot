module.exports = {
    name: 'ssbgogeta2',
    description: 'STR LR Super Saiyan God SS Gogeta',
    categories: ['[Fusion](https://dbz-dokkanbattle.fandom.com/wiki/Fusion)',
                 '[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Movie Heroes](https://dbz-dokkanbattle.fandom.com/wiki/Movie_Heroes)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))',
                 '[Final Trump Card](https://dbz-dokkanbattle.fandom.com/wiki/Final_Trump_Card)'],
    link: ['[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Fused Fighter](https://dbz-dokkanbattle.fandom.com/wiki/Fused_Fighter)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Warrior Gods](https://dbz-dokkanbattle.fandom.com/wiki/Warrior_Gods)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +10% and ATK +5% when Super Attack is launched',
           '[Over in a Flash](https://dbz-dokkanbattle.fandom.com/wiki/Over_in_a_Flash)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK 7%',
           '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha)\n ­ ­ ­ ­ Level 1: ATK +5% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +10% when Super Attack is launched',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'false',
    aliases: ['Super Saiyan God SS Gogeta'],
    execute(message, args) {
        const {link} = require('./ssbgogeta2.js')
        const {categories} = require('./ssbgogeta2.js')
        const {status} = require('./ssbgogeta2.js')
        const {plural} = require('./ssbgogeta2.js')
        const {aliases} = require('./ssbgogeta2.js')
        var color = 8990259;
        var name = "Ultimate and Supreme Fusion\nSuper Saiyan God SS Gogeta";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_and_Supreme_Fusion_Gogeta#Super%20Saiyan%20God%20SS%20Gogeta";
        var desc = "Super STR LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/732350436832575598/card_4017970_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/732350656299532358/wMnJjSLa5OmogAAAABJRU5ErkJggg.png";
        var leader = "\"[Final Trump Card](https://dbz-dokkanbattle.fandom.com/wiki/Final_Trump_Card)\" or \"[Fusion](https://dbz-dokkanbattle.fandom.com/wiki/Fusion)\" Category Ki +3 and HP, ATK & DEF +150%";
        var superatk = "[Stardust Fall](https://youtu.be/J0SLez9Lt6A?t=41) (12-17 Ki): Raises ATK & DEF for 1 turn[1] and causes colossal damage to enemy\n[Meteor Explosion](https://youtu.be/J0SLez9Lt6A?t=55) (18+ Ki): Raises DEF for 1 turn[2] and causes mega-colossal damage to enemy";
        var passive = "Astounding Power!: ATK & DEF +77%; Ki +5, launches an additional attack, plus an additional ATK & DEF +7% (up to 77%) with each attack performed and attacks effective against all Types as the 1st or 2nd attacker in a turn; launches an additional Super Attack and high chance[3] of evading enemy's attack (including Super Attack) as the 3rd attacker in a turn";
        var active = "[Ultimate Kamehameha](https://youtu.be/J0SLez9Lt6A?t=74): Greatly raises ATK temporarily[4] and causes ultimate damage to enemy; can be activated when facing only 1 enemy, whose HP is 50% or less, starting from next attacking turn (once only)"
        var stats = "HP: 21,025 (55%)/24,025 (100%)\nATK: 19,230 (55%)/22,630 (100%)\nDEF: 8,575 (55%)/11,175 (100%)";
        var links = "";
            for (var i = 0; i < Math.ceil(link.length/2); i++)
            {
                links += link[i] + "\n";
            }
        var links2 = "";
            for (var i = Math.ceil(link.length/2); i < link.length; i++)
            {
                links += link[i] + "\n";
            }
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 7,270,697 (unsupported)/8,681,559 (supported)\nDefense: 130,991 (unsupported)/156,796 (supported) \nLinking Partner: [TEQ LR Vegito](https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_and_Invincible_Fusion_Vegito) \nTeam: [Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)/[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost) \nBuild: 15 Additional/11 Critical";
        var blp = "[TEQ UR Super Saiyan God SS Vegito](https://dbz-dokkanbattle.fandom.com/wiki/Strength_Beyond_Gods_Super_Saiyan_God_SS_Vegito) - 6 links shared\n[AGL UR Super Saiyan God SS Gogeta](https://dbz-dokkanbattle.fandom.com/wiki/Transcendent_Fusion_Super_Saiyan_Gogeta#Super%20Saiyan%20God%20SS%20Gogeta) - 5 links shared\n[TEQ LR Super Saiyan God SS Vegito](https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_and_Invincible_Fusion_Vegito#Super%20Saiyan%20God%20SS%20Vegito) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 160%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► Ultimate damage multiplier is 550%\n► His additional \"ATK & DEF +7% with each attack performed\" is calculated separately, for a total boost of +213.29% after 11 attacks rather than +154%";
        var footnotes = "[1]: Raises SA Multiplier and DEF by 30% for 1 turn\n[2]: Raises DEF by 30% for 1 turn\n[3]: 50% chance to evade enemy's attack\n[4]: Raises \"ultimate damage\" multiplier by 50% during attack";
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
                        text: "[1]: Raises SA Multiplier and DEF by 30% for 1 turn\n[2]: Raises DEF by 30% for 1 turn"
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
                        text: "[4]: Raises \"ultimate damage\" multiplier by 50% during attack"
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