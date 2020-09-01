const Discord = require('discord.js')

module.exports = {
    name: 'angelgoku1',
    description: 'PHY UR Goku (Angel)',
    categories: ['[Resurrected Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Resurrected_Warriors)',
                 '[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Goku\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))',
                 '[Otherworld Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Otherworld_Warriors)'],
    link: ['[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race)\n ­ ­ ­ ­ Level 1: ATK +5%\n ­ ­ ­ ­ Level 10: ATK +10%',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[All in the Family](https://dbz-dokkanbattle.fandom.com/wiki/All_in_the_Family)\n ­ ­ ­ ­ Level 1: DEF +15%\n ­ ­ ­ ­ Level 10: DEF +20%',
           '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha)\n ­ ­ ­ ­ Level 1: ATK +5% when performing a Super Attack\n ­ ­ ­ ­ Level 10: ATK +10% when performing a Super Attack',
           '[Experienced Fighters](https://dbz-dokkanbattle.fandom.com/wiki/Experienced_Fighters)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Supreme Power](https://dbz-dokkanbattle.fandom.com/wiki/Supreme_Power)\n ­ ­ ­ ­ Level 1: ATK & DEF +5% and activates Penetration\n ­ ­ ­ ­ Level 10: ATK & DEF +10% and activates Penetration',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Goku (Angel)'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./angelgoku1.js')
        const {categories} = require('./angelgoku1.js')
        const {status} = require('./angelgoku1.js')
        const {plural} = require('./angelgoku1.js')
        const {aliases} = require('./angelgoku1.js')
        var color = 7164715;
        var name = "Passing the Mantle\nGoku (Angel)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Passing_the_Mantle_Goku_(Angel)";
        var desc = "Super PHY UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/749497093105909760/card_1019860_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/749497078153085018/B0iqASP1FsggAAAABJRU5ErkJggg.png";
        var leader = "\"[Otherworld Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Otherworld_Warriors)\" Category Ki +3 and HP, ATK & DEF +50%";
        var superatk = "[Instant Transmission Kamehameha](https://youtu.be/MphVEwatII0?t=80): Causes supreme damage with a medium chance of stunning the enemy[1]";
        var passive = "A Father's Role: DEF +70%; ATK +120% for 7 turns from start of turn and high chance[2] of evading enemy's attack (including Super Attack) starting from the 8th turn from the start of battle; plus an additional ATK & DEF +59% when there is an ally whose name includes \"[Goten (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/Goten_(disambiguation)#GOTEN_.28KID.29)\" attacking in the same turn; \"[Goku's Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)\" Category allies' Ki +1 and ATK & DEF +20%";
        var stats = "HP: 7,635 (55%)/9,675 (100%)\nATK: 9,061 (55%)/10,861 (100%)\nDEF: 5,213 (55%)/6,773 (100%)";
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
        var apt = "APT: 2,088,425 (unsupported)/2,542,430 (supported)\nDefense: 84,998 (unsupported)/102,635 (supported) \nLinking Partner: [STR UR Goten (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/From_Father_to_Son_Goten_(Kid)) \nTeam: [Siblings' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)/[Goku's Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family) \nBuild: 11 Additional/15 Critical";
        var blp = "[INT UR Ultimate Gohan](https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_Power-Up_Ultimate_Gohan) - 5 links shared\n[INT UR Super Saiyan Goku](https://dbz-dokkanbattle.fandom.com/wiki/Unwavering_Will_and_Newfound_Power_Super_Saiyan_Goku) - 5 links shared\n[STR UR Goten (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/From_Father_to_Son_Goten_(Kid)) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► [AGL SR Goku (Angel)](https://dbz-dokkanbattle.fandom.com/wiki/Message_from_Another_World_Goku_(Angel)), [INT SR Goku (Angel)](https://dbz-dokkanbattle.fandom.com/wiki/Rising_Star_in_North_Galaxy_Goku_(Angel)), & [STR SR Goku (Angel)](https://dbz-dokkanbattle.fandom.com/wiki/Rising_Star_in_North_Galaxy_Goku_(Angel)#Japan) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "[1]: 30% chance to stun the enemy for 2 turns\n[2]: 50% chance to evade enemy's attack";

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
                        .setFooter("[1]: 30% chance to stun the enemy for 2 turns")
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
                        .setFooter("[2]: 50% chance to evade enemy's attack")
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