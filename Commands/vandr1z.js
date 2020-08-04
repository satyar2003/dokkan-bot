const Discord = require('discord.js')

module.exports = {
    name: 'vandr1z',
    description: 'AGL UR Vegeta (Kid) & Raditz (Kid) with EZA',
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
    aliases: ['Vegeta (Kid) & Raditz (Kid) Z'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./vandr1z.js')
        const {categories} = require('./vandr1z.js')
        const {status} = require('./vandr1z.js')
        const {plural} = require('./vandr1z.js')
        const {aliases} = require('./vandr1z.js')
        var color = 2317729;
        var name = "Daring Planetary Invasion\nVegeta (Kid) & Raditz (Kid) Z";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Daring_Planetary_Invasion_Vegeta_(Kid)_%26_Raditz_(Kid)#Extreme%20Z-Awakened";
        var desc = "Extreme AGL UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/738578379128963112/card_1018950_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/738578436427350036/340.png";
        var leader = "\"[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)\" Category Ki +3 and HP, ATK & DEF +77%; or [Extreme Class](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_Class) Ki +3 and HP, ATK & DEF +50%";
        var superatk = "[Saiyan Aggresion](https://youtu.be/XNVBRWWxlPY?t=62): Raises ATK[1], causes supreme damage to enemy and lowers ATK[2]";
        var passive = "Fearless Smile: ATK & DEF +70%; plus an additional Ki +1, ATK & DEF +20% and chance of performing a critical hit +10% per \"[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)\" Category ally (self excluded) attacking in the same turn; launches an additional attack that has a high chance[3] of becoming a Super Attack when there is another \"[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)\" Category ally attacking in the same turn";
        var stats = "HP: 9,621 (55%)/12,021 (100%)\nATK: 10,766 (55%)/13,166 (100%)\nDEF: 5,421 (55%)/7,821 (100%)";
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
        var apt = "APT: 2,973,501 (unsupported)/3,724,355 (supported)\nDefense: 65,696 (unsupported)/78,210 (supported) \nLinking Partner: [INT UR Paragus & Broly](https://dbz-dokkanbattle.fandom.com/wiki/Troublesome_Father_and_Son_Paragus_%26_Broly) \nTeam: [Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans) \nBuild: 14 Additional/6 Critical";
        var blp = "[INT UR Raditz](https://dbz-dokkanbattle.fandom.com/wiki/Ruthless_Invader_Raditz) - 5 links shared\n[STR UR Cumber](https://dbz-dokkanbattle.fandom.com/wiki/Unleashed_Saiyan_Cumber) - 5 links shared\n[INT UR Paragus & Broly](https://dbz-dokkanbattle.fandom.com/wiki/Troublesome_Father_and_Son_Paragus_%26_Broly) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► SA Lv.10 increases [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 20%\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Battle](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Area:_Saiyan_Trio_Led_by_Fate)** event";
        var footnotes = "[1]: Raises ATK 30% for 99 turns\n[2]: Lowers enemy's ATK by 20% for 3 turns\n[3]: 50% chance for additional attack to become a Super Attack";

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
                        .setFooter("[1]: Raises ATK 30% for 99 turns\n[2]: Lowers enemy's ATK by 20% for 3 turns")
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
                        .setFooter("[3]: 50% chance for additional attack to become a Super Attack")
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