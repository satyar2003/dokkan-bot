const Discord = require('discord.js')

module.exports = {
    name: 'superbuu1',
    description: 'PHY UR Buu (Super)',
    categories: ['[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Artificial Life Forms](https://dbz-dokkanbattle.fandom.com/wiki/Artificial_Life_Forms)',
                 '[Majin Power](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Power)',
                 '[Power Absorption](https://dbz-dokkanbattle.fandom.com/wiki/Power_Absorption)'],
    link: ['[Majin](https://dbz-dokkanbattle.fandom.com/wiki/Majin)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +15%',
           '[Brutal Beatdown](https://dbz-dokkanbattle.fandom.com/wiki/Brutal_Beatdown)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Metamorphosis](https://dbz-dokkanbattle.fandom.com/wiki/Metamorphosis)\n ­ ­ ­ ­ Level 1: Recovers 5% HP\n ­ ­ ­ ­ Level 10: Recovers 5% HP and ATK & DEF +10%',
           '[Infinite Regeneration](https://dbz-dokkanbattle.fandom.com/wiki/Infinite_Regeneration)\n ­ ­ ­ ­ Level 1: Recovers 3% HP\n ­ ­ ­ ­ Level 10: Ki +2 and recovers 3% HP and DEF +10%',
           '[Fear and Faith](https://dbz-dokkanbattle.fandom.com/wiki/Fear_and_Faith)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and all enemies\' DEF -10%',
           '[The Wall Standing Tall](https://dbz-dokkanbattle.fandom.com/wiki/The_Wall_Standing_Tall)\n ­ ­ ­ ­ Level 1: Disables enemy\'s True Power; ATK +15%\n ­ ­ ­ ­ Level 10: Disables enemy\'s True Power; ATK +20%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['sbuu1', 'Buu (Super)'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./superbuu1.js')
        const {categories} = require('./superbuu1.js')
        const {status} = require('./superbuu1.js')
        const {plural} = require('./superbuu1.js')
        const {aliases} = require('./superbuu1.js')
        var color = 7164715;
        var name = "Dimension-Breaking Roar\nBuu (Super)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Dimension-Breaking_Roar_Buu_(Super)";
        var desc = "Extreme PHY UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/750222766027964421/card_1015250_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/750222925583351908/Ozzze1AAAAAElFTkSuQmCC.png";
        var leader = "[<:ephy:729475525155749949>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_PHY) Type Ki +4 and HP, ATK & DEF +120%";
        var superatk = "[Vice Shout](https://youtu.be/MphVEwatII0): Causes supreme damage to enemy and recovers 18% HP";
        var passive = "Evil Shout: [<:phy:729467520272039988>](https://dbz-dokkanbattle.fandom.com/wiki/Category:PHY) Type Ki +3 plus an additional ATK & DEF +50% for [<:ephy:729475525155749949>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_PHY) Type; randomly changes Ki Spheres of a certain Type ([<:phy:729467520272039988>](https://dbz-dokkanbattle.fandom.com/wiki/Category:PHY) excluded) to [<:phy:729467520272039988>](https://dbz-dokkanbattle.fandom.com/wiki/Category:PHY) Ki Spheres; ATK & DEF +20% per Ki Sphere obtained";
        var stats = "HP: 13,888 (55%)/17,288 (100%)\nATK: 10,765 (55%)/13,765 (100%)\nDEF: 7,350 (55%)/9,950 (100%)";
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
        var apt = "APT: 3,118,056 (unsupported)/3,570,175 (supported)\nDefense: 163,445 (unsupported)/179,362 (supported) \nLinking Partner: [STR UR Majin Buu (Pure Evil)](https://dbz-dokkanbattle.fandom.com/wiki/Silent_Executioner_Majin_Buu_(Pure_Evil)) \nTeam: [Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)/[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost) \nBuild: 11 Additional/15 Critical";
        var blp = "[STR UR Majin Buu (Pure Evil)](https://dbz-dokkanbattle.fandom.com/wiki/Silent_Executioner_Majin_Buu_(Pure_Evil)) - 5 links shared\n[PHY LR Majin Buu (Gotenks)](https://dbz-dokkanbattle.fandom.com/wiki/Invincible_Absorption_Majin_Buu_(Gotenks)) - 4 links shared\n[PHY UR Majin Buu (Good)](https://dbz-dokkanbattle.fandom.com/wiki/Majin_on_the_Loose_Majin_Buu_(Good)) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 145%\n► \n[TEQ SSR Buu (Super)](https://dbz-dokkanbattle.fandom.com/wiki/Murderous_Designs_Buu_(Super)) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "";

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