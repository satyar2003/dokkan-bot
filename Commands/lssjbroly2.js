const Discord = require('discord.js')

module.exports = {
    name: 'lssjbroly2',
    description: 'PHY UR Legendary Super Saiyan Broly without EZA',
    categories: ['[Movie Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Movie_Bosses)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Target: Goku](https://dbz-dokkanbattle.fandom.com/wiki/Target:_Goku)',
                 '[Exploding Rage](https://dbz-dokkanbattle.fandom.com/wiki/Exploding_Rage)',
                 '[Inhuman Deeds](https://dbz-dokkanbattle.fandom.com/wiki/Inhuman_Deeds)'],
    link: ['[Hardened Grudge](https://dbz-dokkanbattle.fandom.com/wiki/Hardened_Grudge) (Ki +1)',
           '[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race) (ATK +700)',
           '[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan) (ATK +10%)',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage) (Ki +1)',
           '[Berserker](https://dbz-dokkanbattle.fandom.com/wiki/Berserker) (ATK +20% when HP is 50% or below)',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle) (Ki +2)',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle) (ATK +15%)'],
    status: 'complete',
    plural: 'false',
    aliases: ['lssbroly2', 'Legendary Super Saiyan Broly'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./lssjbroly2.js')
        const {categories} = require('./lssjbroly2.js')
        const {status} = require('./lssjbroly2.js')
        const {plural} = require('./lssjbroly2.js')
        const {aliases} = require('./lssjbroly2.js')
        var color = 7164715;
        var name = "Eternal Horror\nLegendary Super Saiyan Broly";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Eternal_Horror_Legendary_Super_Saiyan_Broly";
        var desc = "Extreme PHY UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/718198867124027472/card_1007460_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/720701819407564830/340.png";
        var leader = "[<:phy:729467520272039988>](https://dbz-dokkanbattle.fandom.com/wiki/Category:PHY) Type Ki +3 and HP, ATK & DEF +70%";
        var superatk = "Omega Blaster: Causes supreme damage to enemy";
        var passive = "No Mercy: ATK +7000 & attack with an additional Super ATK when Ki is 8 or more";
        var stats = "HP: 12,350 (55%)/15,750 (100%)\nATK: 11,500 (55%)/14,500 (100%)\nDEF: 5,325 (55%)/7,925 (100%)";
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
        var apt = "APT: 1,764,625 (unsupported)/2,977,488 (supported)\nDefense: 31,700 (unsupported)/40,153 (supported) \nLinking Partner: [AGL UR Turles](https://dbz-dokkanbattle.fandom.com/wiki/Explosive_Evolution_Turles) \nTeam: [Movie Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Movie_Bosses)/[Extreme Class](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_Class) \nBuild: 11 Additional/15 Critical";
        var blp = "[TEQ LR Super Saiyan Broly](https://dbz-dokkanbattle.fandom.com/wiki/Nightmarish_Impact_Super_Saiyan_Broly) - 6 links shared\n[AGL UR Broly (Wrathful)](https://dbz-dokkanbattle.fandom.com/wiki/Unusual_Evolution_Broly_(Wrathful)) - 5 links shared\n[PHY UR Super Saiyan Broly](https://dbz-dokkanbattle.fandom.com/wiki/Endless_Evolution_of_the_Warrior_Race_Super_Saiyan_Broly) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 150%\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Battle](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Battle:_Eternal_Horror_Legendary_Super_Saiyan_Broly)** event";
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
            var length = args.length;
            var sub = args[0];
            switch (true)
            {
                case length == 0:
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
                    
                case sub === "leader":
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

                case sub === "super":
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

                case sub === "passive":
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

                case sub === "links":
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

                case sub === "categories":
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

                case sub === "apt":
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

                case sub === "partners":
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

                case sub === "details":
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

                case sub === "art":
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