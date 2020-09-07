const Discord = require('discord.js')

module.exports = {
    name: 'buucolo1',
    description: 'AGL UR Majin Buu (Piccolo)',
    categories: ['[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Artificial Life Forms](https://dbz-dokkanbattle.fandom.com/wiki/Artificial_Life_Forms)',
                 '[Majin Power](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Power)',
                 '[Power Absorption](https://dbz-dokkanbattle.fandom.com/wiki/Power_Absorption'],
    link: ['[Demonic Ways](https://dbz-dokkanbattle.fandom.com/wiki/Demonic_Ways)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +10%',
           '[Brainiacs](https://dbz-dokkanbattle.fandom.com/wiki/Brainiacs)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: ATK & DEF +15%',
           '[Metamorphosis](https://dbz-dokkanbattle.fandom.com/wiki/Metamorphosis)\n ­ ­ ­ ­ Level 1: Recovers 5% HP\n ­ ­ ­ ­ Level 10: Recovers 5% HP and ATK & DEF +10%',
           '[Majin](https://dbz-dokkanbattle.fandom.com/wiki/Majin)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +15%',
           '[Nightmare](https://dbz-dokkanbattle.fandom.com/wiki/Nightmare)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[The Wall Standing Tall](https://dbz-dokkanbattle.fandom.com/wiki/The_Wall_Standing_Tall)\n ­ ­ ­ ­ Level 1: Disables enemy\'s True Power; ATK +15%\n ­ ­ ­ ­ Level 10: Disables enemy\'s True Power; ATK +20%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Majin Buu (Piccolo)'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./buucolo1.js')
        const {categories} = require('./buucolo1.js')
        const {status} = require('./buucolo1.js')
        const {plural} = require('./buucolo1.js')
        const {aliases} = require('./buucolo1.js')
        var color = 2317729;
        var name = "Power Taken From Others\nMajin Buu (Piccolo)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Power_Taken_From_Others_Majin_Buu_(Piccolo)";
        var desc = "Extreme AGL UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/752641980466593812/card_1020530_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/752642002058739802/340.png";
        var leader = "\"[Power Absorption](https://dbz-dokkanbattle.fandom.com/wiki/Power_Absorption)\" Category Ki +3 and HP, ATK & DEF +120%";
        var superatk = "[Light Grenade](https://youtu.be/cZcywo_hetE?t=132): Causes supreme damage with a high chance of stunning the enemy[1]";
        var passive = "Majin's Scheme: Recovers 15% HP at start of turn; Ki +3 and ATK & DEF +150%; \"[Power Absorption](https://dbz-dokkanbattle.fandom.com/wiki/Power_Absorption)\" Category allies' ATK +30% and DEF +50%; medium chance[2] of evading enemy's attack (including Super Attack)";
        var stats = "HP: 12,810 (55%)/15,410 (100%)\nATK: 10,468 (55%)/13,468 (100%)\nDEF: 6,628 (55%)/10,028 (100%)";
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
        var apt = "APT: 3,069,605 (unsupported)/3,361,948 (supported)\nDefense: 165,462 (unsupported)/180,170 (supported) \nLinking Partner: [PHY LR Majin Buu (Gotenks)](https://dbz-dokkanbattle.fandom.com/wiki/Invincible_Absorption_Majin_Buu_(Gotenks)#Majin%20Buu%20(Gotenks)) \nTeam: [Power Absorption](https://dbz-dokkanbattle.fandom.com/wiki/Power_Absorption)/[Majin Power](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Power) \nBuild: 11 Additional/15 Critical";
        var blp = "[STR UR Majin Buu (Piccolo)](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Absorption_Ability_Buu_(Super)#Majin%20Buu%20(Piccolo)) - 6 links shared\n[PHY UR Majin Buu (Gotenks)](https://dbz-dokkanbattle.fandom.com/wiki/Love_of_the_Throne_Majin_Buu_(Gotenks)) - 5 links shared\n[PHY LR Majin Buu (Gotenks)](https://dbz-dokkanbattle.fandom.com/wiki/Invincible_Absorption_Majin_Buu_(Gotenks)#Majin%20Buu%20(Gotenks)) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%";
        var footnotes = "[1]: 50% chance to stun the enemy for 2 turns\n[2]: 25% chance to evade enemy's attack";

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
                        .setFooter("[1]: 50% chance to stun the enemy for 2 turns")
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
                        .setFooter("[2]: 25% chance to evade enemy's attack")
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