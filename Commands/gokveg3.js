const Discord = require('discord.js')

module.exports = {
    name: 'gokveg3',
    description: 'STR LR Goku & Vegeta (Angel)',
    categories: ['[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Potara](https://dbz-dokkanbattle.fandom.com/wiki/Potara)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)',
                 '[Super Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyans)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))',
                 '[Final Trump Card](https://dbz-dokkanbattle.fandom.com/wiki/Final_Trump_Card)',
                 '[Battle of Wits](https://dbz-dokkanbattle.fandom.com/wiki/Battle_of_Wits)'],
    link: ['[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race)\n ­ ­ ­ ­ Level 1: ATK +5%\n ­ ­ ­ ­ Level 10: ATK +10%',
           '[Experienced Fighters](https://dbz-dokkanbattle.fandom.com/wiki/Experienced_Fighters)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'true',
    aliases: ['Goku & Vegeta (Angel)'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./gokveg3.js')
        const {categories} = require('./gokveg3.js')
        const {status} = require('./gokveg3.js')
        const {plural} = require('./gokveg3.js')
        const {aliases} = require('./gokveg3.js')
        var color = 8990259;
        var name = "Fused Hope\nGoku & Vegeta (Angel)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Fused_Hope_Goku_%26_Vegeta_(Angel)";
        var desc = "Super STR LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/754213213016555520/card_1020460_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/754213445255037029/7fLyMsrFnsDQygAAAAAElFTkSuQmCC.png";
        var leader = "\"[Battle of Wits](https://dbz-dokkanbattle.fandom.com/wiki/Battle_of_Wits)\" or \"[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)\" Category Ki +3, HP +130% and ATK & DEF +170%";
        var superatk = "[Cooperation Between Rivals](https://youtu.be/cZcywo_hetE?t=20) (12-17 Ki): Raises ATK & DEF for 1 turn[1] and causes colossal damage to enemy\n[Vegeta's Pride and Goku's Rage](https://youtu.be/cZcywo_hetE?t=39) (18+ Ki): Raises ATK & DEF for 1 turn[1] and causes mega-colossal damage to enemy";
        var passive = "A Common Goal: ATK & DEF +120%; reduces damage received by 30%; plus an additional Ki +1 per Type Ki Sphere obtained; medium chance[2] of launching an additional Super Attack";
        var active = "[Special Fusion](https://youtu.be/cZcywo_hetE?t=63): Performs Potara Fusion; can be activated when HP is 77% or less starting from the 4th turn from the start of battle (once only)"
        var stats = "HP: 22,300 (55%)/25,300 (100%)\nATK: 18,250 (55%)/21,650 (100%)\nDEF: 9,000 (55%)/11,600 (100%)";
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
        var apt = "APT: 8,026,740 (unsupported)/9,486,160 (supported)\nDefense: 164,704 (unsupported)/194,651 (supported) \nLinking Partner: [AGL LR Super Saiyan Goku](https://dbz-dokkanbattle.fandom.com/wiki/Miracle-Making_Super_Saiyan_Super_Saiyan_Goku) \nTeam: [Super Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyans) \nBuild: 6 Additional/20 Critical";
        var blp = "[AGL LR Super Saiyan Goku](https://dbz-dokkanbattle.fandom.com/wiki/Miracle-Making_Super_Saiyan_Super_Saiyan_Goku) - 5 links shared\n[INT LR Super Saiyan Goku & Super Saiyan Vegeta](https://dbz-dokkanbattle.fandom.com/wiki/Fused_Super_Power_Super_Saiyan_Goku_%26_Super_Saiyan_Vegeta) - 5 links shared\n[PHY LR Super Saiyan Goku (Angel) & Super Saiyan Vegeta (Angel)](https://dbz-dokkanbattle.fandom.com/wiki/Fused_Fighting_Force_Super_Saiyan_Goku_(Angel)_%26_Super_Saiyan_Vegeta_(Angel)) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 150%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%";
        var footnotes = "[1]: Raises SA Multiplier and DEF by 30% for 1 turn\n[2]: 25% chance to launch an additional Super Attack";

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
                        .setFooter("[1]: Raises SA Multiplier and DEF by 30% for 1 turn")
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
                        .setFooter("[2]: 25% chance to launch an additional Super Attack")
                    message.channel.send(passiveSkill)
                    break;

                case "active":
                    const activeSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
                        .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Active Skill", active)
                        .setTimestamp()
                    message.channel.send(activeSkill)
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