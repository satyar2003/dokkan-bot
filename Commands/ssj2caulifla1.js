const Discord = require('discord.js')

module.exports = {
    name: 'ssj2caulifla1',
    description: 'STR UR Super Saiyan 2 Caulifla',
    categories: ['[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)',
                 '[Peppy Gals](https://dbz-dokkanbattle.fandom.com/wiki/Peppy_Gals)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6)',
                 '[Super Saiyan 2](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan_2)',
                 '[Rapid Growth](https://dbz-dokkanbattle.fandom.com/wiki/Rapid_Growth)'],
    link: ['[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Battlefield Diva](https://dbz-dokkanbattle.fandom.com/wiki/Battlefield_Diva)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +3 and chance of evading +5%',
           '[Prodigies](https://dbz-dokkanbattle.fandom.com/wiki/Prodigies)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Warriors of Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Warriors_of_Universe_6)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +6%',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Tournament of Power](https://dbz-dokkanbattle.fandom.com/wiki/Tournament_of_Power)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK & DEF +7%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['ss2caulifla1', 'Super Saiyan 2 Caulifla'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./ssj2caulifla1.js')
        const {categories} = require('./ssj2caulifla1.js')
        const {status} = require('./ssj2caulifla1.js')
        const {plural} = require('./ssj2caulifla1.js')
        const {aliases} = require('./ssj2caulifla1.js')
        var color = 8990259;
        var name = "Power for Securing Victory\nSuper Saiyan 2 Caulifla";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Power_for_Securing_Victory_Super_Saiyan_2_Caulifla";
        var desc = "Super STR UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/745834540064571432/card_1020390_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/745834558808916089/340.png";
        var leader = "[STR](https://dbz-dokkanbattle.fandom.com/wiki/Category:STR) Type Ki +3 and HP, ATK & DEF +50%";
        var superatk = "Energy Blast: Causes supreme damage to enemy and raises DEF by 30% for 1 turn";
        var passive = "Super Aggressive: ATK & DEF +20% (up to 80%) and chance of evading enemy's attack (including Super Attack) +15% (up to 60%) per \"[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)\" Category ally on the team; ATK +50% when there is an ally whose name includes \"[Kale](https://dbz-dokkanbattle.fandom.com/wiki/Kale_(disambiguation))\" on the team, and launches an additional attack that has a medium chance[1] of becoming a Super Attack if that ally is attacking in the same turn";
        var stats = "HP: 10,022 (55%)/11,822 (100%)\nATK: 8,444 (55%)/10,484 (100%)\nDEF: 5,990 (55%)/7,550 (100%)";
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
        var apt = "APT: 2,367,121 (unsupported)/3,018,938 (supported)\nDefense: 106,263 (unsupported)/143,652 (supported) \nLinking Partner: [INT UR Super Saiyan 2 Kale](https://dbz-dokkanbattle.fandom.com/wiki/First_Step_as_a_Warrior_Super_Saiyan_2_Kale) \nTeam: [Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6) \nBuild: 6 Additional/20 Critical";
        var blp = "[INT UR Super Saiyan 2 Kale](https://dbz-dokkanbattle.fandom.com/wiki/First_Step_as_a_Warrior_Super_Saiyan_2_Kale) - 6 links shared\n[AGL LR Super Saiyan 2 Caulifla & Super Saiyan 2 Kale](https://dbz-dokkanbattle.fandom.com/wiki/Two_Makes_the_Strongest_of_All_Universes_Super_Saiyan_2_Caulifla_%26_Super_Saiyan_2_Kale) - 5 links shared\n[PHY UR Super Saiyan 2 Kefla](https://dbz-dokkanbattle.fandom.com/wiki/Dreadful_Super_Fusion_Super_Saiyan_2_Kefla) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 140%";
        var footnotes = "[1]: 25% chance for additional attack to become a Super Attack";

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
                        .setFooter(footnotes)
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