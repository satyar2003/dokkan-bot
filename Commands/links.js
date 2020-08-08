const Discord = require('discord.js');

module.exports = {
    name: 'links',
    execute(message, args) {
        if (args.length != 2)
        {
            message.channel.send(`${message.author} please provide two characters you would like to compare.\nProper usage of the command is \`d!links [character1] [character2\`.\nEx. \`d!links vb2 gofrieza1\``)
            return;
        }
        const {commands} = message.client;

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
        const name2 = args[1].toLowerCase();
        const command2 = commands.get(name2) || commands.find(c2 => c2.aliases && c2.aliases.includes(name2));

        /*if (name === name2)
        {
            message.channel.send(`${message.author} you must input two different characters`)
            return;
        }*/
        
        if (command.status === 'incomplete' && command2.status === 'incomplete')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: `${command.aliases[command.aliases.length - 1]} and ${command2.aliases[command2.aliases.length - 1]} are coming soon.`,
                timestamp: new Date()
            }});
        }
        else if (command.status === 'incomplete' && command2.status === 'complete')
        {
            if (command.plural === 'false')
            {
                message.channel.send({embed: {
                    color: 0,
                    author:
                    {
                        name: message.author.username,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: `${command.aliases[command.aliases.length - 1]} is coming soon.`,
                    timestamp: new Date()
                }});
            }
            else if (command.plural === 'true')
            {
                message.channel.send({embed: {
                    color: 0,
                    author:
                    {
                        name: message.author.username,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: `${command.aliases[command.aliases.length - 1]} are coming soon.`,
                    timestamp: new Date()
                }});
            }
        }
        else if (command.status === 'complete' && command2.status === 'incomplete')
        {
            if (command2.plural === 'false')
            {
                message.channel.send({embed: {
                    color: 0,
                    author:
                    {
                        name: message.author.username,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: `${command2.aliases[command2.aliases.length - 1]} is coming soon.`,
                    timestamp: new Date()
                }});
            }
            else if (command2.plural === 'true')
            {
                message.channel.send({embed: {
                    color: 0,
                    author:
                    {
                        name: message.author.username,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: `${command2.aliases[command2.aliases.length - 1]} are coming soon.`,
                    timestamp: new Date()
                }});
            }
        }
        else
        {
            var shared = [];
            var num = 0;
            var sharedLinks1 = "";
            var sharedLinks2 = "";

            for (var k = 0; k < command.link.length; k++)
            {
                for (var l = 0; l < command2.link.length; l++)
                {
                    if (command.link[k] == command2.link[l])
                    {
                        shared.push(command.link[k]);
                        num++;
                    }
                }
            }

            if (num >= 4)
            {
                for (var i = 0; i < Math.ceil(shared.length/2); i++)
                {
                    sharedLinks1 += shared[i] + "\n";
                }

                for (var i = Math.ceil(shared.length/2); i < shared.length; i++)
                {
                    sharedLinks2 += shared[i] + "\n";
                }
            }
            else
            {
                for (var i = 0; i < shared.length; i++)
                {
                    sharedLinks1 += shared[i] + "\n";
                }
            }

            if (num != 0)
            {
                if (num >= 4)
                {
                    message.channel.send({embed: {
                        color: 0,
                        title: num + " Shared Links",
                        author:
                        {
                            name: message.author.username,
                            icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                        },
                        fields: [
                            {
                                name: "Links",
                                value: sharedLinks1
                            },
                            {
                                name: "Links cont.",
                                value: sharedLinks2
                            }
                        ],
                        timestamp: new Date()
                    }});
                }
                else if (num > 1 && num < 4)
                {
                    const sharedLinks = new Discord.MessageEmbed()
                        .setColor(0)
                        .setTitle(num + " Shared Links")
                        .setAuthor(message.author.username, message.author.displayAvatarURL({format: "png", dynamic: "true"}))
                        .addField("Links", sharedLinks1)
                        .setTimestamp()
                    message.channel.send(sharedLinks);
                }
                else
                {
                    message.channel.send({embed: {
                        color: 0,
                        title: num + " Shared Links",
                        author:
                        {
                            name: message.author.username,
                            icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                        },
                        fields: [
                            {
                                name: "Links",
                                value: sharedLinks1
                            }
                        ],
                        timestamp: new Date()
                    }});
                }
            }
            else
            {
                message.channel.send({embed: {
                    color: 0,
                    author:
                    {
                        name: message.author.username,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: `**${command.aliases[command.aliases.length - 1]}** and **${command2.aliases[command2.aliases.length - 1]}** do not share any links`,
                    timestamp: new Date()
                }})
            }
        }
    }
}