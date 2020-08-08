const Discord = require('discord.js')

module.exports = {
    name: 'kidbroly1z',
    description: 'INT UR Broly (Kid) with EZA',
    categories: ['[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Youth](https://dbz-dokkanbattle.fandom.com/wiki/Youth)'],
    link: ['[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race)\n ­ ­ ­ ­ Level 1: ATK +5%\n ­ ­ ­ ­ Level 10: ATK +10%',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[The Innocents](https://dbz-dokkanbattle.fandom.com/wiki/The_Innocents)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Prodigies](https://dbz-dokkanbattle.fandom.com/wiki/Prodigies)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Tough as Nails](https://dbz-dokkanbattle.fandom.com/wiki/Tough_as_Nails)\n ­ ­ ­ ­ Level 1: DEF +15%\n ­ ­ ­ ­ Level 10: DEF +20% and damage received -5%',
           '[Prepared for Battle](https://dbz-dokkanbattle.fandom.com/wiki/Prepared_for_Battle)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Broly (Kid) Z'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./kidbroly1z.js')
        const {categories} = require('./kidbroly1z.js')
        const {status} = require('./kidbroly1z.js')
        const {plural} = require('./kidbroly1z.js')
        const {aliases} = require('./kidbroly1z.js')
        var color = 7028604;
        var name = "First Friend\nBroly (Kid) Z";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/First_Friend_Broly_(Kid)#Extreme%20Z-Awakened";
        var desc = "Extreme INT UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/738583571266142248/card_1018930_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/738583598277329012/latest.png?width=459&height=612";
        var leader = "\"[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)\" Category Ki +3 and HP, ATK & DEF +77%; or <:int:729468835819946026> Type Ki +3 and HP, ATK & DEF +50%";
        var superatk = "[Wild Bite](https://youtu.be/XNVBRWWxlPY?t=81): Raises ATK & DEF[1] and causes supreme damage with a medium chance of stunning the enemy[2]";
        var passive = "Attack-Evasion Training: ATK & DEF +70% and disables enemy's guard; medium chance[3] of evading enemy's attack (including Super Attack); deliver the final blow to recover 20% HP at the end of turn";
        var stats = "HP: 9,461 (55%)/11,861 (100%)\nATK: 10,928 (55%)/13,328 (100%)\nDEF: 5,300 (55%)/7,700 (100%)";
        var links = "";
            for (var i = 0; i < Math.ceil(link.length/2); i++)
            {
                links += link[i] + "\n";
            }
        var links2 = "";
            for (var i = Math.ceil(link.length/2); i < link.length; i++)
            {
                links += link[i] + "\n";
            }
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 1,364,260 (unsupported)/1,470,515 (supported)\nDefense: 62,194 (unsupported)/62,194 (supported) \nLinking Partner: [PHY UR Super Saiyan Broly](https://dbz-dokkanbattle.fandom.com/wiki/Endless_Evolution_of_the_Warrior_Race_Super_Saiyan_Broly) \nTeam: [Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans) \nBuild: 5 Additional/15 Critical";
        var blp = "[INT UR Gohan (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/Roar_of_Rage_Gohan_(Kid)) - 5 links shared\n[STR UR Cumber](https://dbz-dokkanbattle.fandom.com/wiki/Unleashed_Saiyan_Cumber) - 5 links shared\n[PHY UR Shugesh](https://dbz-dokkanbattle.fandom.com/wiki/Ruffian%27s_Strike_Shugesh) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► Super Attack can be launched at 9 Ki starting from SA Lv.10\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Area](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Area:_Saiyan_Trio_Led_by_Fate)** event";
        var footnotes = "[1]: Raises ATK & DEF by 20% for 99 turns\n[2]: 30% chance to stun the enemy for 2 turns\n[3]: 25% chance to evade enemy's attack";

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
                                {name: "Links cont.", value: links},
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
                        .setFooter("[1]: Raises ATK & DEF by 20% for 99 turns\n[2]: 30% chance to stun the enemy for 2 turns")
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
                        .setFooter("[3]: 25% chance to evade enemy's attack")
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