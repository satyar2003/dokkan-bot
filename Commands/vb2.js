module.exports = {
    name: 'vb2',
    description: 'TEQ UR Super Saiyan God SS Vegito',
    categories: ['[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)',
                 '[Potara](https://dbz-dokkanbattle.fandom.com/wiki/Potara)',
                 '[Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga)',
                 '[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))',
                 '[Final Trump Card](https://dbz-dokkanbattle.fandom.com/wiki/Final_Trump_Card)'],
    link:   ['[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
             '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha)\n ­ ­ ­ ­ Level 1: ATK +5% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +10% when Super Attack is launched',
             '[Warrior Gods](https://dbz-dokkanbattle.fandom.com/wiki/Warrior_Gods)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +10% and ATK +5% when Super Attack is launched',
             '[Power Bestowed by God](https://dbz-dokkanbattle.fandom.com/wiki/Power_Bestowed_by_God)\n ­ ­ ­ ­ Level 1: ATK +5% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +10% when Super Attack is launched',
             '[Fused Fighter](https://dbz-dokkanbattle.fandom.com/wiki/Fused_Fighter)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
             '[Over in a Flash](https://dbz-dokkanbattle.fandom.com/wiki/Over_in_a_Flash)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK 7%',
             '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Super Saiyan God SS Vegito'],
    execute(message, args) {
        var color = 3040566;
        var name = "Strength Beyond Gods\nSuper Saiyan God SS Vegito";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Strength_Beyond_Gods_Super_Saiyan_God_SS_Vegito";
        var desc = "Super TEQ UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/715990326568812544/card_1012740_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720709484086952066/340.png";
        var leader = "[Super Type](https://dbz-dokkanbattle.fandom.com/wiki/Category:Super_Class) allies' Ki +3 and HP, ATK & DEF +120% when team includes all five Super Types";
        var superatk = "[Final Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/File:DBZ_Dokkan_Battle_Strength_Surpassing_God_-_Super_Saiyan_God_SS_Vegito_(Super_Attack)): Raises ATK & DEF[1] and causes immense damage to enemy";
        var passive = "Absolute Onslaught: Great chance to launch up to 2 additional attacks, each of which has a medium chance to become a Super Attack[2]; ATK +15% with each attack performed (up to 150%)";
        var stats = "HP: 14,495 (55%)/17,095 (100%)\nATK: 13,708 (55%)/17,108 (100%)\nDEF: 6,743 (55%)/9,743 (100%)";
        const {link} = require('./vb2.js')
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
        const {categories} = require('./vb2.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 4,563,239 (unsupported)/7,084,254 (supported)\nDefense: 69,605 (unsupported)/99,745 (supported) \nLinking Partner: [PHY UR Super Saiyan Trunks (Future)](https://dbz-dokkanbattle.fandom.com/wiki/A_Will_Beyond_Time_Super_Saiyan_Trunks_(Future)) \nTeam: [Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga) \nBuild: 15 Additional/11 Critical";
        var blp = "[AGL UR Super Saiyan God Goku](https://dbz-dokkanbattle.fandom.com/wiki/Flaring_Battle_Impulse_Super_Saiyan_God_Goku) - 5 links shared\n[AGL UR Super Saiyan God SS Goku](https://dbz-dokkanbattle.fandom.com/wiki/Next-Level_Strike_Super_Saiyan_God_SS_Goku) - 5 links shared\n[STR UR Super Saiyan God SS Goku (Kaioken)](https://dbz-dokkanbattle.fandom.com/wiki/Final_Super_Power_Super_Saiyan_God_SS_Goku_(Kaioken)) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 160%\n► If your team has one card of each Super Type ([<:sagl:729475789170540545>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Super_AGL)/[<:steq:729475811966713918>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Super_TEQ)/[<:sint:729475830794682449>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Super_INT)/[<:sstr:729475907768811591>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Super_STR)/[<:sphy:729475848196980736>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Super_PHY)) those allies will receive the boost, meaning that they need to be at least Z-Awakened";
        var footnotes = "[1]: Raises ATK & DEF by 20% for 99 turns\n[2]: 70% chance to launch up to 2 additional attacks (first one is guaranteed), each of which has a 25% chance to become a Super Attack";
        /*message.channel.send({embed: {
            color: color,
            author:
            {
                name: message.author.username,
                icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
            },
            title: "Super Saiyan God SS Vegito is coming soon."
        }})*/
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
                    text: "[1]: Raises ATK & DEF by 20% for 99 turns"
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
                    text: "[2]: 70% chance to launch up to 2 additional attacks (first one is guaranteed), each of which has a 25% chance to become a Super Attack"
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