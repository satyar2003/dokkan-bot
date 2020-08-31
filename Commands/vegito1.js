module.exports = {
    name: 'vegito1',
    description: 'TEQ LR Vegito',
    categories: ['[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)',
                 '[Potara](https://dbz-dokkanbattle.fandom.com/wiki/Potara)',
                 '[Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))',
                 '[Final Trump Card](https://dbz-dokkanbattle.fandom.com/wiki/Final_Trump_Card)'],
    link: ['[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race)\n ­ ­ ­ ­ Level 1: ATK +5%\n ­ ­ ­ ­ Level 10: ATK +10%',
           '[Brainiacs](https://dbz-dokkanbattle.fandom.com/wiki/Brainiacs)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: ATK & DEF +15%',
           '[Power Bestowed by God](https://dbz-dokkanbattle.fandom.com/wiki/Power_Bestowed_by_God)\n ­ ­ ­ ­ Level 1: ATK +5% when performing a Super Atttack\n ­ ­ ­ ­ Level 10: ATK +10% when performing a Super Attack',
           '[Over in a Flash](https://dbz-dokkanbattle.fandom.com/wiki/Over_in_a_Flash)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK 7%',
           '[Fused Fighter](https://dbz-dokkanbattle.fandom.com/wiki/Fused_Fighter)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'false',
    aliases: ['Vegito'],
    execute(message, args) {
        const {link} = require('./vegito1.js')
        const {categories} = require('./vegito1.js')
        const {status} = require('./vegito1.js')
        const {plural} = require('./vegito1.js')
        const {aliases} = require('./vegito1.js')
        var color = 3040566;
        var name = "Ultimate and Invincible Fusion\nVegito";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_and_Invincible_Fusion_Vegito";
        var desc = "Super TEQ LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/731375801156763679/card_1018650_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/731375986612109332/3G9olx4ZkAAAAAElFTkSuQmCC.png";
        var leader = "\"[Final Trump Card](https://dbz-dokkanbattle.fandom.com/wiki/Final_Trump_Card)\" or \"[Potara](https://dbz-dokkanbattle.fandom.com/wiki/Potara)\" Category Ki +3 and HP, ATK & DEF +150%";
        var superatk = "[Vegito Combo](https://youtu.be/J0SLez9Lt6A?t=93) (12-17 Ki): Raises ATK[1] and causes colossal damage to enemy\n[Big Bang Attack](https://youtu.be/J0SLez9Lt6A?t=109) (18+ Ki): Raises ATK[1] and causes mega-colossal damage to enemy";
        var passive = "Die!: ATK & DEF +70%; Ki +3 and launches an additional attack that has a medium chance[2] of becoming a Super Attack when attacking; high chance[3] of evading enemy's attack (including Super Attack) as the 3rd attacker in a turn; [Transforms](https://youtu.be/J0SLez9Lt6A?t=125) when conditions are met";
        var transform = "Transforms starting from the 4th turn from the start of battle"
        var stats = "HP: 21,875 (55%)/24,475 (100%)\nATK: 18,720 (55%)/22,120 (100%)\nDEF: 8,788 (55%)/11,788 (100%)";
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
        var apt = "APT: 7,341,123 (unsupported)/8,764,498 (supported)\nDefense: 166,145 (unsupported)/198,874 (supported) \nLinking Partner: [STR LR Gogeta](https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_and_Supreme_Fusion_Gogeta) \nTeam: [Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)/[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost) \nBuild: 20 Additional/6 Critical";
        var blp = "[STR LR Gogeta](https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_and_Supreme_Fusion_Gogeta) - 5 links shared\n[AGL UR Super Saiyan Gogeta](https://dbz-dokkanbattle.fandom.com/wiki/Transcendent_Fusion_Super_Saiyan_Gogeta) - 4 links shared\n[TEQ UR Super Saiyan God SS Vegito](https://dbz-dokkanbattle.fandom.com/wiki/Strength_Beyond_Gods_Super_Saiyan_God_SS_Vegito) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 160%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► [STR SR Vegito](https://dbz-dokkanbattle.fandom.com/wiki/Overflowing_Power_Vegito) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "[1]: Raises ATK by 30% for 99 turns\n[2]: 25% chance for additional attack to become a Super Attack\n[3]: 50% chance to evade enemy's attack";
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
                        text: "[1]: Raises ATK by 30% for 99 turns"
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
                        text: "[2]: 25% chance for additional attack to become a Super Attack\n[3]: 50% chance to evade enemy's attack"
                    }
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