const Discord = require('discord.js')

module.exports = {
    name: 'vandr1',
    description: 'AGL UR Vegeta (Kid) & Raditz (Kid) without EZA',
    categories: ['[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)',
                 '[Youth](https://dbz-dokkanbattle.fandom.com/wiki/Youth)',
                 '[Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)'],
    link: ['[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race) (ATK +700)',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage) (Ki +1)',
           '[Frieza\'s Army](https://dbz-dokkanbattle.fandom.com/wiki/Frieza%27s_Army) (DEF +1000)',
           '[Brutal Beatdown](https://dbz-dokkanbattle.fandom.com/wiki/Brutal_Beatdown) (ATK +10%)',
           '[Thirst for Conquest](https://dbz-dokkanbattle.fandom.com/wiki/Thirst_for_Conquest) (ATK +15%)',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle) (Ki +2)',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit) (Ki +2)'],
    status: 'complete',
    plural: 'true',
    aliases: ['Vegeta (Kid) & Raditz (Kid)'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./vandr1.js')
        const {categories} = require('./vandr1.js')
        const {status} = require('./vandr1.js')
        const {plural} = require('./vandr1.js')
        const {aliases} = require('./vandr1.js')
        var color = 2317729;
        var name = "Daring Planetary Invasion\nVegeta (Kid) & Raditz (Kid)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Daring_Planetary_Invasion_Vegeta_(Kid)_%26_Raditz_(Kid)";
        var desc = "Extreme AGL UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/738578379128963112/card_1018950_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/738578436427350036/340.png";
        var leader = "\"[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)\" Category Ki +2 and HP, ATK & DEF +50%; or [Extreme Class](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_Class) Ki +2 and HP, ATK & DEF +30%";
        var superatk = "[Saiyan Aggression](https://youtu.be/XNVBRWWxlPY?t=62): Causes supreme damage to enemy and lowers ATK[1]";
        var passive = "Fearless Smile: ATK & DEF +60%; plus an additional Ki +1 and ATK & DEF +10% per \"[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)\" Category ally (self excluded) attacking in the same turn";
        var stats = "HP: 7,598 (55%)/9,998 (100%)\nATK: 8,454 (55%)/10,854 (100%)\nDEF: 4,457 (55%)/6,857 (100%)";
        var links = "";
            for (var i = 0; i < link.length; i++)
            {
                links += link[i] + "\n";
            }
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 921,136 (unsupported)/1,191,861 (supported)\nDefense: 49,370 (unsupported)/60,341 (supported) \nLinking Partner: [INT UR Paragus & Broly](https://dbz-dokkanbattle.fandom.com/wiki/Troublesome_Father_and_Son_Paragus_%26_Broly) \nTeam: [Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans) \nBuild: 14 Additional/6 Critical";
        var blp = "[INT UR Raditz](https://dbz-dokkanbattle.fandom.com/wiki/Ruthless_Invader_Raditz) - 5 links shared\n[STR UR Cumber](https://dbz-dokkanbattle.fandom.com/wiki/Unleashed_Saiyan_Cumber) - 5 links shared\n[INT UR Paragus & Broly](https://dbz-dokkanbattle.fandom.com/wiki/Troublesome_Father_and_Son_Paragus_%26_Broly) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► SA Lv.10 increases [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 20%\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Battle](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Area:_Saiyan_Trio_Led_by_Fate)** event";
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
            //var length = args.length;
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

                case sub === "stats":
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