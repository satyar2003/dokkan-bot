module.exports = {
    name: 'fpfrieza1',
    description: 'PHY UR Frieza (Full Power) without EZA',
    categories: ['', ''],
    link: ['', ''],
    status: 'incomplete',
    plural: 'false',
    aliases: ['Frieza (Full Power)'],
    execute(message, args) {
        const {link} = require('./fpfrieza1.js')
        const {categories} = require('./fpfrieza1.js')
        const {status} = require('./fpfrieza1.js')
        const {plural} = require('./fpfrieza1.js')
        const {aliases} = require('./fpfrieza1.js')
        var color = 7164715;
        var name = "";
        var url = "";
        var desc = "";
        var circle = "";
        var character = "";
        var leader = "";
        var superatk = "";
        var passive = "";
        var stats = "HP: (55%)/ (100%)\nATK: (55%)/ (100%)\nDEF: (55%)/ (100%)";
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
        var apt = "APT: (unsupported)/ (supported)\nDefense: (unsupported)/ (supported) \nLinking Partner: [] \nTeam: [] \nBuild: Additional/ Critical";
        var blp = "[] - links shared\n[] - links shared\n[] - links shared";
        var deets = "-";
        var footnotes = "[1]: ";
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
            var length = args.length;
            var sub = args[0];
            switch (true)
            {
                case length == 0:
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
                    break;
                    
                case sub === "leader":
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
                    break;

                case sub === "super":
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
                    break;

                case sub === "passive":
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
                    break;

                case sub === "stats":
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
                    break;

                case sub === "links":
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
                    break;

                case sub === "categories":
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
                    break;

                case sub === "apt":
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
                    break;

                case sub === "partners":
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
                    break;

                case sub === "details":
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
                    break;

                case sub === "art":
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
                    break;

                default:
                    message.channel.send(`${message.author} that is not a valid sub-command. You can use \`d!help\` to find out all possible sub-commands.`)
                    break;
            }
        }
    }
}