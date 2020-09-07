const Discord = require('discord.js')

module.exports = {
    name: 'androids1',
    description: 'PHY LR Androids before their active skill is used',
    categories: ['[Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)',
                 '[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)',
                 '[Siblings\' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)',
                 '[Androids/Cell Saga](https://dbz-dokkanbattle.fandom.com/wiki/Androids-Cell_Saga)',
                 '[Target: Goku](https://dbz-dokkanbattle.fandom.com/wiki/Target:_Goku)'],
    link: ['[Infinite Energy](https://dbz-dokkanbattle.fandom.com/wiki/Infinite_Energy)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5% and chance to perform a critical hit +5%',
           '[Android Assault](https://dbz-dokkanbattle.fandom.com/wiki/Android_Assault)\n ­ ­ ­ ­ Level 1: DEF +10%\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +20%',
           '[Solid Support](https://dbz-dokkanbattle.fandom.com/wiki/Solid_Support)\n ­ ­ ­ ­ Level 1: ATK +10% and all enemies\' DEF -15%\n ­ ­ ­ ­ Level 10: ATK +15% and all enemies\' DEF -20%',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[Soul vs Soul](https://dbz-dokkanbattle.fandom.com/wiki/Soul_vs_Soul)\n ­ ­ ­ ­ Level 1: Weakens "Regeneration" and Ki +1\n ­ ­ ­ ­ Level 10: Weakens "Regeneration" and Ki +1, ATK & DEF +5%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'true',
    aliases: ['Androids #17 & #18/Android #16'],
    execute(message, args) {
        const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        var color = 7164715;
        var name = "The Androids' Journey\nAndroids #17 & #18/Android #16";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/The_Androids%27_Journey_Androids_17_%26_18/Android_16#Androids%20#17%20&%20#18";
        var desc = "Extreme PHY LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/712485083084488754/card_1018030_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720523257434079252/J8WYMs4T0MwAAAABJRU5ErkJggg.png";
        var leader = `"[Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)" Category Ki +4 and HP, ATK, & DEF +150%; or [<:ephy:729475525155749949>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_PHY) Type Ki +4 and HP, ATK, & DEF +100%`;
        var superatk = "[Bloody Crash](https://www.youtube.com/watch?v=A45HpbmJ6g0) (12-17 Ki): Causes colossal damage to enemy and lowers ATK & DEF[1]\n[Triple Annihilation](https://www.youtube.com/watch?v=A45HpbmJ6g0) (18+ Ki): Causes mega-colossal damage to enemy and lowers ATK & DEF[1]";
        var passive = `The Androids' True Might: Ki +1 and ATK & DEF +78%; medium chance[2] of evading enemy's attack (including Super Attack) when HP is 66% or more; "[Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)" Category allies' Ki +2 and ATK +40%`;
        var active = "[Exchange](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_LR_PHY_Androids_Animations): Exchange with Android #16 for 3 turns; can be activated when HP is 66% or less with another 2 or more \"[Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)\" Category allies on the team, or can be activated at any time when facing an enemy whose name includes \"[Cell](https://dbz-dokkanbattle.fandom.com/wiki/Cell_(disambiguation))\" (characters such as Cell Jr. excluded) (once only)"
        var stats = "HP: 23,363 (55%)/2,6763 (100%)\nATK: 17,190 (55%)/20,190 (100%)\nDEF: 9,956 (55%)/12,566 (100%)";
        const {link} = require('./androids1.js')
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
                            {name:"Super Attack", value: superatk},
                            {name: "Passive Skill", value: passive},
                            {name: "Active Skill", value: active},
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
                        .setFooter("[1]: Lowers enemy's ATK & DEF by 20% for 3 turns")
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
                        .setFooter("[2]: 25% chance to evade enemy's attack")
                    message.channel.send(passiveSkill)
                    break;

                case "active":
                    const activeSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Active Skill", active)
                        .setTimestamp()
                    message.channel.send(activeSkill)
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