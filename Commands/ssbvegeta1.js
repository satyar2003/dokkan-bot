module.exports = {
    name: 'ssbvegeta1',
    description: 'TEQ UR Resurrection F Super Saiyan God SS Vegeta',
    categories: ['[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Movie Heroes](https://dbz-dokkanbattle.fandom.com/wiki/Movie_Heroes)',
                 '[Vegeta\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Vegeta%27s_Family)',
                 '[Siblings\' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)',
                 '[Worthy Rivals](https://dbz-dokkanbattle.fandom.com/wiki/Worthy_Rivals)',
                 '[Bond of Master and Disciple](https://dbz-dokkanbattle.fandom.com/wiki/Bond_of_Master_and_Disciple)'],
    link: ['[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan) (ATK +10%)',
           '[Warrior Gods](https://dbz-dokkanbattle.fandom.com/wiki/Warrior_Gods) (ATK +10%)',
           '[Prodigies](https://dbz-dokkanbattle.fandom.com/wiki/Prodigies) (ATK +10%)',
           '[Super-God Combat](https://dbz-dokkanbattle.fandom.com/wiki/Super-God_Combat) (ATK +15%)',
           '[Resurrection \'F\'](https://dbz-dokkanbattle.fandom.com/wiki/Resurrection_%27F%27) (ATK +700)',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle) (Ki +2)',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle) (ATK +15%)'],
    status: 'complete',
    plural: 'false',
    aliases: ['Super Saiyan God SS Vegeta'],
    execute(message, args) {
        var color = 3040566;
        var name = "Definitive Strength\nSuper Saiyan God SS Vegeta";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Definitive_Strength_Super_Saiyan_God_SS_Vegeta";
        var desc = "Super TEQ UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/713638928665804810/card_1018790_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720704602529333248/MwMIMLMzAwgz8bzPwN5deRqlQT19nAAAAAElFTkSuQmCC.png";
        var leader = `"[Worthy Rivals](https://dbz-dokkanbattle.fandom.com/wiki/Worthy_Rivals)" Category Ki +3 and HP, ATK & DEF +120%; or <:teq:729467504593862728> Type Ki +3 and HP, ATK & DEF +90%`;
        var superatk = "[God Final Flash](https://youtu.be/5DERlxK6R5k?t=73): Raises ATK & DEF[1] and causes supreme damage to enemy";
        var passive = "Experience from Real Fights: ATK & DEF +20% per Ki Sphere obtained plus an additional ATK & DEF +10% if it is a <:teq:729467504593862728> Ki Sphere; randomly changes Ki Spheres of a certain Type (<:teq:729467504593862728> excluded) to <:teq:729467504593862728> Ki Spheres";
        var stats = "HP: 12,159 (55%)/14,759 (100%)\nATK 10,298 (55%)/13,698 (100%)\nDEF 7,433 (55%)/10,433 (100%)";
        const {link} = require('./ssbvegeta1.js')
        var links = "";
            for (var i = 0; i < link.length; i++)
            {
                links += link[i] + "\n";
            }
        const {categories} = require('./ssbvegeta1.js')
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 3,556,003 (unsupported)/3,992,624 (supported)\nDefense: 206,123\nLinking Partners: [AGL UR Super Saiyan God SS Goku](https://dbz-dokkanbattle.fandom.com/wiki/The_Paramount_Saiyan_Super_Saiyan_God_SS_Goku)/[PHY UR Super Saiyan God SS Goku](https://dbz-dokkanbattle.fandom.com/wiki/Decisive_Kamehameha_Super_Saiyan_God_SS_Goku)\nTeam: [Exploding Rage](https://dbz-dokkanbattle.fandom.com/wiki/Exploding_Rage)/[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)\nBuild: 6 Additional/20 Critical";
        var blp = "[AGL UR Super Saiyan God SS Goku](https://dbz-dokkanbattle.fandom.com/wiki/The_Paramount_Saiyan_Super_Saiyan_God_SS_Goku) - 6 links shared\n[PHY UR Super Saiyan God SS Goku](https://dbz-dokkanbattle.fandom.com/wiki/Decisive_Kamehameha_Super_Saiyan_God_SS_Goku) - 6 links shared\n[TEQ UR Super Saiyan God SS Goku](https://dbz-dokkanbattle.fandom.com/wiki/Cyan_Juggernaut_Super_Saiyan_God_SS_Goku) - 6 links shared";
        var deets = "► 12 Ki Multiplier is 145%";
        var footnotes = "[1]: Raises ATK & DEF by 20% for 99 turns";
        const {status} = require('./ssbvegeta1.js')
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