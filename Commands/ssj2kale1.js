const Discord = require('discord.js')

module.exports = {
    name: 'ssj2kale1',
    description: 'INT UR Super Saiyan 2 Kale',
    categories: ['[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)',
                 '[Peppy Gals](https://dbz-dokkanbattle.fandom.com/wiki/Peppy_Gals)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6)',
                 '[Super Saiyan 2](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan_2)',
                 '[Rapid Growth](https://dbz-dokkanbattle.fandom.com/wiki/Rapid_Growth)'],
    link: ['[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Battlefield Diva](https://dbz-dokkanbattle.fandom.com/wiki/Battlefield_Diva)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +3 and chance of evading +5%',
           '[Solid Support](https://dbz-dokkanbattle.fandom.com/wiki/Solid_Support)\n ­ ­ ­ ­ Level 1: ATK +10% and all enemies\' DEF -15%\n ­ ­ ­ ­ Level 10: ATK +15% and all enemies\' DEF -20%',
           '[Warriors of Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Warriors_of_Universe_6)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +6%',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Tournament of Power](https://dbz-dokkanbattle.fandom.com/wiki/Tournament_of_Power)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK & DEF +7%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['ss2kale1', 'Super Saiyan 2 Kale'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./ssj2kale1.js')
        const {categories} = require('./ssj2kale1.js')
        const {status} = require('./ssj2kale1.js')
        const {plural} = require('./ssj2kale1.js')
        const {aliases} = require('./ssj2kale1.js')
        var color = 7028604;
        var name = "First Step as a Warrior\nSuper Saiyan 2 Kale";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/First_Step_as_a_Warrior_Super_Saiyan_2_Kale";
        var desc = "Super INT UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/745832214977052752/card_1020400_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/745832238624800778/latest.png?width=459&height=612";
        var leader = "[<:int:729468835819946026>](https://dbz-dokkanbattle.fandom.com/wiki/Category:INT) Type Ki +3 and HP, ATK & DEF +50%";
        var superatk = "Resist Blast: Causes supreme damage to enemy and lowers DEF[1]";
        var passive = "Caulifla's Trust: \"[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)\" Category allies' Ki +2 and ATK & DEF +30%; DEF +50% when there is an ally whose name includes \"[Caulifla](https://dbz-dokkanbattle.fandom.com/wiki/Caulifla_(disambiguation))\" on the team, and all allies' Ki +1 and ATK & DEF +10% if that ally is attacking in the same turn";
        var stats = "HP: 10,366 (55%)/12,166 (100%)\nATK: 8,101 (55%)/9,901 (100%)\nDEF: 6,248 (55%)/8,048 (100%)";
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
        var apt = "APT: 959,189 (unsupported)/1,119,054 (supported)\nDefense: 93,039 (unsupported)/104,465 (supported) \nLinking Partner: [STR UR Super Saiyan 2 Caulifla](https://dbz-dokkanbattle.fandom.com/wiki/Power_for_Securing_Victory_Super_Saiyan_2_Caulifla) \nTeam: [Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6) \nBuild: 6 Additional/15 Critical";
        var blp = "[AGL UR Super Saiyan 2 Caulifla](https://dbz-dokkanbattle.fandom.com/wiki/Boundless_Potential_Super_Saiyan_2_Caulifla) - 6 links shared\n[STR UR Super Saiyan 2 Caulifla](https://dbz-dokkanbattle.fandom.com/wiki/Power_for_Securing_Victory_Super_Saiyan_2_Caulifla) - 6 links shared\n[AGL LR Super Saiyan 2 Caulifla & Super Saiyan 2 Kale](https://dbz-dokkanbattle.fandom.com/wiki/Two_Makes_the_Strongest_of_All_Universes_Super_Saiyan_2_Caulifla_%26_Super_Saiyan_2_Kale) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 145%";
        var footnotes = "[1]: Lowers enemy's DEF by 40% for 3 turns";

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
                        .setFooter(footnotes)
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