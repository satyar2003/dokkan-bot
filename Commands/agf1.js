const Discord = require('discord.js')

module.exports = {
    name: 'agf1',
    description: 'INT UR Golden Frieza (Angel)',
    categories: ['[Resurrected Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Resurrected_Warriors)',
                 '[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)',
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Representatives of Universe 7](https://dbz-dokkanbattle.fandom.com/wiki/Representatives_of_Universe_7)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Wicked Bloodline](https://dbz-dokkanbattle.fandom.com/wiki/Wicked_Bloodline)',
                 '[Otherworld Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Otherworld_Warriors)'],
    link: ['[Prodigies](https://dbz-dokkanbattle.fandom.com/wiki/Prodigies)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Universe\'s Most Malevolent](https://dbz-dokkanbattle.fandom.com/wiki/Universe%27s_Most_Malevolent)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Revival](https://dbz-dokkanbattle.fandom.com/wiki/Revival)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2; ATK & DEF +5% and recover 5% HP when HP is 50% or below',
           '[Strongest Clan in Space](https://dbz-dokkanbattle.fandom.com/wiki/Strongest_Clan_in_Space)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and enemy DEF -10%',
           '[Brutal Beatdown](https://dbz-dokkanbattle.fandom.com/wiki/Brutal_Beatdown)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Tournament of Power](https://dbz-dokkanbattle.fandom.com/wiki/Tournament_of_Power)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK & DEF +7%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Golden Frieza (Angel)'],
    execute(message, args) {
        const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./agf1.js')
        const {categories} = require('./agf1.js')
        const {status} = require('./agf1.js')
        const {plural} = require('./agf1.js')
        const {aliases} = require('./agf1.js')
        var color = 7028604;
        var name = "Emperor's True Splendor\nGolden Frieza (Angel)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Emperor%27s_True_Splendor_Golden_Frieza_(Angel)";
        var desc = "Extreme INT UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/726904550149193768/card_1012030_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/726904593526685877/340.png";
        var leader = "\"[Resurrected Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Resurrected_Warriors)\" Category Ki +3, HP +130% and ATK & DEF +170%; or [<:int:729468835819946026>](https://dbz-dokkanbattle.fandom.com/wiki/Category:INT) Type Ki +3 and HP, ATK & DEF +50%";
        var superatk = "[Great Death Beam](https://dbz-dokkanbattle.fandom.com/wiki/File:(Super_Attack)_Golden_Frieza_(Angel)_-_True_Radiance_of_the_Emperor): Causes immense damage to enemy and greatly lowers DEF[1]";
        var passive = "Proof of True Evil: ATK +150% and DEF +50%; Super Class allies' and enemies' ATK -15%";
        var stats = "HP: 13,020 (55%)/16,020 (100%)\nATK: 12,208 (55%)/15,208 (100%)\nDEF: 8,605 (55%)/11,605 (100%)";
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
        var apt = "APT: 3,492,449 (unsupported)/4,090,357 (supported)\nDefense: 80,422 (unsupported)/96,221 (supported) \nLinking Partner: [AGL UR Golden Frieza](https://dbz-dokkanbattle.fandom.com/wiki/Proof_of_Resurrection_Golden_Frieza) \nTeam: [Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)/[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost) \nBuild: 6 Additional/15 Critical";
        var blp = "[AGL SSR Frieza (Final Form) (Angel)](https://dbz-dokkanbattle.fandom.com/wiki/Shady_Business_Frieza_(Final_Form)_(Angel)) - 6 links shared\n[AGL UR Golden Frieza](https://dbz-dokkanbattle.fandom.com/wiki/Proof_of_Resurrection_Golden_Frieza) - 5 links shared\n[INT UR Golden Frieza](https://dbz-dokkanbattle.fandom.com/wiki/Golden_Malice_Golden_Frieza) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 150%\n► [STR SSR Golden Frieza (Angel)](https://dbz-dokkanbattle.fandom.com/wiki/The_10th_Warrior_from_Universe_7_Golden_Frieza_(Angel)) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "[1]: Lowers enemy's DEF by 50% for 3 turns";
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
            var sub = args[0]

            switch (sub)
            {
                case undefined:
                    const fullCard = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addFields(
                            {name: "Leader Skill", value: leader},
                            {name: "Super Attack", value: superatk},
                            {name: "Passive Skill", value: passive},
                            {name: "Stats", value: stats},
                            {name: "Links", value: links},
                            {name: "Links cont.", value: links2},
                            {name: "Categories", value: cats},
                            {name: "Attack Per Turn", value: apt},
                            {name: "Best Linking Partners", value: blp},
                            {name: "Details", value: deets}
                        )
                        .setImage(character)
                        .setFooter(footnotes)
                        .setTimestamp()
                    message.channel.send(fullCard)
                    break;

                case "leader":
                    const leaderSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Leader Skill", leader)
                        .setTimestamp()
                    message.channel.send(leaderSkill)
                    break;

                case "super":
                    const superAttack = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Super Attack", superatk)
                        .setTimestamp()
                    message.channel.send(superAttack)
                    break;

                case "passive":
                    const passiveSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Passive Skill", passive)
                        .setTimestamp()
                    message.channel.send(passiveSkill)
                    break;

                case "stats":
                    const unitStats = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Stats", stats)
                        .setTimestamp()
                    message.channel.send(unitStats)
                    break;

                case "links":
                    const linkSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Links", links)
                        .addField("Links cont.", links2)
                        .setTimestamp()
                    message.channel.send(linkSkill)
                    break;

                case "categories":
                    const category = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Categories", cats)
                        .setTimestamp()
                    message.channel.send(category)
                    break;

                case "apt":
                    const attackPerTurn = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Attack Per Turn", apt)
                        .setTimestamp()
                    message.channel.send(attackPerTurn)
                    break;

                case "partners":
                    const bestLinkingPartners = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Best Linking Partners", blp)
                        .setTimestamp()
                    message.channel.send(bestLinkingPartners)
                    break;

                case "details":
                    const unitDetails = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Details", deets)
                        .setTimestamp()
                    message.channel.send(unitDetails)
                    break;

                case "art":
                    const cardArt = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addImage(character)
                        .setTimestamp()
                    message.channel.send(cardArt)
                    break;

                default:
                    message.channel.send(`${message.author} that is not a valid sub-command. You can use \`d!help\` to find out all possible sub-commands.`)
            }
        }
    }
}