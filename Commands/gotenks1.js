const Discord = require('discord.js')

module.exports = {
    name: 'gotenks1',
    description: 'F2P INT UR Gotenks',
    categories: ['[Fusion](https://dbz-dokkanbattle.fandom.com/wiki/Fusion)',
                 '[Hybrid Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Hybrid_Saiyans)',
                 '[Youth](https://dbz-dokkanbattle.fandom.com/wiki/Youth)',
                 '[Special Pose](https://dbz-dokkanbattle.fandom.com/wiki/Special_Pose)'],
    link: ['[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race)\n ­ ­ ­ ­ Level 1: ATK +5%\n ­ ­ ­ ­ Level 10: ATK +10%',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[The Innocents](https://dbz-dokkanbattle.fandom.com/wiki/The_Innocents)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[Fused Fighter](https://dbz-dokkanbattle.fandom.com/wiki/Fused_Fighter)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Over in a Flash](https://dbz-dokkanbattle.fandom.com/wiki/Over_in_a_Flash)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK 7%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Gotenks'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./gotenks1.js')
        const {categories} = require('./gotenks1.js')
        const {status} = require('./gotenks1.js')
        const {plural} = require('./gotenks1.js')
        const {aliases} = require('./gotenks1.js')
        var color = 7028604;
        var name = "Unstoppable Combo\nGotenks";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Unstoppable_Combo_Gotenks";
        var desc = "Super INT UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/774852992762773534/card_1019900_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/774853247902285824/Ub1WEqXdeNdPWHjgHKzv7kpqC3YyhJetXcPEcqRAZaitNCblwv4BVLOgBsttdoIAAAAASUVORK5CYII.png";
        var leader = "\"[Fusion](https://dbz-dokkanbattle.fandom.com/wiki/Fusion)\" Category Ki +3 and HP, ATK & DEF +50%";
        var superatk = "[Wolf Fang Volleyball Fist](https://youtu.be/kQRGIYZFzAA?t=14): Causes supreme damage to enemy and greatly lowers DEF[1]";
        var passive = "ATK & DEF +90% when performing a Super Attack; launches an additional attack that has a medium chance[2] of becoming a Super Attack when facing only 1 enemy; plus an additional ATK & DEF +40% when attacking if the target enemy is in \"DEF Down\" status";
        var stats = "HP: 9,335 (55%)/11,135 (100%)\nATK: 9,062 (55%)/10,862 (100%)\nDEF: 5,561 (55%)/7,361 (100%)";
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
        var apt = "APT: 2,041,343 (unsupported)/2,814,267 (supported)\nDefense: 76,511 (unsupported)/107,116 (supported) \nLinking Partner: [AGL UR Gotenks (Xeno)](https://dbz-dokkanbattle.fandom.com/wiki/Brave_Fusion_Fighter_Gotenks_(Xeno)) \nTeam: [Fusion](https://dbz-dokkanbattle.fandom.com/wiki/Fusion) \nBuild: 6 Additional/15 Critical";
        var blp = "[STR UR Gogeta](https://dbz-dokkanbattle.fandom.com/wiki/Into_the_Final_Phase_Gogeta) - 6 links shared\n[AGL UR Gotenks (Xeno)](https://dbz-dokkanbattle.fandom.com/wiki/Brave_Fusion_Fighter_Gotenks_(Xeno)) - 5 links shared\n[INT UR Gohan (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/Roar_of_Rage_Gohan_(Kid)) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► Can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack of other [Gotenks](https://dbz-dokkanbattle.fandom.com/wiki/Gotenks_(disambiguation)#GOTENKS) cards";
        var footnotes = "[1]: Lowers enemy's DEF by 50% for 3 turns\n[2]: 25% chance for additional attack to become a Super Attack";

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
                        .setFooter("[1]: Lowers enemy's DEF by 50% for 3 turns")
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
                        .setFooter("[2]: 25% chance for additional attack to become a Super Attack")
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