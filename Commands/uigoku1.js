module.exports = {
    name: 'uigoku1',
    description: 'STR LR Goku (Ultra Instinct -Sign-)',
    categories: ['[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)', 
                 '[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Representatives of Universe 7](https://dbz-dokkanbattle.fandom.com/wiki/Representatives_of_Universe_7)',
                 '[Goku\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))'],
    link: ['[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha)\n ­ ­ ­ ­ Level 1: ATK +5% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +10% when Super Attack is launched',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Godly Power](https://dbz-dokkanbattle.fandom.com/wiki/Godly_Power)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +15% and chance to perform a critical hit +5%',
           '[Over in a Flash](https://dbz-dokkanbattle.fandom.com/wiki/Over_in_a_Flash)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK 7%',
           '[Tournament of Power](https://dbz-dokkanbattle.fandom.com/wiki/Tournament_of_Power)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK & DEF +7%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'false',
    aliases: ['Goku (Ultra Instinct -Sign-)'],
    execute(message, args) {
        var color = 8990259;
        var name = "Sign of a Turnaround\nGoku (Ultra Instinct -Sign-)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Sign_of_a_Turnaround_Goku_(Ultra_Instinct_-Sign-)";
        var desc = "Super STR LR";
        var circle = "https://media.discordapp.net/attachments/705478347274059956/713172121530138644/card_1019820_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720709209574080522/DwjvLAqVZsmAAAAAElFTkSuQmCC.png";
        var leader = `"[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)"  Category Ki +4 and HP, ATK & DEF +130% or <:sstr:729475907768811591> Type Ki +4 and HP, ATK & DEF +100%`;
        var superatk = "[Instinctive Punch](https://www.youtube.com/watch?v=L78L5TQ_4YI) (12-17 Ki): Disables enemy's guard and causes colossal damage to enemy\n[Kamehameha](https://youtu.be/L78L5TQ_4YI?t=17) (18+ Ki): Disables enemy's guard and causes mega-colossal damage to enemy";
        var passive = "Turn in Tides of Battle: ATK & DEF +77%; great chance[1] of evading enemy's attack (including Super Attack) for 7 turns from start of turn, and high chance[2] of evading enemy's attack (including Super Attack) starting from the 8th turn; plus an additional Ki +1 (up to +7) and ATK & DEF +11% (up to 77%) with each attack evaded (including Super Attack)";
        var stats = "HP: 17,838 (55%)/20,838 (100%)\nATK: 19,400 (55%)/22,800 (100%)\nDEF: 9,956 (55%)/12,556 (100%)";
        const {link} = require('./uigoku1.js')
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
        const {categories} = require('./uigoku1.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 5,629,157 (unsupported)/6,887,654 (supported)\nDefense: 123,461(unsupported)/151,361 (supported)\nLinking Partners: [STR UR Super Saiyan God SS Goku (Kaioken)](https://dbz-dokkanbattle.fandom.com/wiki/Final_Super_Power_Super_Saiyan_God_SS_Goku_(Kaioken))/[INT LR Super Saiyan God Goku](https://dbz-dokkanbattle.fandom.com/wiki/Legend_Reborn_Super_Saiyan_God_Goku)\nTeam: [Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))\nBuild: 6 Additional/20 Critical";
        var blp = "[STR UR Super Saiyan God SS Goku (Kaioken)](https://dbz-dokkanbattle.fandom.com/wiki/Final_Super_Power_Super_Saiyan_God_SS_Goku_(Kaioken)) - 5 links shared\n[INT LR Super Saiyan God Goku](https://dbz-dokkanbattle.fandom.com/wiki/Legend_Reborn_Super_Saiyan_God_Goku) - 4 links shared\n[TEQ LR Goku & Frieza (Final Form) (Angel)](https://dbz-dokkanbattle.fandom.com/wiki/Miraculous_Outcome_Goku_%26_Frieza_(Final_Form)_(Angel)) - 4 links shared";
        var deets = `► 12 Ki Multiplier is 150%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%`;
        var footnotes = "[1]: 70% chance to evade enemy's attack\n[2]: 50% chance to evade enemy's attack";
        const {status} = require('./uigoku1.js')
        if (status === 'incomplete')
        {
            message.channel.send({embed: {
                color: color,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Goku (Ultra Instinct -Sign-) is coming soon."
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
                    timestamp: new Date()
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
                        text: footnotes
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