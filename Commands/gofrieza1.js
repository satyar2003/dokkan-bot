module.exports = 
{
    name: 'gofrieza1',
    description: 'TEQ LR Goku & Frieza (Final Form) (Angel)',
    categories: ['[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)',
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Representatives of Universe 7](https://dbz-dokkanbattle.fandom.com/wiki/Representatives_of_Universe_7)',
                 '[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)',
                 '[Desperate Struggle](https://dbz-dokkanbattle.fandom.com/wiki/Desperate_Struggle)'],
    link: ['[Over in a Flash](https://dbz-dokkanbattle.fandom.com/wiki/Over_in_a_Flash)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK 7%',
           '[Experienced Fighters](https://dbz-dokkanbattle.fandom.com/wiki/Experienced_Fighters)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Solid Support](https://dbz-dokkanbattle.fandom.com/wiki/Solid_Support)\n ­ ­ ­ ­ Level 1: ATK +10% and enemy DEF -15%\n ­ ­ ­ ­ Level 10: ATK +15% and enemy DEF -20%',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[Tournament of Power](https://dbz-dokkanbattle.fandom.com/wiki/Tournament_of_Power)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK & DEF +7%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'true',
    aliases: ['Goku & Frieza (Final Form) (Angel)'],
    execute(message, args) 
    {
        var color = 3040566;
        var name = "Miraculous Outcome\nGoku & Frieza (Final Form) (Angel)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Miraculous_Outcome_Goku_%26_Frieza_(Final_Form)_(Angel)";
        var desc = "Super TEQ LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/715832609514586142/card_1014970_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720678582241853560/wOGY4JY327m0gAAAABJRU5ErkJggg.png";
        var leader = `"[Representatives of Universe 7](https://dbz-dokkanbattle.fandom.com/wiki/Representatives_of_Universe_7)" Category Ki +3 and HP, ATK & DEF +177%; or <:teq:729467504593862728> Type Ki +3 and HP, ATK & DEF +90%`;
        var superatk = "[Limitbreaking Assault](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_Goku_%26_Frieza_(Final_Form)_(Angel)_Super_Attack_(Limitbreaking_Assault)) (12-17 Ki): Causes colossal damage to enemy and lowers ATK[1]\n[Miracle of Universe 7](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_Goku_%26_Frieza_(Final_Form)_(Angel)_Ultra_Super_Attack_(Miracle_of_Universe_7)) (18+ Ki): Causes mega-colossal damage to enemy and lowers ATK & DEF[2]";
        var passive = `Miraculous Cooperation: ATK & DEF +77% when attacking; plus an additional ATK +77% when performing an Ultra Super Attack; plus an additional ATK +77% when the target enemy is in "ATK Down" status[3]`;
        var stats = "HP: 15,777 (55%)/18,377 (100%)\nATK: 19,777 (55%)/23,177 (100%)\nDEF: 10,777 (55%)/13,777 (100%)";
        const {link} = require(`./gofrieza1.js`)
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
        const {categories} = require(`./gofrieza1.js`)
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 8,406,707 (unsupported)/15,879,132 (supported)\nDefense: 110,709 (unsupported)/191,305 (supported) \nLinking Partner: [TEQ UR Tien](https://dbz-dokkanbattle.fandom.com/wiki/Deadly_Concentration_Tien) \nTeam: [Representatives of Universe 7](https://dbz-dokkanbattle.fandom.com/wiki/Representatives_of_Universe_7) \nBuild: 6 Additional/20 Critical";
        var blp = "[PHY UR Android #17](https://dbz-dokkanbattle.fandom.com/wiki/Last-Ditch_Battle_Android_17) - 4 links shared\n[TEQ UR Hit](https://dbz-dokkanbattle.fandom.com/wiki/Assassin%27s_Ultimate_Technique_Hit) - 4 links shared\n[TEQ UR Tien](https://dbz-dokkanbattle.fandom.com/wiki/Deadly_Concentration_Tien) - 3 links shared";
        var deets = "► 12 Ki Multiplier is 150%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► Maximum boost from their Passive Skill is ATK +231% and DEF +77%";
        var footnotes = "[1]: Lowers enemy's ATK by 20% for 3 turns\n[2]: Lowers enemy's ATK & DEF by 20% for 3 turns\n[3]: This boost will only activate if the enemy's ATK has already been lowered at the moment of attacking, either by a Support Item or by another character able to lower ATK";
        /*message.channel.send({embed: {
            color: color,
            author:
            {
                name: message.author.username,
                icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
            },
            title: "TEQ LR Goku & Frieza (Final Form) (Angel) is coming soon."
        }});*/
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
                    text: "[1]: Lowers enemy's ATK by 20% for 3 turns\n[2]: Lowers enemy's ATK & DEF by 20% for 3 turns"
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
                    text: "[3]: This boost will only activate if the enemy's ATK has already been lowered at the moment of attacking, either by a Support Item or by another character able to lower ATK"
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