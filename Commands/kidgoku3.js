module.exports = {
    name: 'kidgoku3',
    description: 'STR UR Goku (Youth)',
    categories: ['[Low-Class Warrior](https://dbz-dokkanbattle.fandom.com/wiki/Low-Class_Warrior)',
                 '[World Tournament](https://dbz-dokkanbattle.fandom.com/wiki/World_Tournament)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Dragon Ball Seekers](https://dbz-dokkanbattle.fandom.com/wiki/Dragon_Ball_Seekers)',
                 '[Goku\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)',
                 '[Youth](https://dbz-dokkanbattle.fandom.com/wiki/Youth)',
                 '[DB Saga](https://dbz-dokkanbattle.fandom.com/wiki/DB_Saga)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))',
                 '[Bond of Master and Disciple](https://dbz-dokkanbattle.fandom.com/wiki/Bond_of_Master_and_Disciple)'],
    link: ['[All in the Family](https://dbz-dokkanbattle.fandom.com/wiki/All_in_the_Family) (DEF +15%)',
           '[Turtle School](https://dbz-dokkanbattle.fandom.com/wiki/Turtle_School) (ATK +500, DEF +500)',
           '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha) (ATK +2500 when Super Attack is launched)',
           '[The Incredible Adventure](https://dbz-dokkanbattle.fandom.com/wiki/The_Incredible_Adventure) (Ki +2)',
           '[Guidance of the Dragon Balls](https://dbz-dokkanbattle.fandom.com/wiki/Guidance_of_the_Dragon_Balls) (ATK +20%)',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit) (Ki +2)'],
    status: 'complete',
    plural: 'false',
    aliases: ['Goku (Youth)'],
    execute(message, args) {
        const {link} = require('./kidgoku3.js')
        const {categories} = require('./kidgoku3.js')
        const {status} = require('./kidgoku3.js')
        const {plural} = require('./kidgoku3.js')
        const {aliases} = require('./kidgoku3.js')
        var color = 8990259;
        var name = "Endless Challenge\nGoku (Youth)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Endless_Challenge_Goku_(Youth)";
        var desc = "Super STR UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/727228541850091550/card_1013320_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/727228735425740841/AQxebr9UijsAAAAAElFTkSuQmCC.png";
        var leader = "All Types Ki +2 and HP, ATK & DEF +50%";
        var superatk = "[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/File:An_Exciting_Adventure_Goku_(Youth)_Super_ATK): Causes supreme damage to enemy";
        var passive = "Major Onslaught: ATK & DEF +80%; plus an additional ATK +80% and DEF +40% when facing 2 or more enemies";
        var stats = "HP: 11,956 (55%)/13,756 (100%)\nATK: 8,740 (55%)/10,780 (100%)\nDEF: 5,994 (55%)/7,554 (100%)";
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
        var apt = "APT: 1,232,209 (unsupported)/1,382,275 (supported)\nDefense: 70,177 (unsupported)/74,000 (supported) \nLinking Partner: [AGL UR Goku (Youth) (Great Ape)](https://dbz-dokkanbattle.fandom.com/wiki/Full-On_Strike_Goku_(Youth)_(Giant_Ape)) \nTeam: [DB Saga](https://dbz-dokkanbattle.fandom.com/wiki/DB_Saga)/[Youth](https://dbz-dokkanbattle.fandom.com/wiki/Youth) \nBuild: 6 Additional/20 Critical";
        var blp = "[AGL UR Goku (Youth) (Giant Ape)](https://dbz-dokkanbattle.fandom.com/wiki/Full-On_Strike_Goku_(Youth)_(Giant_Ape)) - 5 links shared\n[AGL SSR Grandpa Gohan](https://dbz-dokkanbattle.fandom.com/wiki/Masked_Master_Grandpa_Gohan) - 5 links shared\n[PHY UR Goku (Youth) (Giant Ape)](https://dbz-dokkanbattle.fandom.com/wiki/Outcome_of_Hardship_Goku_(Youth)_(Giant_Ape)) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► [STR SSR Goku (Youth)](https://dbz-dokkanbattle.fandom.com/wiki/Penguin_Village_Adventure_Goku_(Youth)), [PHY SSR Goku (Youth)](https://dbz-dokkanbattle.fandom.com/wiki/Braveness_and_Vigor_in_Action_Goku_(Youth)), [AGL SR Goku (Youth)](https://dbz-dokkanbattle.fandom.com/wiki/The_Adventure_Begins_Goku_(Youth)), & [PHY SR Goku (Youth)](https://dbz-dokkanbattle.fandom.com/wiki/Into_the_Big_Wide_World_Goku_(Youth)) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
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