module.exports = {
    name: 'rose2',
    description: 'STR UR Goku Black (Super Saiyan Rosé)',
    categories: ['[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)',
                 '[Potara](https://dbz-dokkanbattle.fandom.com/wiki/Potara)',
                 '[Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga)',
                 '[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)',
                 '[Exploding Rage](https://dbz-dokkanbattle.fandom.com/wiki/Exploding_Rage)',
                 '[Inhuman Deeds](https://dbz-dokkanbattle.fandom.com/wiki/Inhuman_Deeds)'],
    link: ['[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan) (ATK +10%)',
           '[Fear and Faith](https://dbz-dokkanbattle.fandom.com/wiki/Fear_and_Faith) (Ki +2)',
           '[Nightmare](https://dbz-dokkanbattle.fandom.com/wiki/Nightmare) (ATK +10%)',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle) (Ki +2)',
           '[Dismal Future](https://dbz-dokkanbattle.fandom.com/wiki/Dismal_Future) (Ki +1)',
           '[Big Bad Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Big_Bad_Bosses) (ATK & DEF +25% when HP is 80% or below)',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle) (ATK +15%)'],
    status: 'complete',
    plural: 'false',
    aliases: ['Goku Black (Super Saiyan Rosé)'],
    execute(message, args) {
        const {link} = require('./rose2.js')
        const {categories} = require('./rose2.js')
        const {status} = require('./rose2.js')
        const {plural} = require('./rose2.js')
        const {aliases} = require('./rose2.js')
        var color = 8990259;
        var name = "Furious Punishment\nGoku Black (Super Saiyan Rosé)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Furious_Punishment_Goku_Black_(Super_Saiyan_Ros%C3%A9)";
        var desc = "Extreme STR UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/722524474552877066/card_1012760_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/722524543029084241/340.png";
        var leader = "[Extreme Type](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_Class) allies' Ki +3 and HP, ATK & DEF +120% when team includes all five Extreme Types";
        var superatk = "[Waltz of Chaos](https://dbz-dokkanbattle.fandom.com/wiki/File:DBZ_Dokkan_Battle_Punishment_of_Anger_-_Goku_Black_(Super_Saiyan_Ros%C3%A9)_(Super_Attack)): Causes immense damage to enemy; Extreme Class allies' ATK +30% for 1 turn";
        var passive = "Transformation of Fury: ATK +120%; Extreme Class allies' Ki +3 and DEF +50%; Super Class enemies' ATK & DEF -20%";
        var stats = "HP: 12,875 (55%)/15,875 (100%)\nATK: 13,330 (55%)/16,730 (100%)\nDEF: 8,025 (55%)/10,625 (100%)";
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
        var apt = "APT: 3,169,022 (unsupported)/3,505,083 (supported)\nDefense: 70,125 (unsupported)/81,031 (supported) \nLinking Partner: [INT UR Goku Black] \nTeam: [Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga) \nBuild: 20 Additional/6 Critical";
        var blp = "[TEQ LR Goku Black (Super Saiyan Rosé) & Zamasu](https://dbz-dokkanbattle.fandom.com/wiki/Merciless_Condemnation_Goku_Black_(Super_Saiyan_Ros%C3%A9)_%26_Zamasu) - 6 links shared\n[INT UR Goku Black](https://dbz-dokkanbattle.fandom.com/wiki/Epitome_of_Sublime_Beauty_Goku_Black) - 6 links shared\n[PHY UR Goku Black](https://dbz-dokkanbattle.fandom.com/wiki/Dark_Menace_Goku_Black) - 6 links shared";
        var deets = "► 12 Ki Multiplier is 160%\n► Leader Skill info: if your team has one card of each Extreme Type ([<:eagl:729475466641276989>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_AGL)/[<:eteq:729475482105544734>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_TEQ)/[<:eint:729475498270523472>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_INT)/[<:estr:729475511100768298>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_STR)/[<:ephy:729475525155749949>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_PHY)) then you will receive the boost, meaning that the units need to be at least Z-Awakened\n► His Passive Skill and Super Attack boosts are for all Extreme Class allies, meaning that they don't need to be Z-Awakened to receive them";
        var footnotes = "";
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