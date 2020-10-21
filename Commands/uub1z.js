const Discord = require('discord.js')

module.exports = {
    name: 'uub1z',
    description: 'PHY UR Uub (Youth) with EZA',
    categories: ['[World Tournamnet](https://dbz-dokkanbattle.fandom.com/wiki/World_Tournament)',
                 '[Resurrected Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Resurrected_Warriors)',
                 '[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Youth](https://dbz-dokkanbattle.fandom.com/wiki/Youth)',
                 '[Bond of Master and Disciple](https://dbz-dokkanbattle.fandom.com/wiki/Bond_of_Master_and_Disciple)',
                 '[Earthlings](https://dbz-dokkanbattle.fandom.com/wiki/Earthlings)'],
    link: ['[Infighter](https://dbz-dokkanbattle.fandom.com/wiki/Infighter)\n ­ ­ ­ ­ Level 1: ATK +10% and enemy DEF -10%\n ­ ­ ­ ­ Level 10: ATK +15% and enemy DEF -15%',
           '[Tough as Nails](https://dbz-dokkanbattle.fandom.com/wiki/Tough_as_Nails)\n ­ ­ ­ ­ Level 1: DEF +15%\n ­ ­ ­ ­ Level 10: DEF +20% and damage received -5%',
           '[World Tournament Reborn](https://dbz-dokkanbattle.fandom.com/wiki/World_Tournament_Reborn)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Revival](https://dbz-dokkanbattle.fandom.com/wiki/Revival)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2; ATK & DEF +5% and recover 5% HP when HP is 50% or below',
           '[Berserker](https://dbz-dokkanbattle.fandom.com/wiki/Berserker)\n ­ ­ ­ ­ Level 1: ATK +20% when HP is 50% or below\n ­ ­ ­ ­ Level 10: ATK +30% when HP is 50% or below',
           '[Supreme Power](https://dbz-dokkanbattle.fandom.com/wiki/Supreme_Power)\n ­ ­ ­ ­ Level 1: ATK & DEF +5% and activates Penetration\n ­ ­ ­ ­ Level 10: ATK & DEF +10% and activates Penetration',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Uub (Youth) Z'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./uub1z.js')
        const {categories} = require('./uub1z.js')
        const {status} = require('./uub1z.js')
        const {plural} = require('./uub1z.js')
        const {aliases} = require('./uub1z.js')
        var color = 7164715;
        var name = "Astonishing Reincarnation\nUub (Youth) Z";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Astonishing_Reincarnation_Uub_(Youth)#Extreme%20Z-Awakened";
        var desc = "Super PHY";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/767991291304738826/card_1020810_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/767991317414019072/card_1020810_character.png";
        var leader = "\"[Earthlings](https://dbz-dokkanbattle.fandom.com/wiki/Earthlings)\" Category Ki +3 and HP, ATK & DEF +77%; or [PHY](https://dbz-dokkanbattle.fandom.com/wiki/Category:PHY) Type Ki +3 and HP, ATK & DEF +50%";
        var superatk = "[Ki Blast Cannon](https://youtu.be/MjNtb0fnofc?t=20): Raises ATK[1] and causes supreme damage with a medium chance of stunning the enemy[2]";
        var passive = "Strength When It Counts: Ki +1 and ATK & DEF +30% at start of each turn (Ki up to +4 and ATK & DEF up to +120%); plus an additional ATK +100% within the same turn after receiving attack; guards all attacks when there is a \"[World Tournament](https://dbz-dokkanbattle.fandom.com/wiki/World_Tournament)\" Category enemy or an enemy whose name includes \"[Goku](https://dbz-dokkanbattle.fandom.com/wiki/Goku_(disambiguation))\" (Youth, Captain Ginyu, Jr., etc. excluded)";
        var stats = "HP: 11,681 (55%)/13,721 (100%)\nATK: 10,379 (55%)/12,179 (100%)\nDEF: 7,295 (55%)/8,855 (100%)";
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
        var apt = "APT: 3,680,733 (unsupported)/4,236,791 (supported)\nDefense: 65,858 (unsupported)/83,568 (supported) \nLinking Partner: [TEQ LR Uub (Teen)](https://dbz-dokkanbattle.fandom.com/wiki/Hidden_Majin_Power_Uub_(Teen)) \nTeam: [Resurrected Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Resurrected_Warriors) \nBuild: 11 Additional/15 Critical";
        var blp = "[TEQ SR Uub (Teen)](https://dbz-dokkanbattle.fandom.com/wiki/Soul_Succession_Uub_(Teen)) - 4 links shared\n[TEQ LR Uub (Teen)](https://dbz-dokkanbattle.fandom.com/wiki/Hidden_Majin_Power_Uub_(Teen)) - 3 links shared\n[PHY LR Great Saiyaman 1 & 2](https://dbz-dokkanbattle.fandom.com/wiki/Blazing_Love_and_Burning_Justice_Great_Saiyaman_1_%26_2) - 3 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► SA Level can go up to 15, but only through **[Extreme Z-Awakening](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Area:_Majin_Buu_Saga)** with special medals from the Extreme Z-Area event\n► His additional ATK +100% is calculated separately, for a total boost of ATK +340% after being attacked (starting from his 4th turn) ";
        var footnotes = "[1]: Raises ATK by 30% for 99 turns\n[2]: 30% chance to stun the enemy for 2 turns";

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