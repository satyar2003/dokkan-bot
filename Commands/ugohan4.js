const Discord = require('discord.js')

module.exports = {
    name: 'ugohan4',
    description: 'INT UR F2P Ultimate Gohan',
    categories: ['[Hybrid Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Hybrid_Saiyans)',
                 '[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Goku\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)',
                 '[Siblings\' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)',
                 '[Revenge](https://dbz-dokkanbattle.fandom.com/wiki/Revenge)',
                 '[Rapid Growth](https://dbz-dokkanbattle.fandom.com/wiki/Rapid_Growth)',
                 '[Saviors](https://dbz-dokkanbattle.fandom.com/wiki/Saviors)'],
    link: ['[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race)\n ­ ­ ­ ­ Level 1: ATK +5%\n ­ ­ ­ ­ Level 10: ATK +10%',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[All in the Family](https://dbz-dokkanbattle.fandom.com/wiki/All_in_the_Family)\n ­ ­ ­ ­ Level 1: DEF +15%\n ­ ­ ­ ­ Level 10: DEF +20%',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[Power Bestowed by God](https://dbz-dokkanbattle.fandom.com/wiki/Power_Bestowed_by_God)\n ­ ­ ­ ­ Level 1: ATK +5% when performing a Super Attack\n ­ ­ ­ ­ Level 10: ATK +10% when performing a Super Attack',
           '[Supreme Power](https://dbz-dokkanbattle.fandom.com/wiki/Supreme_Power)\n ­ ­ ­ ­ Level 1: ATK & DEF +5% and activates Penetration\n ­ ­ ­ ­ Level 10: ATK & DEF +10% and activates Penetration',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Ultimate Gohan'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./ugohan4.js')
        const {categories} = require('./ugohan4.js')
        const {status} = require('./ugohan4.js')
        const {plural} = require('./ugohan4.js')
        const {aliases} = require('./ugohan4.js')
        var color = 7028604;
        var name = "Ultimate Power-Up\nUltimate Gohan";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_Power-Up_Ultimate_Gohan";
        var desc = "Super INT UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/748034877257023588/card_1019880_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/748034893283328011/340.png";
        var leader = "\"[Hybrid Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Hybrid_Saiyans)\" Category Ki +3 and HP, ATK & DEF +50%";
        var superatk = "[Burst Rush](https://youtu.be/MphVEwatII0?t=50): Raises ATK[1] and causes supreme damage to enemy";
        var passive = "Father's Gi: ATK & DEF +58%; plus an additional ATK & DEF +58% and high chance[2] of launching an additional Super Attack when there is another \"[Goku's Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)\" Category ally attacking in the same turn; \"[Goku's Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)\" Category allies' Ki +1 and ATK & DEF +10%";
        var stats = "HP: 7,323 (55%)/9,123 (100%)\nATK: 8,936 (55%)/10,736 (100%)\nDEF: 5,524 (55%)/7,324 (100%)";
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
        var apt = "APT: 1,578,497 (unsupported)/1,962,645 (supported)\nDefense: 92,693 (unsupported)/109,782 (supported) \nLinking Partner: [STR UR Goten (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/From_Father_to_Son_Goten_(Kid)) \nTeam: [Siblings' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)/[Goku's Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family) \nBuild: 6 Additional/15 Critical";
        var blp = "[INT SSR Gohan (Teen)](https://dbz-dokkanbattle.fandom.com/wiki/Training_at_the_Sanctuary_Gohan_(Teen)) - 5 links shared\n[STR UR Goten (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/From_Father_to_Son_Goten_(Kid)) - 5 links shared\n[PHY UR Goku (Angel)](https://dbz-dokkanbattle.fandom.com/wiki/Passing_the_Mantle_Goku_(Angel)) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► [AGL SR Ultimate Gohan](https://dbz-dokkanbattle.fandom.com/wiki/Renewed_Determination_Ultimate_Gohan) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "[1]: Raises ATK by 30% for 99 turns\n[2]: 50% chance to launch an additional Super Attack";

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
                        .setFooter("[1]: Raises ATK by 30% for 99 turns")
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
                        .setFooter("[2]: 50% chance to launch an additional Super Attack")
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