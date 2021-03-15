const Discord = require('discord.js')

module.exports = {
    name: 'krillin3z',
    description: 'STR UR Krillin with EZA',
    categories: ['[Earthlings](https://dbz-dokkanbattle.fandom.com/wiki/Earthlings)',
                 '[Battle of Wits](https://dbz-dokkanbattle.fandom.com/wiki/Battle_of_Wits)',
                 '[Turtle School](https://dbz-dokkanbattle.fandom.com/wiki/Turtle_School)'],
    link: ['[Z Fighters](https://dbz-dokkanbattle.fandom.com/wiki/Z_Fighters)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Turtle School](https://dbz-dokkanbattle.fandom.com/wiki/Turtle_School_(Link_Skill))\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +10%',
           '[Courage](https://dbz-dokkanbattle.fandom.com/wiki/Courage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK +10%',
           '[High Compatibility](https://dbz-dokkanbattle.fandom.com/wiki/High_Compatibility)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +10%',
           '[Solid Support](https://dbz-dokkanbattle.fandom.com/wiki/Solid_Support)\n ­ ­ ­ ­ Level 1: ATK +10% and all enemies\' DEF -15%\n ­ ­ ­ ­ Level 10: ATK +15% and all enemies\' DEF -20%',
           '[Brainiacs](https://dbz-dokkanbattle.fandom.com/wiki/Brainiacs)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: ATK & DEF +15%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Krillin Z'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./krillin3z.js')
        const {categories} = require('./krillin3z.js')
        const {status} = require('./krillin3z.js')
        const {plural} = require('./krillin3z.js')
        const {aliases} = require('./krillin3z.js')
        var color = 8990259;
        var name = "Battle Expert\nKrillin Z";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Battle_Expert_Krillin#Extreme_Z-Awakened";
        var desc = "Super STR UR";
        var circle = "https://cdn.discordapp.com/attachments/712036120191434793/820866479418507334/card_1021450_circle.png";
        var character = "https://cdn.discordapp.com/attachments/712036120191434793/820866421571452929/340.png";
        var leader = "All Types Ki +3 and HP, ATK & DEF +50%";
        var superatk = "[Chain Destructo-Disc Barrage](https://youtu.be/6fRaaIHZvcc?t=41): Raises ATK & DEF for 1 turn[2], causes supreme damage to enemy and lowers DEF[1]";
        var passive = "Quick-Witted Assessment: ATK & DEF +70%; high chance[3] of guarding all attacks within the same turn as the 1st attacker in a turn, and medium chance[4] of guarding all attacks within the same turn as the 2nd or 3rd attacker in a turn; reduces damage received by 50% when guard is activated";
        var stats = "HP: 11,779 (55%)/13,579 (100%)\nATK: 10,886 (55%)/12,926 (100%)\nDEF: 7,314 (55%)/8,874 (100%)";
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
        var apt = "APT: 1,932,578 (unsupported)/2,387,318 (supported)\nDefense: 99,414 (unsupported)/122,805 (supported) \nLinking Partner: [INT UR Yamcha](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Declaration_of_War_Yamcha) \nTeam: [Earthlings](https://dbz-dokkanbattle.fandom.com/wiki/Earthlings) \nBuild: 6 Additional/20 Critical";
        var blp = "[INT UR Yamcha](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Declaration_of_War_Yamcha) - 4 links shared\n[TEQ UR Tien](https://dbz-dokkanbattle.fandom.com/wiki/All-Out_Focus_Tien) - 3 links shared\n[PHY UR Tien](https://dbz-dokkanbattle.fandom.com/wiki/Risky_Covering_Fire_Tien) - 3 links shared";
        var deets = "► 12 Ki Multiplier is 135%\n► [PHY SSR Krillin](https://dbz-dokkanbattle.fandom.com/wiki/Spirited_Earth_Defense_Krillin) & [PHY SR Krillin](https://dbz-dokkanbattle.fandom.com/wiki/Heartening_Support_Krillin) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals obtained from **[Baba's Shop](https://dbz-dokkanbattle.fandom.com/wiki/Incredible_Gems_Shop)**; click on any of the medals for a detailed overview of the Extreme Z-Awakening";
        var footnotes = "[1]: Lowers enemy's DEF by 40% for 3 turns\n[2]: Raises SA Multiplier and DEF by 30% for 1 turn\n[3]: 50% chance to guard all attacks\n[4]: 30% chance to guard all attacks";

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
                        .setFooter("[1]: Lowers enemy's DEF by 40% for 3 turns\n[2]: Raises SA Multiplier and DEF by 30% for 1 turn")
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
                        .setFooter("[3]: 50% chance to guard all attacks\n[4]: 30% chance to guard all attacks")
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