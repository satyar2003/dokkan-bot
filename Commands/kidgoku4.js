module.exports = {
    name: 'kidgoku4',
    description: 'INT UR Goku (Youth)',
    categories: ['[Low-Class Warrior](https://dbz-dokkanbattle.fandom.com/wiki/Low-Class_Warrior)',
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Goku\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)',
                 '[Dragon Ball Seekers](https://dbz-dokkanbattle.fandom.com/wiki/Dragon_Ball_Seekers)',
                 '[Youth](https://dbz-dokkanbattle.fandom.com/wiki/Youth)',
                 '[DB Saga](https://dbz-dokkanbattle.fandom.com/wiki/DB_Saga)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))',
                 '[Bond of Master and Disciple](https://dbz-dokkanbattle.fandom.com/wiki/Bond_of_Master_and_Disciple)',
                 '[Revenge](https://dbz-dokkanbattle.fandom.com/wiki/Revenge)',
                 '[Rapid Growth](https://dbz-dokkanbattle.fandom.com/wiki/Rapid_Growth)',
                 '[Saviors](https://dbz-dokkanbattle.fandom.com/wiki/Saviors)'],
    link: ['[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha)\n ­ ­ ­ ­ Level 1: ATK +5% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +10% when Super Attack is launched',
           '[Guidance of the Dragon Balls](https://dbz-dokkanbattle.fandom.com/wiki/Guidance_of_the_Dragon_Balls)\n ­ ­ ­ ­ Level 1: ATK +20%\n ­ ­ ­ ­ Level 10: ATK +20% and chance to perform a critical hit +7%',
           '[All in the Family](https://dbz-dokkanbattle.fandom.com/wiki/All_in_the_Family)\n ­ ­ ­ ­ Level 1: DEF +15%\n ­ ­ ­ ­ Level 10: DEF +20%',
           '[The Innocents](https://dbz-dokkanbattle.fandom.com/wiki/The_Innocents)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[The Incredible Adventure](https://dbz-dokkanbattle.fandom.com/wiki/The_Incredible_Adventure)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +3 and ATK & DEF 7%',
           '[Turtle School](https://dbz-dokkanbattle.fandom.com/wiki/Turtle_School)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +20%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Goku (Youth)'],
    execute(message, args) {
        const {link} = require('./kidgoku4.js')
        const {categories} = require('./kidgoku4.js')
        const {status} = require('./kidgoku4.js')
        const {plural} = require('./kidgoku4.js')
        const {aliases} = require('./kidgoku4.js')
        var color = 7028604;
        var name = "All-or-nothing Punch\nGoku (Youth)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/All-or-nothing_Punch_Goku_(Youth)";
        var desc = "Super INT UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/728305834504749116/card_1016570_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/728305852729262095/340.png";
        var leader = "\"[DB Saga](https://dbz-dokkanbattle.fandom.com/wiki/DB_Saga)\" Category Ki +3 and HP, ATK & DEF +170%; or \"[Youth](https://dbz-dokkanbattle.fandom.com/wiki/Youth)\" Category Ki +3 and HP, ATK & DEF +150%";
        var superatk = "[Bending Kamehameha](https://youtu.be/93VPPZKj6II?t=15): Causes immense damage with a medium chance of stunning the enemy[1]";
        var passive = "One Last Gamble: ATK & DEF +77%; plus an additional ATK boost by up to 59% (the more HP remaining, the greater the ATK boost) and an additional DEF boost by up to 59% (the less HP remaining, the greater the DEF boost); Ki +1 and ATK & DEF +10% at start of each turn (ATK & DEF up to +59%); performs a critical hit when HP is 59% or less (once only)";
        var active = "[Take This!](https://youtu.be/93VPPZKj6II?t=30): Causes ultimate damage to enemy; can be activated when HP is 59% or less (once only)"
        var stats = "HP: 12,630 (55%)/15,630 (100%)\nATK: 12,884 (55%)/15,884 (100%)\nDEF: 7,955 (55%)/10,955 (100%)";
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
            for (var i = 0; i < Math.ceil(categories.length/2); i++)
            {
                cats += categories[i] + "\n";
            }
        var cats2 = "";
            for (var i = Math.ceil(categories.length/2); i < categories.length; i++)
            {
                cats2 += categories[i] + "\n";
            }
        var apt = "APT: 2,954,363 (unsupported)/3,266,443 (supported)\nDefense: 121,841 (unsupported)/136,623 (supported) \nLinking Partner: [AGL SSR Grandpa Gohan](https://dbz-dokkanbattle.fandom.com/wiki/Masked_Master_Grandpa_Gohan) \nTeam: [DB Saga](https://dbz-dokkanbattle.fandom.com/wiki/DB_Saga)/[Youth](https://dbz-dokkanbattle.fandom.com/wiki/Youth) \nBuild: 6 Additional/15 Critical";
        var blp = "[AGL SSR Grandpa Gohan](https://dbz-dokkanbattle.fandom.com/wiki/Masked_Master_Grandpa_Gohan) - 5 links shared\n[AGL UR Goku (Youth) (Giant Ape)](https://dbz-dokkanbattle.fandom.com/wiki/Full-On_Strike_Goku_(Youth)_(Giant_Ape)) - 4 links shared\n[PHY UR Goku (Youth) (Giant Ape)](https://dbz-dokkanbattle.fandom.com/wiki/Outcome_of_Hardship_Goku_(Youth)_(Giant_Ape)) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 150%\n► Ultimate damage muliplier is 550% on JPN\n ­ ­ ­ ­ ­▫ Ultimate damage multiplier is 650% on GLB (to be fixe)\n► Goku's Active Skill will perform a guaranteed critical hit if used within the same turn HP falls below the threshold to trigger his Passive Skill\n► [STR SSR Goku (Youth)](https://dbz-dokkanbattle.fandom.com/wiki/Penguin_Village_Adventure_Goku_(Youth)), [PHY SSR Goku (Youth)](https://dbz-dokkanbattle.fandom.com/wiki/Braveness_and_Vigor_in_Action_Goku_(Youth)), [AGL SR Goku (Youth)](https://dbz-dokkanbattle.fandom.com/wiki/The_Adventure_Begins_Goku_(Youth)), & [PHY SR Goku (Youth)](https://dbz-dokkanbattle.fandom.com/wiki/Into_the_Big_Wide_World_Goku_(Youth)) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack\n-He has a 0% uptime on his active skill";
        var footnotes = "[1]: 30% chance to stun the enemy for 2 turns";
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
                            name: "Categories cont.",
                            value: cats2
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
                        },
                        {
                            name: "Categories",
                            value: cats2
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