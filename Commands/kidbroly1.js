const Discord = require('discord.js')

module.exports = {
    name: 'kidbroly1',
    description: 'INT UR Broly (Kid) without EZA',
    categories: ['[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Youth](https://dbz-dokkanbattle.fandom.com/wiki/Youth)'],
    link: ['[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race) (ATK +700)',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage) (Ki +1)',
           '[The Innocents](https://dbz-dokkanbattle.fandom.com/wiki/The_Innocents) (ATK +10%)',
           '[Prodigies](https://dbz-dokkanbattle.fandom.com/wiki/Prodigies) (ATK +10%)',
           '[Tough as Nails](https://dbz-dokkanbattle.fandom.com/wiki/Tough_as_Nails) (DEF +1500)',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle) (Ki +2)',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit) (Ki +2)'],
    status: 'incomplete',
    plural: 'false',
    aliases: ['Broly (Kid)'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./kidbroly1.js')
        const {categories} = require('./kidbroly1.js')
        const {status} = require('./kidbroly1.js')
        const {plural} = require('./kidbroly1.js')
        const {aliases} = require('./kidbroly1.js')
        var color = 7028604;
        var name = "First Friend\nBroly (Kid)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/First_Friend_Broly_(Kid)";
        var desc = "Extreme INT UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/738583571266142248/card_1018930_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/738583598277329012/latest.png?width=459&height=612";
        var leader = "\"[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)\" Category Ki +2 and HP, ATK & DEF +50%";
        var superatk = "Wild Bite: Causes supreme damage with a medium chance of stunning the enemy[1]";
        var passive = "Attack-Evasion Training: ATK & DEF +60%; medium chance[2] of evading enemy's attack (including Super Attack)";
        var stats = "HP: 7,748 (55%)/9,878 (100%)\nATK: 8,575 (55%)/10,975 (100%)\nDEF: 4,367 (55%)/6,767 (100%)";
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
        var apt = "APT: 794,325 (unsupported)/859,924 (supported)\nDefense: 43,308 (unsupported)/43,308 (supported) \nLinking Partner: [PHY UR Super Saiyan Broly](https://dbz-dokkanbattle.fandom.com/wiki/Endless_Evolution_of_the_Warrior_Race_Super_Saiyan_Broly) \nTeam: [Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans) \nBuild: 5 Additional/15 Critical";
        var blp = "[INT UR Gohan (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/Roar_of_Rage_Gohan_(Kid)) - 5 links shared\n[STR UR Cumber](https://dbz-dokkanbattle.fandom.com/wiki/Unleashed_Saiyan_Cumber) - 5 links shared\n[PHY UR Shugesh](https://dbz-dokkanbattle.fandom.com/wiki/Ruffian%27s_Strike_Shugesh) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► Super Attack can be launched at 9 Ki starting from SA Lv.10\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Area](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Area:_Saiyan_Trio_Led_by_Fate)** event";
        var footnotes = "[1]: 30% chance to stun the enemy for 2 turns\n[2]: 25% chance to evade enemy's attack";

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
                        .setFooter("[1]: 30% chance to stun the enemy for 2 turns")
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
                        .setFooter("[2]: 25% chance to evade enemy's attack")
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
                        .addField("Attack Per Turn", apt)
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