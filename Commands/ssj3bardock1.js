const Discord = require('discord.js')

module.exports = {
    name: 'ssj3bardock1',
    description: 'INT UR Super Saiyan 3 Bardock',
    categories: ['[Super Saiyan 3](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan_3)',
                 '[Resurrected Warrior](https://dbz-dokkanbattle.fandom.com/wiki/Resurrected_Warriors)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)',
                 '[Goku\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)',
                 '[Revenge](https://dbz-dokkanbattle.fandom.com/wiki/Revenge)'],
    link: ['[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Experienced Fighters](https://dbz-dokkanbattle.fandom.com/wiki/Experienced_Fighters)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Over in a Flash](https://dbz-dokkanbattle.fandom.com/wiki/Over_in_a_Flash)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK +7%',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Limit-Breaking Form](https://dbz-dokkanbattle.fandom.com/wiki/Limit-Breaking_Form)\n ­ ­ ­ ­ Level 1: ATK +5% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +10% when Super Attack is launched',
           '[The First Awakened](https://dbz-dokkanbattle.fandom.com/wiki/The_First_Awakened)\n ­ ­ ­ ­ Level 1: ATK +25%\n ­ ­ ­ ­ Level 10: ATK +25% and DEF +10%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['ss3bardock1', 'Super Saiyan 3 Bardock'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./ssj3bardock1.js')
        const {categories} = require('./ssj3bardock1.js')
        const {status} = require('./ssj3bardock1.js')
        const {plural} = require('./ssj3bardock1.js')
        const {aliases} = require('./ssj3bardock1.js')
        var color = 7028604;
        var name = "Mark of Saiyan Strength\nSuper Saiyan 3 Bardock";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Mark_of_Saiyan_Strength_Super_Saiyan_3_Bardock";
        var desc = "Super INT UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/746602084849418280/card_1011780_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/746602120161263736/340.png";
        var leader = "\"[Super Saiyan 3](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan_3)\" Category Ki +3 and HP +130%, ATK & DEF +170%; or [Super INT](https://dbz-dokkanbattle.fandom.com/wiki/Category:Super_INT) Type Ki +3 and HP, ATK & DEF +90%";
        var superatk = "[Rebellion Edge](https://dbz-dokkanbattle.fandom.com/wiki/File:(Super_Attack)_Super_Saiyan_3_Bardock_-_Saiyan%27s_Proof_of_Power): Causes immense damage to enemy; medium chance to seal Super Attack[1]";
        var passive = "Super-Awakened Assault: ATK & DEF +100% when performing a Super Attack; all Super Class allies' ATK +40% when HP is 70% or below";
        var stats = "HP: 13,020 (55%)/16,020 (100%)\nATK: 12,728 (55%)/15,728 (100%)\nDEF: 7,955 (55%)/10,955 (100%)";
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
        var apt = "APT: 2,799,196 (unsupported)/3,498,995 (supported)\nDefense: 82,820 (unsupported)/103,525 (supported) \nLinking Partner: [AGL LR Super Saiyan Goku](https://dbz-dokkanbattle.fandom.com/wiki/Miracle-Making_Super_Saiyan_Super_Saiyan_Goku) \nTeam: [Siblings' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)/[Goku's Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family) \nBuild: 6 Additional/15 Critical";
        var blp = "[AGL UR Super Saiyan 3 Goku](https://dbz-dokkanbattle.fandom.com/wiki/Boiling_Power_Super_Saiyan_Goku#Super%20Saiyan%203) - 5 links shared\n[INT UR Super Gogeta](https://dbz-dokkanbattle.fandom.com/wiki/Outshining_Darkness_Super_Gogeta) - 5 links shared\n[AGL LR Super Saiyan Goku](https://dbz-dokkanbattle.fandom.com/wiki/Miracle-Making_Super_Saiyan_Super_Saiyan_Goku) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 150%\n► When HP is 70% or below, his additional ATK +40% is calculated separately at the start of turn, for a total boost of ATK +180% when performing a Super Attack\n► [AGL SSR Super Saiyan 3 Bardock](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Counterattack_Super_Saiyan_3_Bardock) can be [used](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "[1]: 30% chance to seal enemy's Super Attack";

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