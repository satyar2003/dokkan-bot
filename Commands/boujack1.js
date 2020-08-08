module.exports = {
    name: 'boujack1',
    description: 'INT LR Full Power Boujack (Galactic Warrior)',
    categories: ['[Resurrect Warrios](https://dbz-dokkanbattle.fandom.com/wiki/Resurrected_Warriors)',
                 '[Movie Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Movie_Bosses)',
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)',
                 '[Joined Forcees](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)',
                 '[Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)'],
    link: ['[The Hera Clan](https://dbz-dokkanbattle.fandom.com/wiki/The_Hera_Clan)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: Ki +2 and ATK +5% and chance to perform a critical hit +5%',
           '[Galactic Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Galactic_Warriors)\n ­ ­ ­ ­ Level 1: ATK +20%\n ­ ­ ­ ­ Level 10: Ki +1 and ATK & DEF +20%',
           '[Big Bad Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Big_Bad_Bosses)\n ­ ­ ­ ­ Level 1: ATK & DEF +25% when HP is 80% or below\n ­ ­ ­ ­ Level 10: ATK & DEF +25%',
           '[Thirst for Conquest](https://dbz-dokkanbattle.fandom.com/wiki/Thirst_for_Conquest)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK & DEF +15%',
           '[Revival](https://dbz-dokkanbattle.fandom.com/wiki/Revival)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2; ATK & DEF +5% and recover 5% HP when HP is 50% or below',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'false',
    aliases: ['Full Power Boujack (Galactic Warrior)'],
    execute(message, args) {
        const {link} = require('./boujack1.js')
        const {categories} = require('./boujack1.js')
        const {status} = require('./boujack1.js')
        const {plural} = require('./boujack1.js')
        const {aliases} = require('./boujack1.js')
        var color = 7028604;
        var name = "Galaxy-Threatening Invasion\nFull Power Boujack (Galactic Warrior)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Galaxy-Threatening_Invasion_Full_Power_Boujack_(Galactic_Warrior)";
        var desc = "Extreme INT LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/718162137934987324/card_1012160_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720530298068009000/AZUnMVftTBrfAAAAAElFTkSuQmCC.png";
        var leader = "<:eint:729475498270523472> Type Ki +4 and HP, ATK & DEF +100%; <:sint:729475830794682449> Type Ki +2 and HP, ATK & DEF +70%";
        var superatk = "[Galactic Buster](https://youtu.be/WPhHIAE0V9M?t=33) (12-17 Ki): Causes colossal damage to enemy and greatly lowers DEF[1]\n[Galactic Suppresion](https://dbz-dokkanbattle.fandom.com/wiki/File:(Super_Attack)_NEW_LR!!) (18+ Ki): Causes mega-colossal damage to enemy and raises Extreme Class allies' ATK by 40% for 1 turn";
        var passive = "A Galaxy in Shadow: ATK & DEF +80%; plus additional ATK boost by up to 70% (the more HP remaining, the greater the ATK boost) and additional DEF boost by up to 70% (the less HP remaining, the greater the DEF boost)";
        var stats = "HP: 19,750 (55%)/22,750 (100%)\nATK: 16,765 (55%)/19,765 (100%)\nDEF: 12,294 (55%)/15,294 (100%)";
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
        var apt = "APT: 5,080,338 (unsupported)/121,128 (supported)\nDefense: 5,893,192 (unsupported)/148,045 (supported)\nLinking Partner: [INT UR Full Power Boujack](https://dbz-dokkanbattle.fandom.com/wiki/Incomparable_Opponent_Full_Power_Boujack) \nTeam: [Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors) \nBuild: 6 Additional/15 Critical";
        var blp = "[AGL UR Full Power Boujack](https://dbz-dokkanbattle.fandom.com/wiki/Tyrannical_Maelstrom_Full_Power_Boujack) - 5 links shared\n[PHY SSR Boujack](https://dbz-dokkanbattle.fandom.com/wiki/Galactic_Warrior_of_the_Ravaged_Universe_Boujack) - 5 links shared\n[AGL LR Super Baby 2 (Giant Ape)](https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_Malign_Being_Super_Baby_2_(Giant_Ape)) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 150%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► The more HP remaining, the higher the ATK boost from the second part of his Passive Skill. Only the HP at the start of each turn is taken into consideration.\n­ ­ ­ ­ ­▫ Formula: 70% / 100 * HP remaining (%) = additional ATK boost\n ­ ­ ­ ­ ­▫ For example, at 60% HP: 70% / 100 * 60% = ATK +42%\n► His DEF boost works the opposite way:\n ­ ­ ­ ­ ­▫ Formula: 70% / 100 * HP lost (%) = additional DEF boost\n ­ ­ ­ ­ ­▫ For example, at 60% HP: 70% / 100 * 40% = DEF +28%";
        var footnotes = "[1]: Lowers enemy's DEF by 50% for 3 turns";
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