const Discord = require('discord.js')

module.exports = {
    name: 'buuhan2',
    description: 'PHY LR Majin Buu (Ultimate Gohan)',
    categories: ['[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Artificial Life Forms](https://dbz-dokkanbattle.fandom.com/wiki/Artificial_Life_Forms)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))',
                 '[Final Trump Card](https://dbz-dokkanbattle.fandom.com/wiki/Final_Trump_Card)',
                 '[Majin Power](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Power)',
                 '[Power Absorption](https://dbz-dokkanbattle.fandom.com/wiki/Power_Absorption)'],
    link: ['[Metamorphosis](https://dbz-dokkanbattle.fandom.com/wiki/Metamorphosis)\n ­ ­ ­ ­ Level 1: Recovers 5% HP\n ­ ­ ­ ­ Level 10: Recovers 5% HP and ATK & DEF +10%',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[The Wall Standing Tall](https://dbz-dokkanbattle.fandom.com/wiki/The_Wall_Standing_Tall)\n ­ ­ ­ ­ Level 1: Disables enemy\'s True Power; ATK +15%\n ­ ­ ­ ­ Level 10: Disables enemy\'s True Power; ATK +20%',
           '[Big Bad Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Big_Bad_Bosses)\n ­ ­ ­ ­ Level 1: ATK & DEF +25% when HP is 80% or below\n ­ ­ ­ ­ Level 10: ATK & DEF +25%',
           '[Majin](https://dbz-dokkanbattle.fandom.com/wiki/Majin)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +15%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'false',
    aliases: ['Majin Buu (Ultimate Gohan)'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./buuhan2.js')
        const {categories} = require('./buuhan2.js')
        const {status} = require('./buuhan2.js')
        const {plural} = require('./buuhan2.js')
        const {aliases} = require('./buuhan2.js')
        var color = 7164715;
        var name = "Invincible Absorption\nMajin Buu (Ultimate Gohan)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Invincible_Absorption_Majin_Buu_(Gotenks)#Majin%20Buu%20(Ultimate%20Gohan)";
        var desc = "Extreme PHY LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/756742024496939068/card_4020380_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/756742238922604564/pxI3BJgMzDZjBOB6TdmYEW9KQOCst6x8DBU18eX1zzOsAAAAAElFTkSuQmCC.png";
        var leader = "\"[Power Absorption](https://dbz-dokkanbattle.fandom.com/wiki/Power_Absorption)\" or \"[Majin Power](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Power)\" Category Ki +4, HP +130% and ATK & DEF +170%";
        var superatk = "[Destructive Grenade](https://youtu.be/cZcywo_hetE?t=225) (12-17 Ki): Raises ATK for 1 turn[1] and causes colossal damage to enemy\n[Ultimate Cannon](https://youtu.be/cZcywo_hetE?t=250) (18+ Ki): Raises ATK for 1 turn[1] and causes mega-colossal damage to enemy";
        var passive = "Potential of Evil: Recovers 10% HP at start of turn; ATK & DEF +150%; launches an additional attack that has a medium chance[2] of becoming a Super Attack; plus an additional Ki +1 per Ki Sphere obtained; Ki +5 for 5 turns from start of turn; seals the attacked enemy's Super Attack for 5 turns (once only)";
        var stats = "HP: 21,663 (55%)/25,063 (100%)\nATK: 16,975 (55%)/19,975 (100%)\nDEF: 11,656 (55%)/14,256 (100%)";
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
        var apt = "APT: 8,346,624 (unsupported)/9,781,770 (supported)\nDefense: 278,095 (unsupported)/326,227 (supported) \nLinking Partner: [INT UR Majin Buu (Ultimate Gohan)](https://dbz-dokkanbattle.fandom.com/wiki/Countdown_to_Despair_Majin_Buu_(Ultimate_Gohan)) \nTeam: [Power Absorption](https://dbz-dokkanbattle.fandom.com/wiki/Power_Absorption)/[Majin Power](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Power) \nBuild: 11 Additional/15 Critical";
        var blp = "[INT UR Majin Buu (Ultimate Gohan)](https://dbz-dokkanbattle.fandom.com/wiki/Countdown_to_Despair_Majin_Buu_(Ultimate_Gohan)) - 6 links shared\n[STR UR Majin Buu (Ultimate Gohan)](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Absorption_Ability_Buu_(Super)#Majin%20Buu%20(Ultimate%20Gohan)) - 6 links shared\n[PHY LR Majin Buu (Gotenks)](https://dbz-dokkanbattle.fandom.com/wiki/Invincible_Absorption_Majin_Buu_(Gotenks)) - 6 links shared";
        var deets = "► 12 Ki Multiplier is 150%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%";
        var footnotes = "[1]: Raises SA Multiplier by 30% for 1 turn\n[2]: 25% chance for additional attack to become a Super Attack";

        if (status === 'incomplete')
        {
            var person = aliases[aliases.length - 1]
            if (plural === 'false')
            {
                const preview = new Discord.MessageEmbed()
                    .setColor(color)
                    .setAuthor(message.author.username, pfp)
                    .setTitle(`${person} is coming soon.`)
		    .setTimestamp()
                message.channel.send(preview)
            }
            else
            {
                const preview = new Discord.MessageEmbed()
                    .setColor(color)
                    .setAuthor(message.author.username, pfp)
                    .setTitle(`${person} are coming soon.`)
		    .setTimestamp()
                message.channel.send(preview)
            }
        }
        else
        {
            var sub = args[0];

            switch (sub)
            {
                case undefined:
                    const fullCard = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
                        .setAuthor(message.author.username, pfp)
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
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Leader Skill", leader)
                        .setTimestamp()
                    message.channel.send(leaderSkill)
                    break;

                case "super":
		            const superAttack = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Super Attack", superatk)
                        .setTimestamp()
                        .setFooter("[1]: Raises SA Multiplier by 30% for 1 turn")
                    message.channel.send(superAttack)
                    break;

                case "passive":
                    const passiveSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Passive Skill", passive)
                        .setTimestamp()
                        .setFooter("[2]: 25% chance for additional attack to become a Super Attack")
                    message.channel.send(passiveSkill)
                    break;

                case "stats":
                    const unitStats = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Stats", stats)
                        .setTimestamp()
                    message.channel.send(unitStats)
                    break;

                case "links":
                    const linkSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
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
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Categories", cats)
                        .setTimestamp()
                    message.channel.send(category)
                    break;

                case "apt":
                    const attackPerTurn = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Attack Per Turn", apt)
                        .setTimestamp()
                    message.channel.send(attackPerTurn)
                    break;

                case "partners":
                    const bestLinkingPartners = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Best Linking Partners", blp)
                        .setTimestamp()
                    message.channel.send(bestLinkingPartners)
                    break;

                case "details":
                    const unitDetails = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Details", deets)
                        .setTimestamp()
                    message.channel.send(unitDetails)
                    break;

                case "art":
                    const cardArt = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .setImage(character)
                        .setTimestamp()
                    message.channel.send(cardArt)
                    break;

                default:
                    message.channel.send(`${message.author} that is not a valid sub-command. You can use \`d!help\` to find out all possible sub-commands.`)
                    break;
            }
        }
    }
}