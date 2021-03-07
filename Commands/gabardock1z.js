const Discord = require('discord.js')

module.exports = {
    name: 'gabardock1z',
    description: 'AGL UR Bardock (Giant Ape) with EZA',
    categories: ['[Low-Class Warrior](https://dbz-dokkanbattle.fandom.com/wiki/Low-Class_Warrior)',
                 '[Giant Form](https://dbz-dokkanbattle.fandom.com/wiki/Giant_Form)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Goku\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)', 
                 '[Team Bardock](https://dbz-dokkanbattle.fandom.com/wiki/Team_Bardock)',
                 '[All-Out Struggle](https://dbz-dokkanbattle.fandom.com/wiki/All-Out_Struggle)',
                 '[Giant Ape Power](https://dbz-dokkanbattle.fandom.com/wiki/Giant_Ape_Power)',
                 '[Space-Traveling Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Space-Traveling_Warriors)'],
    link: ['[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race)\n ­ ­ ­ ­ Level 1: ATK +5%\n ­ ­ ­ ­ Level 10: ATK +10%',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%',
           '[Team Bardock](https://dbz-dokkanbattle.fandom.com/wiki/Team_Bardock_(Link_Skill))\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +10%',
           '[Saiyan Pride](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Pride)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Saiyan Roar](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Roar)\n ­ ­ ­ ­ Level 1: ATK +25%\n ­ ­ ­ ­ Level 10: ATK +25% and DEF +10%',
           '[Transform](https://dbz-dokkanbattle.fandom.com/wiki/Transform)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +3 and DEF +10%',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit)\n ­ ­ ­ ­ Level 1: ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Bardock (Giant Ape) Z'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./gabardock1z.js')
        const {categories} = require('./gabardock1z.js')
        const {status} = require('./gabardock1z.js')
        const {plural} = require('./gabardock1z.js')
        const {aliases} = require('./gabardock1z.js')
        var color = 2317729;
        var name = "Power Demonstrated in Clashes\nBardock (Giant Ape) Z";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Power_Demonstrated_in_Clashes_Bardock_(Giant_Ape)#Extreme_Z-Awakened";
        var desc = "Super AGL UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/818015373386580049/card_1021440_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/818015622071320606/AZYCvQW9cFmfAAAAAElFTkSuQmCC.png";
        var leader = "\"[Giant Form](https://dbz-dokkanbattle.fandom.com/wiki/Giant_Form)\" Category Ki +4 and HP, ATK & DEF +77%; or AGL Type Ki +3 and HP, ATK & DEF +50%";
        var superatk = "[Final Spirit Cannon](https://www.youtube.com/watch?v=6fRaaIHZvcc): Raises ATK & DEF for 1 turn[1] and causes supreme damage to enemy";
        var passive = "Feats of Valor: Ki +3 and ATK & DEF +77%; plus an additional ATK +77% when facing 2 or more enemies; plus an additional Ki +3 and ATK +77% when there is a \"[Wicked Bloodline](https://dbz-dokkanbattle.fandom.com/wiki/Wicked_Bloodline)\" Category enemy; turns into Giant Ape when conditions are met";
        var stats = "HP: 14,174 (55%)/15,734 (100%)\nATK: 11,104 (55%)/12,904 (100%)\nDEF: 5,844 (55%)/7,884 (100%)";
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
        var apt = "APT: 2,532,545 (unsupported)/3,063,590 (supported)\nDefense: 114,582 (unsupported)/140,478 (supported) \nLinking Partner: [AGL UR Tora (Giant Ape)](https://dbz-dokkanbattle.fandom.com/wiki/Plucky_Low-Class_Warrior_Tora_(Giant_Ape)) \nTeam: [Giant Ape Power](https://dbz-dokkanbattle.fandom.com/wiki/Giant_Ape_Power) \nBuild: 11 Additional/15 Critical";
        var blp = "[AGL UR Tora (Giant Ape)](https://dbz-dokkanbattle.fandom.com/wiki/Plucky_Low-Class_Warrior_Tora_(Giant_Ape)) - 7 links shared\n[INT UR Shugesh (Giant Ape)](https://dbz-dokkanbattle.fandom.com/wiki/Greedy_Attack_Mode_Shugesh_(Giant_Ape)) - 6 links shared\n[PHY UR Borgos (Giant Ape)](https://dbz-dokkanbattle.fandom.com/wiki/Feverish_Battlefield_Borgos_(Giant_Ape)) - 6 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► Can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack of other [Bardock (Giant Ape)](https://dbz-dokkanbattle.fandom.com/wiki/Bardock_(disambiguation)#BARDOCK_.28GIANT_APE.29) cards\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the Extreme Z-Area event; click on any of the medals for a detailed overview of the Extreme Z-Awakening ";
        var transform = "Chance[2] of turning into Giant Ape (up to 2 times)";
        var footnotes = "[1]: Raises SA Multiplier and DEF by 30% for 1 turn\n[2]: 10% chance to turn into Giant Ape";

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
                                {name: "Transformaiton Condition", value: transform},
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
                    message.channel.send(passiveSkill)
                    break;

                case "transform":
                    const transformCond = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
                        .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Transformation Condition", transform)
                        .setTimestamp()
                        .setFooter("[2]: 10% chance to turn into Giant Ape")
                    message.channel.send(transformCond)
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