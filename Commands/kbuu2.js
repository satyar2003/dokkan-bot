const Discord = require('discord.js')

module.exports = {
    name: 'kbuu2',
    description: 'INT UR Buu (Kid)',
    categories: ['[Resurrected Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Resurrected_Warriors)',
                 '[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Artificial Life Forms](https://dbz-dokkanbattle.fandom.com/wiki/Artificial_Life_Forms)',
                 '[Majin Power](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Power)'],
    link: ['[Majin](https://dbz-dokkanbattle.fandom.com/wiki/Majin)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +15%',
           '[Brutal Beatdown](https://dbz-dokkanbattle.fandom.com/wiki/Brutal_Beatdown)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[More than Meets the Eye](https://dbz-dokkanbattle.fandom.com/wiki/More_Than_Meets_the_Eye)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK & DEF +10%',
           '[Big Bad Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Big_Bad_Bosses)\n ­ ­ ­ ­ Level 1: ATK & DEF +25% when HP is 80% or below\n ­ ­ ­ ­ Level 10: ATK & DEF +25%',
           '[Infinite Regeneration](https://dbz-dokkanbattle.fandom.com/wiki/Infinite_Regeneration)\n ­ ­ ­ ­ Level 1: Recovers 3% HP\n ­ ­ ­ ­ Level 10: Ki +2 and recovers 3% HP and DEF +10%',
           '[The Wall Standing Tall](https://dbz-dokkanbattle.fandom.com/wiki/The_Wall_Standing_Tall)\n ­ ­ ­ ­ Level 1: Foils enemy\'s True Power and boosts ATK by 15%\n ­ ­ ­ ­ Level 10: Foils enemy\'s True Power and boosts ATK by 20%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Buu (Kid)'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./kbuu2.js')
        const {categories} = require('./kbuu2.js')
        const {status} = require('./kbuu2.js')
        const {plural} = require('./kbuu2.js')
        const {aliases} = require('./kbuu2.js')
        var color = 7028604;
        var name = "Transcendent Majin\nBuu (Kid)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Transcendent_Majin_Buu_(Kid)";
        var desc = "Extreme INT UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/746929328947855411/card_1009640_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/746929321079341066/latest.png?width=459&height=612";
        var leader = "[<:eint:729475498270523472>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_INT) Type Ki +3 and HP, ATK & DEF +120%; [<:sint:729475830794682449>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Super_INT) Type Ki +1 and HP, ATK & DEF +50%";
        var superatk = "[Super Vanishing Ball](https://dbz-dokkanbattle.fandom.com/wiki/File:(Super_Attack)_Buu_(Kid)_-_The_Unsurpassable_Majin): Causes immense damage to enemy and recovers 12% HP";
        var passive = "Single-Mindedness: ATK +100%; plu ATK +70% when HP is 30% or above";
        var stats = "HP: 13,875 (55%)/16,875 (100%)\nATK: 12,800 (55%)/15,800 (100%)\nDEF: 6,688 (55%)/9,688 (100%)";
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
        var apt = "APT: 4,457,490 (unsupported)/5,127,764 (supported)\nDefense: 63,941 (unsupported)/89,901 (supported) \nLinking Partner: [TEQ UR Majin Buu (South Supreme Kai)](https://dbz-dokkanbattle.fandom.com/wiki/Raging_Dash_Majin_Buu_(South_Supreme_Kai)) \nTeam: [Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)/[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost) \nBuild: 6 Additional/15 Critical";
        var blp = "[TEQ UR Majin Buu (South Supreme Kai)](https://dbz-dokkanbattle.fandom.com/wiki/Raging_Dash_Majin_Buu_(South_Supreme_Kai)) - 6 links shared\n[TEQ UR Buu (Super)](https://dbz-dokkanbattle.fandom.com/wiki/Destruction_Descending_Buu_(Super)) - 5 links shared\n[STR UR Buu (Super)](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Absorption_Ability_Buu_(Super)) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► Kid Buu won't be able to recover HP if the enemy evades his Super Attack";
        var footnotes = "";

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