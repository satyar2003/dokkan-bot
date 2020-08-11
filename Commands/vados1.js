const Discord = require('discord.js')

module.exports = {
    name: 'vados1',
    description: 'INT UR Vados',
    categories: ['[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)',
                 '[Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6)',
                 '[Siblings\' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)',
                 '[Bond of Master and Disciple](https://dbz-dokkanbattle.fandom.com/wiki/Bond_of_Master_and_Disciple)'],
    link: ['[The Innocents](https://dbz-dokkanbattle.fandom.com/wiki/The_Innocents)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Brainiacs](https://dbz-dokkanbattle.fandom.com/wiki/Brainiacs)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: ATK & DEF +15%',
           '[Solid Support](https://dbz-dokkanbattle.fandom.com/wiki/Solid_Support)\n ­ ­ ­ ­ Level 1: ATK +10% and enemy DEF -15%\n ­ ­ ­ ­ Level 10: ATK +15% and enemy DEF -20%',
           '[Cold Judgement](https://dbz-dokkanbattle.fandom.com/wiki/Cold_Judgment)\n ­ ­ ­ ­ Level 1: DEF +20%\n ­ ­ ­ ­ Level 10: DEF +25%',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[Godly Power](https://dbz-dokkanbattle.fandom.com/wiki/Godly_Power)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +15% and chance to perform a critical hit +5%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Vados'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./vados1.js')
        const {categories} = require('./vados1.js')
        const {status} = require('./vados1.js')
        const {plural} = require('./vados1.js')
        const {aliases} = require('./vados1.js')
        var color = 7028604;
        var name = "Unprecedented Tension\nVados";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Unprecedented_Tension_Vados";
        var desc = "Super INT UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/742793334707454083/card_1019840_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/742793357008306206/340.png";
        var leader = "\"[Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6)\" Category Ki +3 and HP, ATK & DEF +120%";
        var superatk = "[Destruction's Conductor](https://www.youtube.com/watch?v=VRZAnCdhpBw): Causes supreme damage to enemy, lowers ATK[1] and seals Super Attack";
        var passive = "Power of Admonition: ATK & DEF +60%; high chance[2] of evading enemy's attack (including Super Attack); \"[Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6)\", \"[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)\", \"[Siblings' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)\" and \"[Bond of Master and Disciple](https://dbz-dokkanbattle.fandom.com/wiki/Bond_of_Master_and_Disciple)\" Category allies' ATK & DEF +20%; randomly changes Ki Spheres of a certain Type to <:rbw:729467948690964480> Ki Spheres when there is a \"[Universe 6](https://dbz-dokkanbattle.fandom.com/wiki/Universe_6)\" Category ally (self excluded) attacking in the same turn";
        var stats = "HP: 12,810 (55%)/15,810 (100%)\nATK: 10,591 (55%)/13,591 (100%)\nDEF: 6,628 (55%)/9,628 (100%)";
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
        var apt = "APT: 2,337,286 (unsupported)/2,836,782 (supported)\nDefense: 106,755 (unsupported)/118,379 (supported) \nLinking Partner: [PHY UR Beerus](https://dbz-dokkanbattle.fandom.com/wiki/Hot-Blooded_God_of_Destruction_Beerus) \nTeam: [Exploding Rage](https://dbz-dokkanbattle.fandom.com/wiki/Exploding_Rage)/[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods) \nBuild: 6 Additional/15 Critical";
        var blp = "[STR UR Whis](https://dbz-dokkanbattle.fandom.com/wiki/Best_Measure_Whis) - 5 links shared\n[PHY LR Broly & Cheelai & Lemo](https://dbz-dokkanbattle.fandom.com/wiki/A_New_Life_on_Vampa_Broly_%26_Cheelai_%26_Lemo) - 5 links shared\n[PHY UR Gowasu & Zamasu](https://dbz-dokkanbattle.fandom.com/wiki/A_Lesson_in_Good_and_Evil_Gowasu_%26_Zamasu) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► She gives allies with multiple of the required Categories, herself included, a total of ATK & DEF +20% per Category (up to 80%)\n► [AGL SSR Vados](https://dbz-dokkanbattle.fandom.com/wiki/Angel_of_Universe_6_Vados) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "[1]: Lowers enemy's ATK by 20% for 3 turns\n[2]: 50% chance to evade enemy's attack";

        if (status === 'incomplete')
        {
            var person = aliases[aliases.length - 1]
            if (plural === 'false')
            {
                const preview = new Discord.MessageEmbed()
                    .setColor(color)
                    .setAuthor(message.author.username, pfp)
                    .setTitle(`${person} is coming soon.`)
                message.channel.send(preview)
            }
            else
            {
                const preview = new Discord.MessageEmbed()
                    .setColor(color)
                    .setAuthor(message.author.username, pfp)
                    .setTitle(`${person} are coming soon.`)
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
                        .setFooter("[1]: Lowers enemy's ATK by 20% for 3 turns")
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
                        .setFooter("[2]: 50% chance to evade enemy's attack")
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