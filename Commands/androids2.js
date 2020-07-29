const Discord = require('discord.js');

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
        const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        var color = 7164715;
        var name = "The Androids' Journey\nAndroid #16";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/The_Androids%27_Journey_Androids_17_%26_18/Android_16#Android%20#16";
        var desc = "Extreme PHY LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/712523997337616384/card_4018040_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720526625464254464/D2KjZDyIY0AAAAASUVORK5CYII.png";
        var leader = `"[Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)" Category Ki +4 and HP, ATK, & DEF +150%; or [<:ephy:729475525155749949>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_PHY) Type Ki +4 and HP, ATK, & DEF +100%`;
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
            var sub = args[0];

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
                            {name: "Categories", value: cats},
                            {name: "Attack Per Turn", value: apt},
                            {name: "Best Linking Partners", value: blp},
                            {name: "Details", value: deets},
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
                        .setFooter("[1]: Raises DEF by 50% for 1 turn\n[2]: Lowers enemy's ATK & DEF by 20% for 3 turns\n[3]: Raise SA Multiplier by 50% for 1 turn")
                        .setTimestamp()
                    message.channel.send(superAttack)
                    break;

                case "passive":
                    const passiveSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTimestamp(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Passive Skill", passive)
                        .setFooter("[4]: 50% chance to perform a critical hit")
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
                    const bestLinkingParnters = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Best Linking Partners", partners)
                        .setTimestamp()
                    message.channel.send(bestLinkingParnters)
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
                        .setImage(character)
                        .setTimestamp()
                    message.channel.send(cardArt)
                    break;

                default:
                    message.channel.send(`${message.author} that is not a valid sub-command. You can use \`d!help\` to find out all possible sub-commands.`)
            }
        }
    }
}