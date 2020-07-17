module.exports = {
    name: 'kandc1',
    description: 'AGL LR Super Saiyan 2 Caulifla & Super Saiyan 2 Kale',
    categories: ['[Peppy Gals](https://dbz-dokkanbattle.fandom.com/wiki/Peppy_Gals)',
                 '[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)',
                 '[Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6)',
                 '[Super Saiyan 2](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan_2)',
                 '[Rapid Growth](https://dbz-dokkanbattle.fandom.com/wiki/Rapid_Growth)'],
    link: ['[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan) (ATK +10%)',
           '[Battlefield Diva](https://dbz-dokkanbattle.fandom.com/wiki/Battlefield_Diva) (Ki +2)',
           '[Warriors of Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Warriors_of_Universe_6) (Ki +2)',
           '[Tournament of Power](https://dbz-dokkanbattle.fandom.com/wiki/Tournament_of_Power) (Ki +3)',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle) (Ki +2)',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle) (ATK +15%)',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power) (ATK +5000 when Super Attack is launched)'],
    status: 'complete',
    plural: 'true',
    aliases: ['AGL LR Super Saiyan 2 Caulifla & Super Saiyan 2 Kale'],
    execute(message, args) {
        var color = 2317729;
        var name = "Two Makes the Strongest of All Universes\nSuper Saiyan 2 Caulifla & Super Saiyan 2 Kale";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Two_Makes_the_Strongest_of_All_Universes_Super_Saiyan_2_Caulifla_%26_Super_Saiyan_2_Kale";
        var desc = "Super AGL LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/717556812387188837/card_1016840_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720679944027635782/0Swf57BJIAAAAAElFTkSuQmCC.png";
        var leader = "\"[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)\" Category Ki +4 and HP, ATK & DEF +130%; or <:sagl:729475789170540545> Type Ki +4 and HP, ATK & DEF +100%";
        var superatk = "[Seismic Combat](https://www.youtube.com/watch?v=FHm4Km_DgPg) (12-17 Ki): Raises DEF[1] and causes colossal damage to enemy\n[Limit Break Blaster](https://youtu.be/FHm4Km_DgPg?t=18) (18+ Ki): Raises DEF[1] and causes mega-colossal damage to enemy";
        var passive = "Let's Go Even Further Together!: ATK & DEF +66% and launches an additional attack; Ki +1 (up to +6) and chance of evading enemy's attack (including Super Attack) +6% (up to 66%) with each attack performed; ATK +10% per \"[Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6)\", \"[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)\" or \"[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)\" Category ally on the team; launches an additional Super Attack when there is a \"[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)\" or \"[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)\" Category enemy";
        var stats = "HP: 20,175 (55%)/22,775 (100%)\nATK: 17,020 (55%)/ 20,020 (100%)\nDEF: 11,763 (55%)/15,163 (100%)";
        const {link} = require('./kandc1.js')
        var links = "";
            for (var i = 0; i < link.length; i++)
            {
                links += link[i] + "\n";
            }
        const {categories} = require('./kandc1.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 7,891,824 (unsupported)/8,137,252 (supported)\nDefense: 171,575 (unsupported)/181,911 (supported) \nLinking Partner: [AGL LR Super Saiyan 4 Goku](https://dbz-dokkanbattle.fandom.com/wiki/Apex_of_Supreme_Saiyan_Power_Super_Saiyan_4_Goku) \nTeam: [Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces) \nBuild: 11 Additional/15 Critical";
        var blp = "[AGL UR Super Saiyan 2 Caulifla](https://dbz-dokkanbattle.fandom.com/wiki/Boundless_Potential_Super_Saiyan_2_Caulifla) - 5 links shared\n[INT UR Super Saiyan 2 Kale](https://dbz-dokkanbattle.fandom.com/wiki/Well-Honed_Body_and_Mind_Super_Saiyan_2_Kale) - 5 links shared\n[AGL UR Super Saiyan God SS Vegeta](https://dbz-dokkanbattle.fandom.com/wiki/Observance_of_Pride_Super_Saiyan_God_SS_Vegeta) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 150%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► Allies with two or more of the required Categories, including themselves, will give them a higher ATK boost than just +10% (up to +30% per ally)\n► They will launch 2 additional Super Attacks when facing both required Categories at once";
        var footnotes = "[1]: Raises DEF by 30% for 99 turns";
        const {status} = require('./kandc1.js')
        if (status === 'incomplete')
        {
            message.channel.send({embed: {
                color: color,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Super Saiyan 2 Caulifla & Super Saiyan 2 Kale are coming soon."
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