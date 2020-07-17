module.exports = {
    name: 'androids1',
    description: 'PHY LR Androids before their active skill is used',
    categories: ['[Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)',
                 '[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)',
                 '[Siblings\' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)',
                 '[Androids/Cell Saga](https://dbz-dokkanbattle.fandom.com/wiki/Androids-Cell_Saga)',
                 '[Target: Goku](https://dbz-dokkanbattle.fandom.com/wiki/Target:_Goku)'],
    link: ['[Infinite Energy](https://dbz-dokkanbattle.fandom.com/wiki/Infinite_Energy) (Ki +2)',
           '[Android Assault](https://dbz-dokkanbattle.fandom.com/wiki/Android_Assault) (DEF +1000)',
           '[Solid Support](https://dbz-dokkanbattle.fandom.com/wiki/Solid_Support) (ATK +10%, attacked enemy\'s DEF -15%)',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed) (Ki +2)',
           '[Soul vs Soul](https://dbz-dokkanbattle.fandom.com/wiki/Soul_vs_Soul) (Weakens Regeneration and Ki +1)',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle) (ATK +15%)',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power) (ATK +5000 when Super Attack is launched)'],
    status: 'complete',
    plural: 'true',
    aliases: ['Androids #17 & #18/Android #16'],
    execute(message, args) {
        var color = 7164715;
        var name = "The Androids' Journey\nAndroids #17 & #18/Android #16";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/The_Androids%27_Journey_Androids_17_%26_18/Android_16#Androids%20#17%20&%20#18";
        var desc = "Extreme PHY LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/712485083084488754/card_1018030_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720523257434079252/J8WYMs4T0MwAAAABJRU5ErkJggg.png";
        var leader = `"[Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)" Category Ki +4 and HP, ATK, & DEF +150%; or <:ephy:729475525155749949> Type Ki +4 and HP, ATK, & DEF +100%`;
        var superatk = "[Bloody Crash](https://www.youtube.com/watch?v=A45HpbmJ6g0) (12-17 Ki): Causes colossal damage to enemy and lowers ATK & DEF[1]\n[Triple Annihilation](https://www.youtube.com/watch?v=A45HpbmJ6g0) (18+ Ki): Causes mega-colossal damage to enemy and lowers ATK & DEF[1]";
        var passive = `The Androids' True Might: Ki +1 and ATK & DEF +78%; medium chance[2] of evading enemy's attack (including Super Attack) when HP is 66% or more; "[Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)" Category allies' Ki +2 and ATK +40%`;
        var active = "[Exchange](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_LR_PHY_Androids_Animations): Exchange with Android #16 for 3 turns; can be activated when HP is 66% or less with another 2 or more \"[Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)\" Category allies on the team, or can be activated at any time when facing an enemy whose name includes \"[Cell](https://dbz-dokkanbattle.fandom.com/wiki/Cell_(disambiguation))\" (characters such as Cell Jr. excluded) (once only)"
        var stats = "HP: 23,363 (55%)/2,6763 (100%)\nATK: 17,190 (55%)/20,190 (100%)\nDEF: 9,956 (55%)/12,566 (100%)";
        const {link} = require('./androids1.js')
        var links = "";
            for (var i = 0; i < link.length; i++)
            {
                links += link[i] + "\n";
            }
        const {categories} = require('./androids1.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 4,184,668\nDefense: 114,472\nLinking Partner: [PHY Cell (Perfect Form) & Cell Jr.](https://dbz-dokkanbattle.fandom.com/wiki/The_Deadly_Cell_Games_Cell_(Perfect_Form)_%26_Cell_Jr.)\nTeam: [Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)\nBuild: 11 Additional/15 Critical";
        var blp = "[PHY UR Android #17](https://dbz-dokkanbattle.fandom.com/wiki/Last-Ditch_Battle_Android_17) - 5 links shared\n[INT UR Android #16](https://dbz-dokkanbattle.fandom.com/wiki/Newly_Acquired_Chance_Android_16) - 4 links shared\n[TEQ LR Goku & Frieza (Final Form) (Angel)](https://dbz-dokkanbattle.fandom.com/wiki/Miraculous_Outcome_Goku_%26_Frieza_(Final_Form)_(Angel)) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 145%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► Their Active Skill can activate when facing any enemy with \"Cell\" in their name, this includes Cell (1st Form), Cell (2nd Form), Cell (Perfect Form), etc.\n ­ ­ ­ ­ ­▫ As mentioned in the description, this does not include enemies named \"Cell Jr.\"";
        var footnotes = "[1]: Lowers enemy's ATK & DEF by 20% for 3 turns\n[2]: 25% chance to evade enemy's attack";
        const {status} = require('./androids1.js')
        if (status === 'incomplete')
        {
            message.channel.send({embed: {
                color: color,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Androids #17 & #18/Android #16 are coming soon."
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
                        //url: "https://media.discordapp.net/attachments/712036120191434793/720498874879311872/card_1018030_bg.png",
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
                        text: "[1]: Lowers enemy's ATK & DEF by 20% for 3 turns"
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
                        text: "[2]: 25% chance to evade enemy's attack"
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