const Discord = require('discord.js')

module.exports = {
    name: 'tien1',
    description: 'PHY UR Tien',
    categories: ['[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Worthy Rivals](https://dbz-dokkanbattle.fandom.com/wiki/Worthy_Rivals)',
                 '[Earthlings](https://dbz-dokkanbattle.fandom.com/wiki/Earthlings)',
                 '[Saviors](https://dbz-dokkanbattle.fandom.com/wiki/Saviors)'],
    link: ['[Crane School](https://dbz-dokkanbattle.fandom.com/wiki/Crane_School)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Experienced Fighters](https://dbz-dokkanbattle.fandom.com/wiki/Experienced_Fighters)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Solid Support](https://dbz-dokkanbattle.fandom.com/wiki/Solid_Support)\n ­ ­ ­ ­ Level 1: ATK +10% and all enemies\' DEF -15%\n ­ ­ ­ ­ Level 10: ATK +15% and all enemies\' DEF -20%',
           '[Cold Judgment](https://dbz-dokkanbattle.fandom.com/wiki/Cold_Judgment)\n ­ ­ ­ ­ Level 1: DEF +20%\n ­ ­ ­ ­ Level 10: DEF +25%',
           '[Z Fighters](https://dbz-dokkanbattle.fandom.com/wiki/Z_Fighters)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Courage](https://dbz-dokkanbattle.fandom.com/wiki/Courage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK +10%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Tien'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./tien1.js')
        const {categories} = require('./tien1.js')
        const {status} = require('./tien1.js')
        const {plural} = require('./tien1.js')
        const {aliases} = require('./tien1.js')
        var color = 7164715;
        var name = "Risky Covering Fire\nTien";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Risky_Covering_Fire_Tien";
        var desc = "Super PHY UR";
        var circle = "https://media.discordapp.net/attachments/598390753303199744/752646274741960754/card_1020280_circle.png";
        var character = "https://media.discordapp.net/attachments/598390753303199744/752646258853937272/fF0kWgLE4iBxgOqKLhorVYIsjpwMxdiTOZVpbCKzx8muQqNNa6ah28tFTz8zxw9ROisDqNIyYnB269eBVjFKjRvkPxkliDMFpS4F.png";
        var leader = "\"[Earthlings](https://dbz-dokkanbattle.fandom.com/wiki/Earthlings)\" Category Ki +3 and HP, ATK & DEF +120%";
        var superatk = "[Tri-Beam](https://youtu.be/cZcywo_hetE): Causes supreme damage to enemy and greatly lowers ATK & DEF[1]";
        var passive = "Ally's Backup: Ki +3 and ATK & DEF +150%; plus an additional ATK +70% when performing a Super Attack; \"[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)\" Category Super Class allies' ATK +30% and DEF +50%; high chance[2] of stunning the attacked enemy";
        var stats = "HP: 12,091 (55%)/15,491 (100%)\nATK: 10,756 (55%)/13,756 (100%)\nDEF: 6,782 (55%)/9,382 (100%)";
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
        var apt = "APT: 5,006,892 (unsupported)/5,513,542 (supported)\nDefense: 154,803 (unsupported)/169,423 (supported) \nLinking Partner: [PHY UR Piccolo](https://dbz-dokkanbattle.fandom.com/wiki/Kami_and_Demon_King_United_Piccolo) \nTeam: [Battle of Wits](https://dbz-dokkanbattle.fandom.com/wiki/Battle_of_Wits)/[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga) \nBuild: 11 Additional/15 Critical";
        var blp = "[TEQ UR Krillin](https://dbz-dokkanbattle.fandom.com/wiki/Back_on_the_Front_Line_Krillin) - 4 links shared\n[PHY UR Piccolo](https://dbz-dokkanbattle.fandom.com/wiki/Kami_and_Demon_King_United_Piccolo#Piccolo) - 4 links shared\n[PHY UR Piccolo (Fused With Kami)](https://dbz-dokkanbattle.fandom.com/wiki/Kami_and_Demon_King_United_Piccolo#Piccolo%20(Fused%20With%20Kami)) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► His additional ATK +70% is calculated separately, resulting in a total boost of ATK +376% when performing a Super Attack\n► [AGL SR Tien](https://dbz-dokkanbattle.fandom.com/wiki/Beyond_Limits_Tien) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "[1]: Lowers enemy's ATK & DEF by 30% for 3 turns\n[2]: 40% chance to stun attacked enemy for 1 turn";

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
                        .setFooter("[1]: Lowers enemy's ATK & DEF by 30% for 3 turns")
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
                        .setFooter("[2]: 40% chance to stun attacked enemy for 1 turn")
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