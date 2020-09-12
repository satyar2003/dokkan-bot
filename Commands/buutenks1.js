const Discord = require('discord.js')

module.exports = {
    name: 'buutenks1',
    description: 'PHY LR Majin Buu (Gotenks)',
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
           '[Fear and Faith](https://dbz-dokkanbattle.fandom.com/wiki/Fear_and_Faith)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and all enemies\' DEF -10%',
           '[Majin](https://dbz-dokkanbattle.fandom.com/wiki/Majin)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +15%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'false',
    aliases: ['Majin Buu (Gotenks)'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./buutenks1.js')
        const {categories} = require('./buutenks1.js')
        const {status} = require('./buutenks1.js')
        const {plural} = require('./buutenks1.js')
        const {aliases} = require('./buutenks1.js')
        var color = 7164715;
        var name = "Invincible Absorption\nMajin Buu (Gotenks)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Invincible_Absorption_Majin_Buu_(Gotenks)";
        var desc = "Extreme PHY LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/754217986797207552/card_1020370_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/754218164715389009/AU3oPgRDLX5AAAAAElFTkSuQmCC.png";
        var leader = "\"[Power Absorption](https://dbz-dokkanbattle.fandom.com/wiki/Power_Absorption)\" or \"[Majin Power](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Power)\" Category Ki +4, HP +130% and ATK & DEF +170%";
        var superatk = "[Destructive Grenade](https://youtu.be/cZcywo_hetE?t=155) (12-17 Ki): Raises ATK[1] and causes colossal damage to enemy\n[Kamehameha](https://youtu.be/cZcywo_hetE?t=184) (18+ Ki): Raises DEF[2] and causes mega-colossal damage to enemy";
        var passive = "Evil Scheme: Recovers 12% HP at start of turn; ATK & DEF +120%; plus an additional Ki +1 per Type Ki Sphere obtained; medium chance[3] of launching an additional Super Attack";
        var active = "[Absorption](https://youtu.be/cZcywo_hetE?t=202): Absorbs Ultimate Gohan; can be activated when HP is 50% or more starting from the 4th turn from start of battle (once only)"
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
        var blp = "[STR UR Majin Buu (Ultimate Gohan)](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Absorption_Ability_Buu_(Super)#Majin%20Buu%20(Ultimate%20Gohan)) - 6 links shared\n[PHY LR Majin Buu (Ultimate Gohan)](https://dbz-dokkanbattle.fandom.com/wiki/Invincible_Absorption_Majin_Buu_(Gotenks)#Majin%20Buu%20(Ultimate%20Gohan)) - 6 links shared\n[INT UR Majin Buu (Ultimate Gohan)](https://dbz-dokkanbattle.fandom.com/wiki/Countdown_to_Despair_Majin_Buu_(Ultimate_Gohan)) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 150%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%";
        var footnotes = "[1]: Raises ATK by 30% for 99 turns\n[2]: Raises DEF by 30% for 99 turns\n[3]: 25% chance to launch an additional Super Attack";

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
                        .setFooter("[1]: Raises ATK by 30% for 99 turns\n[2]: Raises DEF by 30% for 99 turns")
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
                        .setFooter("[3]: 25% chance to launch an additional Super Attack")
                    message.channel.send(passiveSkill)
                    break;

                case "active":
                    const activeSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
                        .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Active Skill", active)
                        .setTimestamp()
                    message.channel.send(activeSkill)
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