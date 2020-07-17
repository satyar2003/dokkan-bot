module.exports = {
    name: 'androids2',
    description: 'PHY LR Androids after the active skill',
    categories: ['[Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)',
                 '[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)',
                 '[Siblings\' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)',
                 '[Androids/Cell Saga](https://dbz-dokkanbattle.fandom.com/wiki/Androids-Cell_Saga)',
                 '[Target: Goku](https://dbz-dokkanbattle.fandom.com/wiki/Target:_Goku)'],
    link: ['[Infinite Energy](https://dbz-dokkanbattle.fandom.com/wiki/Infinite_Energy) (Ki +2)',
           '[Android Assault](https://dbz-dokkanbattle.fandom.com/wiki/Android_Assault) (DEF +1000)',
           '[Solid Support](https://dbz-dokkanbattle.fandom.com/wiki/Solid_Support) (ATK +10%, attacked enemy\'s DEF -15%)',
           '[Tough as Nails](https://dbz-dokkanbattle.fandom.com/wiki/Tough_as_Nails) (Defense +1500)',
           '[Soul vs Soul](https://dbz-dokkanbattle.fandom.com/wiki/Soul_vs_Soul) (Weakens Regeneration and Ki +1)',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle) (ATK +15%)',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power) (ATK +5000 when Super Attack is launched)'],
    status: 'complete',
    plural: 'false',
    aliases: ['Android #16'],
    execute(message, args) {
        var color = 7164715;
        var name = "The Androids' Journey\nAndroid #16";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/The_Androids%27_Journey_Androids_17_%26_18/Android_16#Android%20#16";
        var desc = "Extreme PHY LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/712523997337616384/card_4018040_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720526625464254464/D2KjZDyIY0AAAAASUVORK5CYII.png";
        var leader = `"[Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)" Category Ki +4 and HP, ATK, & DEF +150%; or <:ephy:729475525155749949> Type Ki +4 and HP, ATK, & DEF +100%`;
        var superatk = "[Hell Flash](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_LR_PHY_Androids_Animations) (12-17 Ki): Greatly raises DEF for 1 turn[1], causes colossal damage to enemy and lowers ATK & DEF[2]\n[Triple Annihilation Max](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_LR_PHY_Androids_Animations) (18+ Ki): Greatly raises ATK for 1 turn[3] and cause mega-colossal damage to enemy while sacrificing 6% HP";
        var passive = `Mysterious Power Revealed: Ki +6 and ATK & DEF +200%; high chance[4] of performing a critical hit; launches an additional Super Attack when there is an "[Androids/Cell Saga](https://dbz-dokkanbattle.fandom.com/wiki/Androids-Cell_Saga)" Category enemy`;
        var stats = "HP: 23,363 (55%)/26,763 (100%)\nATK: 17,190 (55%)/20,190 (100%)\nDEF: 9,956 (55%)/12,566 (100%)";
        const {link} = require('./androids2.js')
        var links = "";
            for (var i = 0; i < link.length; i++)
            {
                links += link[i] + "\n";
            }
        const {categories} = require('./androids2.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 8,419,104\nDefense: 182,977 (pre-super)\nLinking Partner: [PHY Cell (Perfect Form) & Cell Jr.](https://dbz-dokkanbattle.fandom.com/wiki/The_Deadly_Cell_Games_Cell_(Perfect_Form)_%26_Cell_Jr.)\nTeam: [Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)\nBuild 11 Additional/15 Critical";
        var blp = "[INT UR Android #16](https://dbz-dokkanbattle.fandom.com/wiki/Newly_Acquired_Chance_Android_16) - 5 links shared\n[PHY UR Android #17](https://dbz-dokkanbattle.fandom.com/wiki/Last-Ditch_Battle_Android_17) - 4 links shared\n[STR UR Android #17](https://dbz-dokkanbattle.fandom.com/wiki/Concentrated_Power_Android_17) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 145%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%";
        var footnotes = `[1]: Raises DEF by 50% for 1 turn\n[2]: Lowers enemy's ATK & DEF by 20% for 3 turns\n[3]: Raise SA Multiplier by 50% for 1 turn\n[4]: 50% chance to perform a critical hit`;
        const {status} = require('./androids2.js')
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
                        text: "[1]: Raises DEF by 50% for 1 turn\n[2]: Lowers enemy's ATK & DEF by 20% for 3 turns\n[3]: Raise SA Multiplier by 50% for 1 turn"
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
                        text: "[4]: 50% chance to perform a critical hit"
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