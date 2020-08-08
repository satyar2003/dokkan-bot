module.exports = {
    name: 'jeice1',
    description: 'STR UR Jeice',
    categories: ['[Planet Namek Saga](https://dbz-dokkanbattle.fandom.com/wiki/Planet_Namek_Saga)',
                 '[Ginyu Force](https://dbz-dokkanbattle.fandom.com/wiki/Ginyu_Force)',
                 '[Dragon Ball Seekers](https://dbz-dokkanbattle.fandom.com/wiki/Dragon_Ball_Seekers)',
                 '[Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)',
                 '[Special Pose](https://dbz-dokkanbattle.fandom.com/wiki/Special_Pose)'],
    link: ['[The Ginyu Force](https://dbz-dokkanbattle.fandom.com/wiki/The_Ginyu_Force)\n ­ ­ ­ ­ Level 1: ATK +25%\n ­ ­ ­ ­ Level 10: ATK +25% and damage received -5%',
           '[Signature Pose](https://dbz-dokkanbattle.fandom.com/wiki/Signature_Pose)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +3 and ATK +7%',
           '[Tag Team of Terror](https://dbz-dokkanbattle.fandom.com/wiki/Tag_Team_of_Terror)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Brainiacs](https://dbz-dokkanbattle.fandom.com/wiki/Brainiacs)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: ATK & DEF +15%',
           '[Flee](https://dbz-dokkanbattle.fandom.com/wiki/Flee)\n ­ ­ ­ ­ Level 1: Ki +1 when HP is 30% or below\n ­ ­ ­ ­ Level 10: Ki +2 and chance of evading +10% when HP is 50% or less',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Jeice'],
    execute(message, args) {
        const {link} = require('./jeice1.js')
        const {categories} = require('./jeice1.js')
        const {status} = require('./jeice1.js')
        const {plural} = require('./jeice1.js')
        const {aliases} = require('./jeice1.js')
        var color = 8990259;
        var name = "Pride of the Force\nJeice";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Pride_of_the_Force_Jeice";
        var desc = "Extreme STR UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/726164394131587222/card_1013030_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/726164416172785724/340.png";
        var leader = "<:str:729468929293942894> Type Ki +2 and HP, ATK & DEF +30%";
        var superatk = "[Crusher Ball](https://dbz-dokkanbattle.fandom.com/wiki/File:DBZ_Dokkan_Battle_Dignity_of_the_Ginyu_Force_-_Jeice_(Super_Attack)): Causes supreme damage to enemy and raises allies' ATK by 20% for 1 turn";
        var passive = "Target Acquired: Extreme Class allies' Ki +2 and ATK +20%; foresees enemy's Super Attack";
        var stats = "HP: 8,986 (55%)/11,386 (100%)\nATK: 7,730 (55%)/10,130 (100%)\nDEF: 4,668 (55%)/7,068 (100%)";
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
        var apt = "APT: 687,708 (unsupported)/864,844 (supported)\nDefense: 31,099 (unsupported)/36,748 (supported) \nLinking Partner: [AGL UR Burter](https://dbz-dokkanbattle.fandom.com/wiki/Pride_of_the_Fastest_One_Burter) \nTeam: [Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)/[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost) \nBuild: 7 Additional/8 Critical";
        var blp = "[AGL UR Burter](https://dbz-dokkanbattle.fandom.com/wiki/Pride_of_the_Fastest_One_Burter) - 4 links shared\n[TEQ UR Guldo](https://dbz-dokkanbattle.fandom.com/wiki/Brutal_Bind_Guldo) - 4 links shared\n[INT UR Captain Ginyu](https://dbz-dokkanbattle.fandom.com/wiki/Courageous_Clash_Captain_Ginyu) - 3 links shared";
        var deets = "► 12 Ki Multiplier is 135%\n► SA 10 increases [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 20%\n► Activating 100% of Jeice's Hidden Potential helps unlock a copy of [Ginyu (Goku) (Ginyu Force)](https://dbz-dokkanbattle.fandom.com/wiki/Ginyu_Force_Reborn_Ginyu_(Goku)_(Ginyu_Force))\n► Can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack of other [Jeice](https://dbz-dokkanbattle.fandom.com/wiki/Jeice_(disambiguation)#JEICE) cards";
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