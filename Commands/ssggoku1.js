module.exports = {
    name: 'ssggoku1',
    description: 'INT LR Super Saiyan God Goku',
    categories: ['[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Goku\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))'],
    link: ['[Godly Power](https://dbz-dokkanbattle.fandom.com/wiki/Godly_Power)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +15% and chance to perform a critical hit +5%',
           '[Warrior Gods](https://dbz-dokkanbattle.fandom.com/wiki/Warrior_Gods)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +10% and ATK +5% when Super Attack is launched',
           '[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha)\n ­ ­ ­ ­ Level 1: ATK +5% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +10% when Super Attack is launched',
           '[Over in a Flash](https://dbz-dokkanbattle.fandom.com/wiki/Over_in_a_Flash)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK 7%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'false',
    aliases: ['ssjggoku1', 'Super Saiyan God Goku'],
    execute(message, args) {
        const {link} = require('./ssggoku1.js')
        const {categories} = require('./ssggoku1.js')
        const {status} = require('./ssggoku1.js')
        const {plural} = require('./ssggoku1.js')
        const {aliases} = require('./ssggoku1.js')
        var color = 7028604;
        var name = "Legend Reborn\nSuper Saiyan God Goku";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Legend_Reborn_Super_Saiyan_God_Goku";
        var desc = "Super INT LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/721146405627887676/card_1018250_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/721146641452630106/jMAAAAASUVORK5CYII.png";
        var leader = "\"[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)\" or \"[Hybrid Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Hybrid_Saiyans)\" Category Ki +4 and HP, ATK & DEF +130%";
        var superatk = "[Limitbreaker Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_LR_Super_Saiyan_God_Goku_Animations) (12-17 Ki): Greatly raises ATK & DEF for 1 turn[1] and causes colossal damage to enemy\n[Dragon Smash](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_LR_Super_Saiyan_God_Goku_Animations) (18+ Ki): Greatly raises ATK & DEF for 3 turns[2], causes mega-colossal damage to enemy and greatly lowers DEF[3]";
        var passive = "To a New Realm: ATK +77%; Ki +1 (up to +5) and DEF +11% (up to 55%) per \"[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)\" or \"[Hybrid Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Hybrid_Saiyans)\" Category ally (self excluded) on the team; high chance[4] of evading enemy's attack (including Super Attack) and performing a critical hit for 7 turns from start of turn";
        var stats = "HP: 15,288 (55%)/18,288 (100%)\nATK: 18,805 (55%)/21,805 (100%)\nDEF: 11,975 (55%)/14,975 (100%)";
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
        var apt = "APT: 6,052,968 (unsupported)/7,406,114 (supported)\nDefense: 191,492 (unsupported)/240,910 (supported) \nLinking Partner: [STR UR Super Saiyan God SS Goku (Kaioken)](https://dbz-dokkanbattle.fandom.com/wiki/Final_Super_Power_Super_Saiyan_God_SS_Goku_(Kaioken)) \nTeam: [Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category)) \nBuild: 15 Additional/6 Critical";
        var blp = "[TEQ LR Super Saiyan 3 Goku](https://dbz-dokkanbattle.fandom.com/wiki/Golden_Fist_Super_Saiyan_3_Goku) - 5 links shared\n[STR UR Super Saiyan God SS Goku (Kaioken)](https://dbz-dokkanbattle.fandom.com/wiki/Final_Super_Power_Super_Saiyan_God_SS_Goku_(Kaioken)) - 5 links shared\n[STR UR Super Saiyan God Vegeta](https://dbz-dokkanbattle.fandom.com/wiki/Devastating_Fighting_Spirit_of_God_Super_Saiyan_God_Vegeta) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 145%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► [INT SSR Super Saiyan God Goku](https://dbz-dokkanbattle.fandom.com/wiki/Godly_Impact_Super_Saiyan_God_Goku) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "[1]: Raises SA Multiplier and DEF by 50% for 1 turn\n[2]: Raises SA Multiplier and DEF by 50% for 3 turns\n[3]: Lowers enemy's DEF by 50% for 3 turns\n[4]: 50% chance to evade enemy's attack and perform a critical hit";
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
                        text: "[1]: Raises SA Multiplier and DEF by 50% for 1 turn\n[2]: Raises SA Multiplier and DEF by 50% for 3 turns\n[3]: Lowers enemy's DEF by 50% for 3 turns"
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
                        text: "[4]: 50% chance to evade enemy's attack and perform a critical hit"
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