const Discord = require('discord.js')

module.exports = {
    name: 'goten1',
    description: 'STR UR Goten (Kid)',
    categories: ['[Fusion](https://dbz-dokkanbattle.fandom.com/wiki/Fusion)',
                 '[Hybrid Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Hybrid_Saiyans)',
                 '[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Goku\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)',
                 '[Youth](https://dbz-dokkanbattle.fandom.com/wiki/Youth)',
                 '[Siblings\' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)'],
    link: ['[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race)\n ­ ­ ­ ­ Level 1: ATK +5%\n ­ ­ ­ ­ Level 10: ATK +10%',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[All in the Family](https://dbz-dokkanbattle.fandom.com/wiki/All_in_the_Family)\n ­ ­ ­ ­ Level 1: DEF +15%\n ­ ­ ­ ­ Level 10: DEF +20%',
           '[The Innocents](https://dbz-dokkanbattle.fandom.com/wiki/The_Innocents)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Budding Warrior](https://dbz-dokkanbattle.fandom.com/wiki/Budding_Warrior)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Supreme Power](https://dbz-dokkanbattle.fandom.com/wiki/Supreme_Power)\n ­ ­ ­ ­ Level 1: ATK & DEF +5% and activates Penetration\n ­ ­ ­ ­ Level 10: ATK & DEF +10% and activates Penetration',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Goten (Kid)'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./goten1.js')
        const {categories} = require('./goten1.js')
        const {status} = require('./goten1.js')
        const {plural} = require('./goten1.js')
        const {aliases} = require('./goten1.js')
        var color = 8990259;
        var name = "From Father to Son\nGoten (Kid)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/From_Father_to_Son_Goten_(Kid)";
        var desc = "Super STR UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/748039248430760006/card_1019890_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/748039236627857419/dHOjRovgtRYORIyxZsFYMjNqPheaqlMBnhrrSHuVlf230OnAhMlkFW65YfW0i5DDJ5LfPLOHIpRfgf3aSb4474bN8AAAAASUVORK.png";
        var leader = "\"[Youth](https://dbz-dokkanbattle.fandom.com/wiki/Youth)\" Category Ki +3 and HP, ATK & DEF +50%";
        var superatk = "[Fusion](https://youtu.be/MphVEwatII0?t=108): Causes supreme damage to enemy and lowers ATK[1]";
        var passive = "Final Promise: ATK & DEF +70%; \"[Goku's Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)\" Category allies' Ki +1 and ATK & DEF +30%; Ki +5 and all allies' ATK & DEF +10% when there is an ally whose name includes \"[Goku (Angel)](https://dbz-dokkanbattle.fandom.com/wiki/Goku_(disambiguation)#GOKU_.28ANGEL.29)\" or \"[Trunks (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/Trunks_(disambiguation)#TRUNKS_.28KID.29)\" attacking in the same turn";
        var stats = "HP: 7,168 (55%)/8,968 (100%)\nATK: 9,154 (55%)/11,194 (100%)\nDEF: 5,329 (55%)/6,889 (100%)";
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
        var apt = "APT: 1,519,338 (unsupported)/1,844,911 (supported)\nDefense: 81,015 (unsupported)/93,231 (supported) \nLinking Partner: [PHY UR Goku (Angel)](https://dbz-dokkanbattle.fandom.com/wiki/Passing_the_Mantle_Goku_(Angel)) \nTeam: [Siblings' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)/[Goku's Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family) \nBuild:6 Additional/20 Critical";
        var blp = "[INT UR Ultimate Gohan](https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_Power-Up_Ultimate_Gohan) - 5 links shared\n[STR UR Gohan (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/Hope_for_Growth_Gohan_(Kid)) - 5 links shared\n[PHY UR Goku (Angel)](https://dbz-dokkanbattle.fandom.com/wiki/Passing_the_Mantle_Goku_(Angel)) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► [PHY SR Goten (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/Fearless_Adventure_Goten_(Kid)) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "[1]: Lowers enemy's ATK by 20% for 3 turns";

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